<template>
  <div>
    <section class="bread__crumb">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Detail</h2>
            <span>Home > Detail</span>
          </div>
        </div>
      </div>
    </section>
    <section class="detail">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 img__container">
            <div class="main__img">
            <img :src="product.photo" alt="img" class="product__img" v-if="product.photo"/>
                <Spinner v-else/>
            </div>
            <div class="row sub__img">
              <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                <div class="particial__img" @click="changeImg(product.photo)" v-if="product.photo">
                  <img :src="product.photo" alt="img"  />

                </div>
                   <div v-else></div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                <div class="particial__img" @click="changeImg(product.photo)" v-if="product.photo">
                  <img :src="product.photo" alt="img"  />

                </div>
                                      <div v-else></div>

              </div>
              <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                <div class="particial__img" @click="changeImg(product.photo)" v-if="product.photo">
                  <img :src="product.photo" alt="img"  />

                </div>
                                      <div v-else></div>

              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="product__desc">
              <h2>{{ product.title }}</h2>
              <div class="product__info">
                <div class="rating">
                  <starRating
                    :rating="product.averageRating"
                    :show-rating="false"
                    :glow="1"
                    :border-width="1"
                    :round-start-rating="false"
                    :read-only="true"
                    :star-size="18"
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
                <div class="prod__quantity">
                  <span class="divis">|</span>
                  <p>quantity left {{ product.stockQuantity }}</p>
                </div>
                <div class="prod__icon">
                  <i class="far fa-heart"></i>
                  <i class="fas fa-link"></i>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="deliver__schedule">
                <i class="fas fa-truck"></i>
                <p>scheduled to depart tomorrow</p>
              </div>
            </div>
            <div class="row product__info">
              <div>
                    <p slot="header">
                      Parcel Service -
                      <span class="free__shipping">free shipping</span>
                    </p>
                    <p>
                      Category : {{product.category}}
                    </p>
                    <h3>
                      Description : {{product.description}}
                    </h3>
              </div>
            </div>
            <div class="row">
              <div class="quantity__control">
                <span class="quantity"> Quantity </span>
                <hr class="div" />
                <div class="control">
                  <div class="button__wrap">
                    <button class="minus" @click="minusPrice">-</button>
                    <span class="control__num">{{ quantity }}</span>
                    <button class="plus" @click="addPrice">+</button>
                  </div>
                  <span class="control__price">${{ price }}</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="total__price">
                <span>Total Price</span>
                <strong>${{ price }}</strong>
              </div>
            </div>
            <div class="row">
              <div class="btn__group">
                <!-- <button
                  class="cart__button"
                  
                >
                  Add to Cart
                </button> -->
                <!-- @click="addProductToCart({ product, quantity })" -->
                <button
                  @click="
                    (showModal = true), addProductToCart({ product, quantity })
                  "
                  class="cart__button"
                >
                  Add to Cart
                </button>
                <!-- overlay -->
                <div
                  class="overlay"
                  v-if="showModal"
                  @click="showModal = false"
                >
                  <div class="modal" v-if="showModal">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="modal__top">
                          <h3>Cart</h3>
                          <span class="close" @click="showModal = false">
                            <i class="fas fa-times"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="modal__main">
                          <div class="total__cart__quantity">
                            <span>총 {{ this.$store.state.cartLength }}개</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12 item__box">
                        <div
                          class="cart__items col-lg-3"
                          v-for="item in this.$store.state.cart"
                          :key="item.id"
                        >
                          <div class="cart__item">
                            <router-link :to="`/detail/${item.id}`">
                              <img :src="item.photo" alt="img" />
                            </router-link>
                            <span>{{ item.description }}</span>
                            <strong>${{ item.price }}</strong>
                            <span>Quantity: {{ item.quantity }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="modal__footer">
                          <div class="modal__button">
                            <router-link to="/cart">
                              <button class="modal-btn">Go to Cart</button>
                            </router-link>
                            <button
                              class="modal-btn"
                              @click="showModal = false"
                            >
                              Keep Shopping
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- modal -->
                <button class="payment__button">Purchase</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="recommend">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <h2>recommend Products</h2>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="slider">
                  <Carousel
                    :per-page="3"
                    :navigationEnabled="true"
                    :navigationClickTargetSize="10"
                    :paginationEnabled="false"
                  >
                    <Slide v-for="(product, i) in recommendedProducts" :key="i">
                      <div class="col-lg-12 col-12">
                        <div
                          class="slide__item"
                          @mousedown="down($event)"
                          @mouseup="up($event, product)"
                        >
                          <img
                            :src="product.photo"
                            alt="img"
                            class="product__img"
                          />
                        </div>
                      </div>
                    </Slide>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Review />
  </div>
</template>

<script>
import Review from "../components/Review";
import starRating from "vue-star-rating";
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";
import Spinner from "../components/Spinner";

export default {
  components: {
    Carousel,
    Slide,
    Review,
    starRating,
    Spinner
  },
  data() {
    return {
      product: "",
      imgPath: "",
      price: "",
      recommendedProducts: "",
      quantity: 1,
      scrollX: "",
      showModal: false
    };
  },

  methods: {
    addPrice() {
      this.price += this.product.price;
      this.quantity++;
      console.log(this.price);
    },
    minusPrice() {
      if (this.quantity <= 1) {
        return;
      }
      this.price -= this.product.price;
      this.quantity--;
    },
    changeImg(imgPath) {
      this.imgPath = imgPath;
    },
    async fetchData() {
      try {
        const recommendedProducts = axios.get("/api/products");
        const product = axios.get(`/api/products/${this.$route.params.id}`);
        const [productsResponse, singleResponse] = await Promise.all([
          recommendedProducts,
          product
        ]);
        this.product = singleResponse.data.product;
        this.price = singleResponse.data.product.price;
        this.imgPath = singleResponse.data.product.photo;
        this.recommendedProducts = productsResponse.data.products;
        console.log(this.product);
      } catch (error) {
        console.log(error);
      }
    },
    showDetail(product) {
      if (this.product._id === product._id) {
        return;
      }
      this.$router.push(`/detail/${product._id}`);
    },
    checkX(product) {
      if (Math.abs(this.scrollX) < 20) {
        this.showDetail(product);
        return;
      }
    },
    down(e) {
      this.scrollX = e.screenX;
    },
    up(e, product) {
      this.scrollX -= e.screenX;

      this.checkX(product);
    },
    addProductToCart(payload) {
      this.$store.dispatch("addProductToCart", payload);
      this.quantity = 0;
      this.price = 0;
    }
  },
  mounted() {
    console.log(this.$route.params);
    this.fetchData();
  }
};
</script>

<style>
.product__info {
  display: flex;
  align-items: center;
}
.img__container {
  display: flex;
  flex-direction: column;
}

.main__img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
}
.sub__img {
  display: flex;
  margin: 0 auto;
}
.overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: fixed;
  width: auto;
  height: auto;
  z-index: 9999;
  margin: 0px auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}

