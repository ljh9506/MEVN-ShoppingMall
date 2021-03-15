import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    cart: [],
    cartLength: 0,
    totalPrice: 0,
    token: '',
  },
  getters: {
    isLogin(state) {
      return state.token !== '';
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    pushProductToCart(state, product) {
      state.cart.push(product);
    },
    increaseProductQty(state, payload) {
      let findProduct = state.cart.find(
        (prod) => prod._id === payload.product._id,
      );
      findProduct.quantity += payload.quantity;
      const indexOfProduct = state.cart.indexOf(findProduct);
      state.cart.splice(indexOfProduct, 1, findProduct);
      console.log(findProduct);
    },
    increaseCartLength(state) {
      state.cartLength = 0;
      console.log(state.cart);
      if (state.cart.length) {
        state.cart.map((prod) => {
          state.cartLength += prod.quantity;
        });
      }
    },
    totalProductPrice(state) {
      state.totalPrice = 0;
      if (state.cart.length) {
        state.cart.map((prod) => {
          state.totalPrice += prod.quantity * prod.price;
        });
      }
    },
    minusTotalPrice(state, price) {
      state.totalPrice -= price;
    },
    plusTotalPrice(state, price) {
      state.totalPrice += price;
    },

    plusQty(state, product) {
      // 여기서 막힘
      console.log(product);
      let cartProduct = state.cart.find((prod) => prod._id === product._id);
      console.log(cartProduct);
      cartProduct.quantity++;

      state.cartLength = 0;
      if (state.cart.length) {
        state.cart.map((product) => {
          state.cartLength += product.quantity;
        });
      }

      state.totalPrice = 0;
      if (state.cart.length) {
        state.cart.map((product) => {
          state.totalPrice += product.quantity * product.price;
        });
      }

      // product 인덱스를 찾는게 더 맞는 방법인거 같음.....
      // let indexOfProduct = state.cart.indexOf(product);
      // console.log(product);
      // state.cart.splice(indexOfProduct, 1, cartProduct);
    },
    minusQty(state, product) {
      // 여기서 막힘
      console.log(product);
      let cartProduct = state.cart.find((prod) => prod._id === product._id);
      console.log(cartProduct);
      cartProduct.quantity--;

      state.cartLength = 0;
      if (state.cart.length) {
        state.cart.map((product) => {
          state.cartLength += product.quantity;
        });
      }

      state.totalPrice = 0;
      if (state.cart.length) {
        state.cart.map((product) => {
          state.totalPrice += product.quantity * product.price;
        });
      }

      // product 인덱스를 찾는게 더 맞는 방법인거 같음.....
      // let indexOfProduct = state.cart.indexOf(product);
      // console.log(product);
      // state.cart.splice(indexOfProduct, 1, cartProduct);
    },

    deleteCartItem(state, product) {
      const indexOfItem = state.cart.indexOf(product);
      state.cart.splice(indexOfItem, 1);
      if (!state.cart.length) {
        state.cartLength = 0;
        state.totalPrice = 0;
      }
    },
  },

  actions: {
    addProductToCart({ state, commit }, payload) {
      const cartProduct = state.cart.find(
        (prod) => prod._id === payload.product._id,
      );
      console.log(payload);
      if (!cartProduct) {
        payload.product.quantity = payload.quantity;
        commit('pushProductToCart', payload.product);
      } else {
        commit('increaseProductQty', payload);
      }

      commit('increaseCartLength');
      commit('totalProductPrice');
    },
  },
});
