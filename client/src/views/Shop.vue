<template>
  <div>
    <section class="bread__crumb">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Shop</h2>
            <span>Home > Shop</span>
          </div>
        </div>
      </div>
    </section>

    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="shop__sidebar">
              <div class="shop__sidebar__search">
                <form action="#">
                  <input type="text" placeholder="Search.." />
                  <button type="submit"><i class="fas fa-search"></i></button>
                </form>
              </div>
              <div>
                <vs-collapse class="shop__options__container">
                  <vs-collapse-item
                    icon-arrow="arrow_drop_down"
                    class="shop__category"
                  >
                    <div slot="header" class="shop__options__title">
                      Category
                    </div>
                    <ul>
                      <li><a href="#">Men (20)</a></li>
                      <li><a href="#">Women (20)</a></li>
                      <li><a href="#">Bags (20)</a></li>
                      <li><a href="#">Shoes (20)</a></li>
                      <li><a href="#">Watch (20)</a></li>
                      <li><a href="#">Shirts (20)</a></li>
                      <li><a href="#">Pants (20)</a></li>
                    </ul>
                  </vs-collapse-item>
                  <vs-collapse-item class="shop__category">
                    <div slot="header" class="shop__options__title">
                      FILTER PRICE
                    </div>
                    <ul>
                      <li><a href="#">$0.00 - $50.00</a></li>
                      <li><a href="#">$50.00 - $100.00</a></li>
                      <li><a href="#">$100.00 - $150.00</a></li>
                      <li><a href="#">$150.00 - $200.00</a></li>
                      <li><a href="#">$200.00 - $250.00</a></li>
                      <li><a href="#">$250.00 +</a></li>
                    </ul>
                  </vs-collapse-item>
                  <vs-collapse-item class="shop__category">
                    <div slot="header" class="shop__options__title">
                      SIZE
                    </div>
                    <div class="shop__sidebar__size">
                      <label for="xs"
                        >XS<input
                          type="radio"
                          name="size"
                          id="xs"
                          value="xs"
                          @change="chan($event)"
                          v-model="picked"
                      /></label>
                      <label for="sm"
                        >S<input
                          type="radio"
                          name="size"
                          value="sm"
                          @change="chan($event)"
                          id="sm"
                          v-model="picked"
                      /></label>
                      <label for="md"
                        >M<input
                          type="radio"
                          value="md"
                          name="size"
                          @change="chan($event)"
                          id="md"
                          v-model="picked"
                      /></label>
                      <label for="l"
                        >L<input
                          type="radio"
                          name="size"
                          value="l"
                          @change="chan($event)"
                          id="l"
                          v-model="picked"
                      /></label>
                      <label for="xl"
                        >XL<input
                          type="radio"
                          name="size"
                          value="xl"
                          @change="chan($event)"
                          id="xl"
                          v-model="picked"
                      /></label>
                    </div>
                  </vs-collapse-item>
                  <vs-collapse-item class="shop__category">
                    <div slot="header" class="shop__options__title">
                      TAGS
                    </div>
                    <div class="shop__sidebar__tag">
                      <a href="#">PRODUCT</a>
                      <a href="#">BAGS</a>
                      <a href="#">SHOES</a>
                      <a href="#">FASHION</a>
                      <a href="#">CLOTHING</a>
                      <a href="#">HATS</a>
                      <a href="#">ACCESSORIES</a>
                    </div>
                  </vs-collapse-item>
                </vs-collapse>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="shop__product__option">
              <div class="row">
                <div class="col-lg-6 col-md-6">Showing 1–12 of 126 results</div>
                <div class="col-lg-6 col-md-6 shop__product__option__right">
                  <div class="examplex sortby__product">
                    <vs-dropdown>
                      <a class="a-icon" href.prevent>
                        Sort By Price
                        <vs-icon class="" icon="expand_more"></vs-icon>
                      </a>

                      <vs-dropdown-menu>
                        <vs-dropdown-item>
                          $0 ~ $55
                        </vs-dropdown-item>
                        <vs-dropdown-item divider>
                          $55 ~ $100
                        </vs-dropdown-item>

                        <vs-dropdown-item divider>
                          $100 ~
                        </vs-dropdown-item>
                      </vs-dropdown-menu>
                    </vs-dropdown>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col-lg-4 col-md-6 col-sm-6"
                v-for="(product, i) in products"
                :key="i"
              >
                <div
                  class="product__item"
                  @mouseover="hover($event, i)"
                  @mouseout="hoverOut($event, i)"
                >
                  <router-link
                    :to="{
                      path: `/detail/${product._id}`,
                      params: { product }
                    }"
                  >
                    <img :src="product.photo" alt="" />
                  </router-link>
                  <ul
                    class="product__hover"
                    :class="{ hoverShow: i === activeIndex }"
                  >
                    <li @click="addProductToCart({ product, quantity })">
                      <i class="fas fa-heart heart"></i>
                    </li>
                    <li><i class="fas fa-compress-alt"></i></li>
                    <li><i class="fas fa-search"></i></li>
                  </ul>
                  <div class="product__item__text">
                    <!-- <h6 :class="{ hidden: i === activeIndex }"> -->
                    <h6>
                      {{ product.title }}
                    </h6>
                    <!-- <a
                      href="#"
                      class="add-cart"
                      :class="{ show: i === activeIndex }"
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
            <div class="row">
              1, 2, 3
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import starRating from "vue-star-rating";
import Modal from "../components/Modal";
import axios from "axios";

