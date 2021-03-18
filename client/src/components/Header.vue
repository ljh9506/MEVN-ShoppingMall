<template>
  <div class="container">
    <vs-navbar shadow square center-collapsed v-model="active">
      <template #left>
        <router-link to="/">
        <img src="../img/logo.png" alt="logo" />
        </router-link>
      </template>
      <template #right>
        <vs-button
          class="toggle"
          @click="activeSidebar = !activeSidebar"
          flat
          icon
        >
          <i class="fas fa-bars"></i>
        </vs-button>
      </template>
      <vs-navbar-item :active="active == 'home'" id="home">
        <router-link to="/" >Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'shop'" id="shop">
        <router-link to="/shop">Shop</router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'product'" id="product">
        <router-link to="/product">Upload Product</router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'login'" id="login">
        <router-link
              to="/login"
              class="login__route"
              :class="{ hidden: this.$store.getters.isLogin }"
              >Login</router-link
            >
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'signup'" id="signup">
         <router-link
              v-if="!this.$store.getters.isLogin"
              to="/signup"
              class="login__route"
              >Signup</router-link
            >
            <a v-else href="#" class="logout__route" @click="logoutUser"
              >Logout</a
            >
      </vs-navbar-item>
    </vs-navbar>
    <vs-sidebar left absolute v-model="active" :open.sync="activeSidebar">
      <template #logo>
        <!-- ...img logo -->
      </template>
      <vs-sidebar-item id="home" @click="linkClick($event)">
        <template #icon>
          <i class="bx bx-chat"></i>
        </template>
                <router-link to="/" @click.native="linkClick()">Home</router-link>

      </vs-sidebar-item>
      <vs-sidebar-item id="shop">
        <template #icon>
          <i class="bx bx-chat"></i>
        </template>
        <router-link to="/shop" @click.native="linkClick()">Shop</router-link>
      </vs-sidebar-item>
      <vs-sidebar-item id="upload">
        <template #icon>
          <i class="bx bxs-music"></i>
        </template>
        <router-link to="/product" @click.native="linkClick()">Upload Product</router-link>
      </vs-sidebar-item>
     <vs-sidebar-item id="cart">
        <template #icon>
          <i class="bx bx-grid-alt"></i>
        </template>
        <router-link to="/cart" @click.native="linkClick()">Cart</router-link>
      </vs-sidebar-item>
      <vs-sidebar-item id="shopping">
        <template #icon>
          <i class="bx bxs-shopping-bags"></i>
        </template>
        <router-link
              to="/login"
              :class="{ hidden: this.$store.getters.isLogin }"
              @click.native="linkClick()"
              >Login</router-link
            >
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class="bx bx-chat"></i>
        </template>
       <router-link
              v-if="!this.$store.getters.isLogin"
              to="/signup"
              @click.native="linkClick()"
              >Signup</router-link
            >
            <a v-else href="#" class="logout__route" @click="logoutUser(); linkClick()" 
              >Logout</a
            >
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="" />
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>

            <template #badge>
              28
            </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
const sidebar = document.getElementsByClassName('vs-sidebar-content');

export default {
  methods: {
    logoutUser() {
      this.$store.state.token = "";
      localStorage.setItem("vuex", "");
      this.$router.push('/')
    },
    linkClick(e) {
      console.log(e)
      sidebar[0].classList.toggle('open');
      this.activeSidebar = false;
    }
  },
  data: () => ({
    active: "home",
    activeSidebar: false
  })
};
</script>

<style scoped>

.container {
  max-width: 1000px;
}
.vs-sidebar {
  display: none !important;
}
.logo {
  max-width: 120px;
  height: 100%;
}
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
  color: red;
}
.hidden {
  display: none;
}
.a-icon {
  font-size: 18px;
}

.vs-sidebar__item a {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 260px;
  height: 47px;
}
.vs-sidebar__item {
  position: relative;
}
@media screen and (min-width: 900px) {
    .toggle {
      display: none;
    }
    .fas {
      color: #000;
    }
}
@media screen and (max-width: 900px) {
  .vs-navbar__line {
      display: none !important;
    }
    .toggle {
      background: black;
    color: #fff;
    }
    .toggle:active {
      background: black;
    color: #fff;
    }
    .vs-button--flat:focus {
      background: black;
    color: #fff;
    }
    .vs-button--flat:hover {
      background: black;
    color: #fff;
    }
}

</style>
