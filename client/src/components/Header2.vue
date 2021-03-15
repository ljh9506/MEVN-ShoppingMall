<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="tob__box">
            <div class="header__logo">
              <router-link to="/">
                <strong>llud</strong>
              </router-link>
            </div>
            <div class="logmenu">
              <ul>
                <div class="search-wrap">
                  <i class="fas fa-search"></i>
                  <span>search</span>
                </div>
                <div class="heart-wrap">
                  <i class="far fa-heart"></i>
                  <span>heart</span>
                </div>
                <router-link to="/cart">
                  <div class="cart-wrap">
                    <i class="fas fa-shopping-cart"></i><span>cart(0)</span>
                  </div></router-link
                >
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="bottom__box">
                <div class="category__box">
                  <ul>
                    <li>New Arrival</li>
                    <li>brand</li>
                    <li>men</li>
                    <li>women</li>
                    <li>sale</li>
                    <li>journal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  position: fixed;
  width: 100%;
  z-index: 12;
  background-color: #fff;
  border-bottom: 3px solid #000;
}
.tob__box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.header__logo {
  margin: 0 auto;
}
.header__logo strong {
  font-size: 60px;
  font-weight: 600;
}
.logmenu {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.logmenu ul {
  display: flex;
}
.logmenu span {
  font-size: 10px;
  font-weight: 400;
  color: #555;
}
.search-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}
.heart-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}
.cart-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}
.logmenu ul i {
  font-size: 22px;
  font-weight: bold;
  color: #181818;
}

.category__box ul {
  display: flex;
  justify-content: center;
}
.category__box ul li {
  margin: 10px 30px;
  font-size: 20px;
  font-weight: 500;
}
</style>