export default {
  components: {
    Modal,
    starRating
  },
  data() {
    return {
      products: "",
      activeIndex: "",
      picked: "",
      quantity: 1
    };
  },
  methods: {
    hover(e, i) {
      this.activeIndex = i;
    },
    hoverOut() {
      this.activeIndex = "";
    },
    chan(e) {
      const label = Array.from(document.querySelectorAll("label"));
      label.forEach(lab => {
        lab.classList.remove("active");
      });
      if (e.target.value === this.picked) {
        e.target.parentNode.classList.add("active");
      }
    },
    async fetchData() {
      const response = await axios.get("/api/products");
      this.products = response.data.products;
    },
    addProductToCart(payload) {
      this.$store.dispatch("addProductToCart", payload);
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
.bread__crumb {
  background-color: #f3f2ee;
  padding: 40px 0;
}
.shop {
  padding: 100px 0;
}
.shop__product__option {
  margin-bottom: 12px;
}
.shop__product__option__right {
  text-align: right;
}
.shop__sidebar__search form input {
  width: 100%;
  font-size: 15px;
  color: #000;
  padding-left: 20px;
  border: 1px solid #e5e5e5;
  height: 42px;
}
.shop__sidebar__search form {
  display: flex;
  margin-bottom: 30px;
}
.shop__sidebar__search button {
  display: block;
  width: 50px;
  background-color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
}
.shop__category {
  margin-bottom: 20px;
}
.shop__category ul {
  height: 225px;
  overflow-y: scroll;
}
.shop__category ul li a {
  display: block;
  margin: 12px 0;
  font-size: 16px;
  color: #b7b7b7;
}
.shop__category ul li a:hover {
  transition: 0.5s;
  color: #000;
}
.shop__options__container {
  width: 100%;
  padding: 0;
}
.shop__options__title {
  font-weight: 500;
}
.shop__sidebar__size {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.shop__sidebar__size input {
  display: none;
}
.shop__sidebar__size label {
  display: flex;
  align-items: center;
  padding: 6px 25px;
  margin-right: 10px;
  margin-top: 5px;
  font-weight: bold;
  font-size: 15px;
  border: 2px solid #e5e5e5;
}
.sortby__product a {
  font-size: 20px;
}
.shop__sidebar__size .active {
  background-color: #000;
  color: #fff;
}
.shop__sidebar__tag {
  display: flex;
  flex-wrap: wrap;
}
.shop__sidebar__tag a {
  background-color: #f1f5f8;
  font-size: 13px;
  font-weight: 700;
  padding: 5px 18px;
  margin-right: 6px;
  margin-bottom: 10px;
}
.shop__sidebar__tag a:hover {
  background-color: #000;
  color: #f1f5f8;
}
</style>
