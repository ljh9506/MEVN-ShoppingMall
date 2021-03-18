<template>
  <div>
    <section class="hero">
      <carousel
        :per-page="1"
        :autoplayTimeout="4000"
        :autoplay="true"
        :paginationEnabled="false"
        :loop="true"
      >
        <Slide>
          <div class="hero__slider">
            <div class="container">
              <div class="row">
                <div class="col-xl-5 col-lg-7 col-md-8">
                  <div class="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collection 2030</h2>
                    <p>
                      A specialist label creating luxury essentials. Ethically
                      crafted with an unwavering commitment to exceptional
                      quality.
                    </p>
                    <a href="#" class="primary-btn">Shop Now</a>
                    <div class="hero__social">
                      <a href="#"><i class="fab fa-instagram-square"></i></a>
                      <a href="#"><i class="fab fa-facebook"></i></a>
                      <a href="#"><i class="fab fa-twitter-square"></i></a>
                      <a href="#"><i class="fab fa-pinterest-square"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide>
          <div class="hero__slider">
            <div class="container">
              <div class="row">
                <div class="col-xl-5 col-lg-7 col-md-8">
                  <div class="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collection 2030</h2>
                    <p>
                      A specialist label creating luxury essentials. Ethically
                      crafted with an unwavering commitment to exceptional
                      quality.
                    </p>
                    <a href="#" class="primary-btn">Shop Now</a>
                    <div class="hero__social">
                      <a href="#"><i class="fab fa-instagram-square"></i></a>
                      <a href="#"><i class="fab fa-facebook"></i></a>
                      <a href="#"><i class="fab fa-twitter-square"></i></a>
                      <a href="#"><i class="fab fa-pinterest-square"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </carousel>
    </section>

    <section class="banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 offset-lg-4 clothes">
            <div class="banner__item">
              <div class="banner__item__pic">
                <img src="../img/banner/banner-1.jpg" alt="img" />
              </div>
              <div class="banner__item__desc">
                <h2>Clothing<br />Collections 2030</h2>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="banner__item banner__item--middle">
              <div class="banner__item__pic">
                <img src="../img/banner/banner-2.jpg" alt="img" />
              </div>
              <div class="banner__item__desc">
                <h2>Clothing<br />Collections 2030</h2>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="banner__item banner__item--last">
              <div class="banner__item__pic">
                <img src="../img/banner/banner-3.jpg" alt="img" />
              </div>
              <div class="banner__item__desc">
                <h2>Shoes Spring<br />2030</h2>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Product />

    <section class="categories">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 text">
            <div class="categories__text">
              <h2>
                Clothing hot<br />
                <span>Shoe Collection</span>
                Accessories
              </h2>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="categories__hot__deal">
              <img src="../img/product-sale.png" alt="" />
              <div class="hot__deal__sticker">
                <span>Sale Of</span>
                <h5>$29.99</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1">
            <div class="categories__deal__countdown">
              <span class="deal__week">Deal Of the Week</span>
              <h2>Multi-pocket Chest Bag Black</h2>
              <div class="categories__deal__countdown__timer">
                <h1 id="clock" style="color:gray;">00:00</h1>
              </div>
              <a href="#" class="categories__btn">Shop now</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="community">
      <div class="container">
        <div class="row community__title">
          <h2>Community Members</h2>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <img src="../img/isabelle.png" alt="img" class="community__img" />
            <span class="community__desc">Isabelle Reynolds</span>
          </div>
          <div class="col-lg-4">
            <img src="../img/brette.png" alt="img" class="community__img" />
            <span class="community__desc">Isabelle Reynolds</span>
          </div>
          <div class="col-lg-4">
            <img src="../img/lillie.png" alt="img" class="community__img" />
            <span class="community__desc">Isabelle Reynolds</span>
          </div>
          <a href="#" class="community__btn">See all Members</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Product from "./Product";
import { Carousel, Slide } from "vue-carousel";
export default {
  data() {
    return {
    };
  },
  components: {
    Carousel,
    Slide,
    Product
  }
};
</script>

