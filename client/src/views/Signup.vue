<template>
<div class="container login__container">
  <div class="login-page" v-if="!loading">
      <h2> Sign Up</h2>
      <p class="error">{{errorMessage}}</p>
    <div class="form">
      <form class="login-form" @submit.prevent="signupUser()">
        <input type="text" placeholder="email" v-model="email" />
        <input type="password" placeholder="password" v-model="password" />
        <button type="submit">Sign Up</button>
        <!-- <p class="message">Not registered? <a href="#">Create an account</a></p> -->
      </form>
    </div>
  </div>
    <Spinner v-else />
  </div>
</template>

<script>
import axios from "axios";
import Spinner from '../components/Spinner';
export default {
  components: {
    Spinner
  },
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      loading: false
    };
  },
  methods: {
    async signupUser() {
      try {
        this.loading = true;
        let user = {
          email: this.email,
          password: this.password
        };
        let response = await axios.post("/api/auth/signup", user);
        this.loading = false;
        console.log(response.data);
        this.$router.push('/');
      } catch (error) {
        this.errorMessage = error.response.data.message;
        this.loading = false;
      }
    }
  }
};  
</script>

<style scoped>
.error {
  color: #ef3b3a;
  font-size: 14px;
  margin-bottom: 8px;
  text-align: center;
}
.login__container {
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-page {
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  text-transform: uppercase;
  outline: 0;
  font-weight: bold;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #43a047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4caf50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before,
.container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #ef3b3a;
}
h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
@media screen and (max-width: 900px) {
  h2 {
    margin-top: 100px;
  }
}
</style>