.close {
  border: none;
  background-color: inherit;
  margin-left: auto;
  margin-right: 10px;
}
.modal__top {
  display: flex;
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
}
.modal__main {
  padding: 15px 0;
  margin: 0 20px 15px;
}
.item__box {
  display: flex;
  padding: 20px;
}
.cart__item {
  display: flex;
  flex-direction: column;
}
.modal__footer {
  padding: 30px 0;
  border-top: 1px solid #d7d5d5;
  background-color: #fbfafa;
}
.modal__button {
  display: flex;
  justify-content: center;
}
.modal-btn {
  padding: 10px 30px;
  background-color: #000;
  color: #fff;
  border: none;
  margin-right: 12px;
  font-weight: bold;
  cursor: pointer;
}
.modal_button .total__cart__quantity {
  padding-bottom: 10px;
  border-bottom: 1px solid #ececec;
}
.other__img {
  display: flex;
}
.particial__img {
  display: flex;
  margin-top: 32px;
  cursor: pointer;
}
.particial__img img {
  display: inline-flex;
  width: 100%;
}
.bread__crumb {
  background-color: #f3f2ee;
  padding: 80px 0 40px 0;
}
.detail {
}
.vs-dialog {
  max-width: 80% !important;
  overflow: scroll !important;
}
.product__img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
}
.product__desc h2 {
  font-size: 32px;
  margin-bottom: 12px;
}