<style scoped>
.hero__slider {
  background-image: url("../img/hero/hero-1.jpg");
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-size: cover;
  padding-top: 200px;
}
.hero__description {
  z-index: 999;
}
.hero__text h6 {
  color: #e53637;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}
.hero__text h2 {
  font-size: 48px;
  font-weight: bold;
  color: #111111;
  margin-bottom: 20px;
}
.hero__text p {
  color: #3d3d3d;
  margin-bottom: 35px;
}
.primary-btn {
  display: inline-block;
  font-size: 13px;
  text-transform: uppercase;
  padding: 18px 30px;
  background-color: #111111;
  color: #fff;
  font-weight: bold;
  letter-spacing: 4px;
}
.hero__social {
  margin-top: 140px;
}
.hero__social a {
  display: inline-block;
  font-size: 20px;
  margin-right: 20px;
}
/* .VueCarousel-navigation-button[data-v-453ad8cd] {
  z-index: 100;
  left: 100px;  
} */
.VueCarousel-navigation-prev {
  font-size: 30px;
  outline: 0 !important;
}
.VueCarousel-navigation-next {
  font-size: 30px;
  outline: 0 !important;
}
.VueCarousel-wrapper {
}

.banner {
  padding: 100px 0;
}
.banner__item {
  position: relative;
  overflow: hidden;
}
.banner__item__pic {
  float: right;
  clear: right;
}
.banner__item__desc {
  position: absolute;
  left: 0;
  top: 140px;
}
.banner__item__desc h2 {
  color: #111111;
  font-weight: 700;
  line-height: 46px;
  margin-bottom: 10px;
  font-size: 32px;
}
.banner__item__desc a {
  position: relative;
}
.banner__item__desc a:after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #e53637;
}
.banner__item--middle {
  margin-top: -75px;
}
.banner__item.banner__item--middle .banner__item__desc {
  position: relative;
  top: 0;
  left: 0;
}
.banner__item.banner__item--middle .banner__item__desc a {
  position: relative;
  display: inline-block;
  margin-bottom: 5px;
}
.banner__item.banner__item--middle .banner__item__desc a:after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #e53637;
}
.banner__item--last {
  margin-top: 100px;
}

/* categories  */
.categories {
  padding-top: 150px;
  padding-bottom: 125px;
  background-color: #f3f2ee;
}
.text {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.categories__text h2 {
  font-size: 26px;
  color: #b7b7b7;
  font-weight: 400;
  margin: 25px 0;
}
.categories__text span {
  display: block;
  color: #000;
  margin: 25px 0;
}
.categories__hot__deal img {
  max-width: 100%;
  position: relative;
}
.hot__deal__sticker {
  display: flex;
  padding: 30px;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: -20px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: #000;
}
.hot__deal__sticker span {
  color: #fff;
}
.hot__deal__sticker h5 {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}
.deal__week {
  color: #e53637;
  margin-bottom: 15px;
  font-weight: bold;
}
.categories__deal__countdown h2 {
  font-size: 40px;
  margin: 25px 0;
}
.categories__deal__countdown__timer {
  display: flex;
}
.categories__deal__countdown__timer span {
  font-size: 40px;
  margin-right: 15px;
}
.categories__deal__countdown__timer span:after {
  margin-left: 15px;
  content: ":";
}
.categories__deal__countdown__timer span:nth-child(6):after {
  content: "";
  /* 시발  */
}
.categories__btn {
  display: inline-block;
  margin-top: 27px;
  color: #fff;
  background-color: #000;
  padding: 15px 40px;
}
.community {
  padding-bottom: 100px;
}
.community__title {
  display: block;
  padding-top: 120px;
  padding-bottom: 50px;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
}
.community__img {
  display: block;
  width: 100%;
  overflow: hidden;
}
.community__desc {
  display: block;
  font-size: 22px;
  padding: 28px 0;
}
.community__btn {
  display: inline-flex;
  border: 2px solid black;
  color: black;
  padding: 15px 30px;
  margin: 40px auto;
  transition: 0.5s;
}
.community__btn:hover {
  background-color: #000;
  color: #fff;
  transition: 0.5s;
}
@media screen and (max-width: 700px) {
  .hero__slider {
    background-image: url("../img/hero/hero-2.jpg");
    height: 100vh;
    width: 100%;
  background-position: 52% 50%;
    display: flex;
    justify-content: center;
    padding-top: 150px;
  }
  .hero__text h6 {
    font-size: 22px;
  }
  .hero__text h2 {
    font-size: 22px;
  }
  .clothes {
    display: none;
  }
  .product {
    padding-top: 0;
  }
  .banner__item__desc {
    position: relative;
    font-size: 18px;
    top: 0;
  }
  .banner__item__desc a:after {
    bottom:  -2px;
    height: 4px;
  }
  .community__desc {
    font-weight: bold;
    color:burlywood;
  }
}
</style>
