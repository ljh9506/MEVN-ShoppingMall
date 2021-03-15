<template>
  <section class="review">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="review__container">
            <div class="review__overview">
              <div class="row">
                <div class="col-lg-6">
                  <div class="box__score">
                    <p class="text__value">
                      {{ parseFloat(product.averageRating).toFixed(1) }}
                    </p>
                    <div class="box__star">
                      <starRating
                        :rating="product.averageRating"
                        :show-rating="false"
                        :glow="1"
                        :border-width="1"
                        :round-start-rating="false"
                        :read-only="true"
                        :star-size="36"
                        active-color="#ff6347"
                        :star-points="[
                          23,
                          2,
                          14,
                          17,
                          0,
                          19,
                          10,
                          34,
                          7,
                          50,
                          23,
                          43,
                          38,
                          50,
                          36,
                          34,
                          46,
                          19,
                          31,
                          17
                        ]"
                      >
                      </starRating>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="box__graph">
                    <ul class="list">
                      <li
                        class="list-item"
                        v-for="(rating, i) in ratingCounts"
                        :key="i"
                      >
                        <div class="bar-center">
                          <p class="text__label">{{ 5 - i }}점</p>
                          <p class="text__rate">
                            {{
                              isNaN(((rating / ratingSum) * 100).toFixed(0))
                                ? 0
                                : ((rating / ratingSum) * 100).toFixed(0)
                            }}%
                          </p>
                          <div class="box__bar">
                            <span class="image__bar"></span>
                            <span
                              class="image__bar-fill"
                              :style="
                                `height: ${((rating / ratingSum) * 100).toFixed(
                                  0
                                )}%`
                              "
                            ></span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="review__list__container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="review__sort">
                    <ul class="sort__list">
                      <li><a href="#">인기순</a></li>
                      <li><a href="#">최신순</a></li>
                    </ul>
                    <router-link
                      :to="{
                        path: `/review/${product.id}`
                      }"
                      class="review__write"
                    >
                      <span>
                        Write Review
                      </span>
                    </router-link>
                  </div>
                </div>
              </div>
              <div
                class="single__list__content"
                v-for="review in product.reviews"
                :key="review._id"
              >
                <div class="row">
                  <div class="col-lg-12">
                    <div class="review__list__top">
                      <div class="rating">
                        <div class="filled__star">
                          <i
                            class="fas fa-star"
                            v-for="i in parseInt(review.rating)"
                            :key="i"
                          ></i>
                        </div>
                        <div class="empty__star">
                          <i
                            class="far fa-star"
                            v-for="i in Math.abs(5 - parseInt(review.rating))"
                            :key="i"
                          ></i>
                        </div>
                      </div>
                      <p class="text__writer">{{ review.writer.email }}</p>
                      <p class="text__date">
                        {{ review.created_at | formatDate }}
                      </p>
                      <div class="box__recommend">
                        <span
                          class="deleteButton"
                          @click="onDeleteReview(review)"
                          >Delete this review</span
                        >
                        <span class="text">Was it helpful?</span>
                        <button class="review__btn">
                          <i class="far fa-thumbs-up"></i>
                          <span class="btn__count">0</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="review__list__bottom">
                      <p class="text">{{ review.description }}</p>
                      <div class="review__img">
                        <img
                          :src="review.photo"
                          alt="review_img"
                          @click="showModal($event)"
                        />
                      </div>

                      <!-- modal -->
                      <div
                        class="overlay"
                        v-if="modal"
                        @click="clickModal($event)"
                      >
                        <div class="modal" v-if="modal">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="modal__top">
                                <h3>Preview</h3>
                                <span class="close" @click="clickModal($event)">
                                  <i class="fas fa-times cancel-btn"></i>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class="col-lg-12 item__box">
                              <div class="preview__img">
                                <img :src="imgSrc" alt="img" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import starRating from "vue-star-rating";
