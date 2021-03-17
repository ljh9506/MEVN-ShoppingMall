<template>
  <section class="product">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="category">
            <li data-filter="*" @click="filterData($event)">Best Seller</li>
            <li data-filter="Shirts" @click="filterData($event)">
              New Shirts
            </li>
            <li data-filter="Shoes" @click="filterData($event)">
              Hot Shoes
            </li>
          </ul>
        </div>
      </div>
      <div class="row product__images">
        <div
          class="col-lg-3 col-md-6 col-sm-6"
          v-for="(product, i) in products"
          :key="i"
        >
          <div
            class="product__item"
            @mouseover="hover($event, i)"
            @mouseout="hoverOut($event, i)"
          >
            <router-link
              :to="{ path: `/detail/${product._id}`, params: { product } }"
            >
              <img :src="product.photo" alt="" />
            </router-link>
            <ul
              class="product__hover"
              :class="{ hoverShow: i === activeIndex }"
            >
              <li><i class="fas fa-heart heart"></i></li>
              <li><i class="fas fa-compress-alt"></i></li>
              <li><i class="fas fa-search"></i></li>
            </ul>
            <div class="product__item__text">
              <h6>{{ product.title }}</h6>
              <!-- <a href="#" class="add-cart" :class="{ show: i === activeIndex }"
                >+ Add To Cart</a
              > -->
              <Modal
                :product="product"
                class="add-cart"
                :class="{ show: i === activeIndex }"
              />

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
              <h5>${{ product.price }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import starRating from "vue-star-rating";
import Modal from "../components/Modal";
export default {
  components: {
    Modal,
    starRating
  },
  data() {
    return {
      products: "",
      activeIndex: ""
    };
  },
  methods: {
    filter(e) {
      console.log(e.target.dataset.filter);
    },
    async filterData(e) {
      await this.fetchData();
      let filter = e.target.dataset.filter;
      if (filter === "*") {
        return;
      }
      const filteredData = this.products.filter(product => {
        return product.category === filter;
      });
      this.products = filteredData;
    },
    hover(e, i) {
      this.activeIndex = i;
    },
    hoverOut() {
      this.activeIndex = "";
    },
    async fetchData() {
      const response = await axios.get("/api/allproducts");
      this.products = response.data.products;
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
.product__images {
  display: flex;
  align-items: center;
}
.product {
  padding: 150px 0;
}
.category {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}
.category li {
  font-size: 28px;
  margin: 0 25px;
  font-weight: bold;
  margin-right: 8px;
  cursor: pointer;
}
.category li:last-child {
  margin-right: 0;
  cursor: pointer;
}
.product__item {
  margin-bottom: 20px;
  overflow: hidden;
}
.product__item img {
  display: block;
  width: 100%;
  height: auto;
  position: relative;
}
.add-cart {
  display: none;
}
.rating {
  display: flex;
  flex-direction: row;
}
.rating i {
  color: #f7941d;
}
.product__item__text h6 {
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
}
.product__item__text h5 {
  font-size: 22px;
}
.product__item button {
  display: block;
  position: absolute;
  top: 0;
  color: #e53637;
  font-size: 16px;
  font-weight: 700;
}
.show {
  display: block !important;
}

.hidden {
  display: none;
}
.product__hover {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.3s;
  right: 0;
  top: 20px;
}
.product__hover li i {
  margin-bottom: 10px;
  background-color: #fff;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
}
.hoverShow {
  opacity: 1;
  transition: 0.4s ease-out;
  right: 30px;
  top: 20px;
}
.heart {
  color: #3d3d3d;
}
.heart:hover {
  transition: 0.2s;
  color: #e53637;
}
</style>
