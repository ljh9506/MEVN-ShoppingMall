<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer__main">
        <div class="col-lg-3">
          <div class="footer__about">
            <img src="../img/footer-logo.png" alt="logo" />
            <p>
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <img src="../img/payment.png" alt="pay" />
          </div>
        </div>
        <div class="col-lg-2 offset-lg-1">
          <div class="footer__widget">
            <h6>SHOPPING</h6>
            <ul>
              <li><a href="#">Clothing Store</a></li>
              <li><a href="#">Trending Shoes</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="footer__widget">
            <h6>SHOPPING</h6>
            <ul>
              <li><a href="#">Clothing Store</a></li>
              <li><a href="#">Trending Shoes</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 offset-lg-1">
          <div class="footer__widget">
            <h6>NEWLETTER</h6>
            <p>
              Be the first to know about new arrivals, look books, sales &
              promos!
            </p>
            <input
              type="text"
              class="footer__input"
              placeholder="Enter Your Email"
            />
          </div>
        </div>
      </div>
      <hr />

      <div class="row">
        <div class="col-lg-12 footer__center">
          <p>
            Copyright © 2020 2020 All rights reserved | This template is made
            with by Colorlib
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #000;
  padding-top: 70px;
}
.footer__about p {
  color: #b7b7b7;
  margin: 30px 0;
}
.footer__widget h6 {
  display: block;
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
}
.footer__widget ul li {
  margin: 12px 0;
}
.footer__widget ul li a {
  color: #b7b7b7;
}
.footer__widget p {
  color: #b7b7b7;
}
.footer__input {
  width: 100%;
  background-color: #000;
  border: none;
  border-bottom: 2px solid #fff;
  outline: none;
  margin-top: 30px;
  padding: 10px;
  padding-left: 0;
  color: #fff;
}
.footer__main {
  padding-bottom: 50px;
}
.footer__center p {
  padding: 50px 0;
  color: #b7b7b7;
  text-align: center;
}
</style>