import { interceptorAxios } from "../api/index";
import axios from "axios";
export default {
  components: {
    starRating
  },
  data() {
    return {
      product: "",
      modal: false,
      imgSrc: "",
      ratings: [],
      ratingCounts: "",
      ratingSum: 0
    };
  },

  methods: {
    async onDeleteReview(review) {
      console.log(review.productID, review._id);
      try {
        if (confirm("Are you sure you want to delete it?") === true) {
          const response = await interceptorAxios.delete(
            `reviews/${review._id}?productID=${review.productID}`
          );
          if (response.data.success) {
            await this.fetchData();
          }
        } else {
          return;
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    showModal(e) {
      console.log(e.target.src);
      this.imgSrc = e.target.src;
      this.modal = true;
    },
    clickModal(e) {
      if (
        e.target.classList.contains("cancel-btn") ||
        e.target.classList.contains("overlay")
      ) {
        this.modal = false;
      }
    },
    async fetchData() {
      this.product = "";
      this.ratings = [];
      this.ratingCounts = [];
      this.ratingSum = 0;

      const response = await axios.get(
        `/api/products/${this.$route.params.id}`
      );
      this.product = response.data.product;
      this.product.reviews.forEach(prod => this.ratings.push(prod.rating));
      console.log(this.ratings);
      this.ratingCounts = this.ratings
        .reduce(
          (acc, current) => {
            if (acc[current - 1]) {
              acc[current - 1] += 1;
            } else {
              acc[current - 1] = 1;
            }
            return acc;
          },
          [0, 0, 0, 0, 0]
        )
        .slice()
        .reverse();
      this.ratingCounts.forEach(rating => (this.ratingSum += rating));
      console.log(this.ratingCounts);
    }
  },
  async mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
.overlay {
  z-index: 9998;
}
.modal {
  z-index: 9999;
  min-width: 300px;
}
.item__box {
  display: flex;
  justify-content: center;
}

.preview__img img {
  display: block;
  margin: 0 auto;
  width: 100%;
}
.cancel-btn {
  cursor: pointer;
}
.review__container {
  margin-top: 100px;
}
.review__overview {
  border: 1px solid #e5e5e5;
  padding: 34px 0;
}
.box__score {
  border-right: 1px solid #e5e5e5;
}
.text__value {
  font-size: 45px;
  text-align: center;
}
.box__star {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 32px;
  color: tomato;
  margin-top: 18px;
}
.list-item {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px 0 26px 0;
  width: 60px;
}
.text__label {
  position: absolute;
  bottom: 0;
}
.text_rate {
  position: absolute;
  display: block;
  text-align: center;
  top: 0;
}
.box__bar {
  position: relative;
}
.image__bar {
  position: relative;
  display: block;
  width: 10px;
  height: 68px;
  margin: 0 auto;

  border-radius: 12px;
  background-color: #e5e5e5;
}
.image__bar-fill {
  position: absolute;
  display: block;
  left: 0;
  right: 0;
  bottom: 0;
  width: 10px;
  margin: 0 auto;
  border-radius: 12px;
  background-color: tomato;
}
.bar-center {
  margin: 0 auto;
}
.list {
  display: flex;
  justify-content: center;
}
.review__sort {
  display: flex;
  align-items: center;
  padding: 20px 0 20px 0;
}
.review__write {
  display: block;
  margin-left: auto;
  border: 2px solid #000;
  padding: 12px 20px;
  border-radius: 24px;
  font-weight: bolder;
  cursor: pointer;
}
.sort__list {
  display: flex;
}
.sort__list a {
  display: block;
  margin: 12px 12px 12px 0;
  font-weight: bold;
}
.sort__list a:active {
  color: tomato;
}
.review__list__top {
  display: flex;
  align-items: center;
}
.box__recommend {
  margin-left: auto;
}
.rating {
  display: flex;
  flex-direction: row !important;
}
.text__writer {
  color: #acacac;
  font-size: 13px;
  margin: 0 20px 0 20px;
}
.text__date {
  color: #acacac;
  font-size: 16px;
  padding-left: 12px;
  border-left: 1px solid #acacac;
}
.review__btn {
  padding: 12px 20px;
  border: 1px solid #acacac;
  border-radius: 24px;
  background-color: #fff;
  margin-left: 20px;
}
.review__btn i {
  color: tomato;
}
.btn__count {
  margin-left: 12px;
}
.review__list__bottom {
  border-bottom: 1px solid #efefef;
  padding-bottom: 32px;
}
.review__list__bottom .text {
  margin: 12px 0 12px 0;
}
.pic {
  width: 200px;
  height: 200px;
  background-color: tomato;
}
.review__img img {
  display: block;
  cursor: pointer;
  width: 200px;
}
.deleteButton {
  display: inline-block;
  padding: 5px 10px;
  color: #acacac;
  border-radius: 24px;
  font-weight: bolder;
  cursor: pointer;
  margin-right: 20px;
}
</style>
