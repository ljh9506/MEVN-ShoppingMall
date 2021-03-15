<template>
  <header>
    <div class="container">
      <div class="row header">
        <div class="col-lg-3 col-md-3">
          <div class="header__logo">
            <router-link to="/">
              <img src="../img/logo.png" alt="logo" />
            </router-link>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 ">
          <nav class="header__menu">
            <ul>
              <li class="active"><router-link to="/">Home</router-link></li>
              <li><router-link to="/shop">Shop</router-link></li>
              <li>
                <vs-dropdown>
                  <a class="a-icon" href.prevent>
                    Page
                  </a>

                  <vs-dropdown-menu>
                    <vs-dropdown-item to="/product">
                      Upload Product
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                      Option 2
                    </vs-dropdown-item>

                    <vs-dropdown-group
                      vs-collapse
                      vs-label="Group Collapse"
                      vs-icon="add"
                    >
                      <vs-dropdown-item>
                        Option Collapse 1
                      </vs-dropdown-item>
                      <vs-dropdown-item>
                        Option Collapse 2
                      </vs-dropdown-item>
                      <vs-dropdown-group>
                        <vs-dropdown-item>
                          Sub Options 1
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          Sub Options 2
                        </vs-dropdown-item>

                        <vs-dropdown-group vs-collapse>
                          <vs-dropdown-item vs-label="Sub Collapse">
                            Sub Collapse 1
                          </vs-dropdown-item>
                          <vs-dropdown-item>
                            Sub Collapse 2
                          </vs-dropdown-item>
                        </vs-dropdown-group>
                      </vs-dropdown-group>
                    </vs-dropdown-group>

                    <vs-dropdown-item divider>
                      Option 3
                    </vs-dropdown-item>
                  </vs-dropdown-menu>
                </vs-dropdown>
              </li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </nav>
        </div>
        <div class="col-lg-3 col-md-3 ">
          <div class="header__nav__option">
            <router-link
              to="/login"
              class="login__route"
              :class="{ hidden: this.$store.getters.isLogin }"
              >Login</router-link
            >
            <router-link
              v-if="!this.$store.getters.isLogin"
              to="/signup"
              class="login__route"
              >Signup</router-link
            >
            <a v-else href="#" class="logout__route" @click="logoutUser"
              >Logout</a
            >
            <i class="fas fa-search"></i>
            <i class="far fa-heart"></i>
            <router-link to="/cart"
              ><i class="fas fa-shopping-cart"
                >({{ this.$store.state.cart.length }})</i
              ></router-link
            >
            <span>${{ this.$store.state.totalPrice - 4 }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logoutUser() {
      this.$store.state.token = "";
      localStorage.setItem("vuex", "");
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
}
.header__logo {
  font-size: 22px;
  font-weight: bold;
  padding: 30px 0;
}
.header__menu {
  padding: 30px 0;
  display: flex;
}
.header__menu ul {
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  align-items: center;
}
.header__menu ul li {
  font-size: 18px;
  margin-right: 40px;
}
.header__menu ul li a {
  color: #000;
  text-decoration: none;
}
.header__nav__option {
  display: flex;
  padding: 30px 0;
  justify-content: flex-end;
  align-items: center;
}
.header__nav__option i {
  margin-left: 24px;
}
.header__nav__option span {
  margin-left: 24px;
}

.header__menu a {
  position: relative;
}
li .router-link-exact-active:after {
  content: "";
  display: block;
  bottom: -8px;
  width: 100%;
  height: 2px;
  background-color: red;
  position: absolute;
}
.login__route {
  font-size: 18px;
  margin-left: 12px;
}
.login__route:after {
  content: "";
  background-color: white;
}
.logout__route {
  font-size: 18px;
  margin-left: 12px;
}
.hidden {
  display: none;
}
.a-icon {
  font-size: 18px;
}
</style>