.filled__star {
  display: flex;
}
.empty__star {
  display: flex;
}
.product__info {
  display: flex;
  align-items: center;
}
.divis {
  margin: 0 15px;
}
.prod__quantity {
  display: flex;
  align-items: center;
  text-align: end;
}

.prod__icon {
  margin-left: auto;
}
.prod__icon i {
  font-size: 32px;
  margin-left: 12px;
}
.deliver__schedule {
  display: flex;
  width: 100%;
  margin: 20px 0;
  background-color: #f1f5f8;
  padding: 20px 40px;
  align-items: center;
}
.deliver__schedule i {
  margin-right: 12px;
  font-size: 20px;
}
.deliver__schedule p {
  text-align: center;
}
.free__shipping {
  color: #2677de;
}
.accumulate {
  color: #2677de;
}
.quantity__control {
  width: 100%;
  background-color: #fafafa;
}
.quantity__control .quantity {
  display: block;
  padding: 20px;
}
.quantity__control .control {
  display: flex;
  padding: 20px;
  align-items: center;
}
.quantity__control .minus {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border: none;
  border: 1px solid black;
  cursor: pointer;
}
.control__num {
  margin: 0px 8px;
}
.quantity__control .plus {
  justify-content: center;
  align-items: center;
  display: inline-flex;
  padding: 5px 10px;
  border: 1px solid black;
  cursor: pointer;
}
.div {
  width: 90%;
  margin: 0 auto;
  background-color: #f0f0f0;
}
.control__price {
  font-size: 26px;
  margin-left: auto;
  font-weight: bold;
}
.total__price {
  display: flex;
  align-items: center;
  margin: 20px 0 20px auto;
}
.total__price span {
  color: #666666;
  font-size: 16px;
}
.total__price strong {
  font-size: 32px;
  margin-left: 24px;
}
.btn__group {
  margin: 0 auto;
}
.cart__button {
  border: none;
  font-size: 28px;
  padding: 12px 45px;
  font-weight: bold;
  margin-right: 12px;
  background-color: #fff;
  border: 1px solid #000;
  cursor: pointer;
}
.cart__button:hover {
  background-color: #000;
  color: #fff;
}
.payment__button {
  border: none;
  font-size: 28px;
  font-weight: bold;
  padding: 12px 45px;
  background-color: #e63740;
  color: #fff;
  cursor: pointer;
}
.slide__item {
  margin-top: 23px;
  padding: 0 20px;
  flex: 1;
}
.recommend {
  margin-top: 40px;
}
.slider {
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
}
.product__img {
  width: 100%;
}
.VueCarousel-navigation-prev {
  left: 30px !important;
  font-size: 30px;
  outline: 0 !important;
}
.VueCarousel-navigation-next {
  right: 30px !important;
  font-size: 30px;
  outline: 0 !important;
}
@media screen and (max-width: 900px) {
  .prod__quantity p {
    font-size: 14px;
    font-weight: bold;
  }
  .total__price {
    margin-right: 20px;
  }
  .cart__button {
    font-size: 14px;
  font-weight: bold;
  }
  .payment__button {
  border: none;
  font-size: 14px;
  font-weight: bold;
  background-color: #e63740;
  color: #fff;
  cursor: pointer;
}
.product__info {
  margin-bottom: 30px;
}
}
</style>
