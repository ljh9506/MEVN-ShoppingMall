<template>
  <div>
    <section class="bread__crumb">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Cart</h2>
            <span>Home > Cart</span>
          </div>
        </div>
      </div>
    </section>

    <section class="cart">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="cart__option__box">
              <input
                class="checkbox"
                type="checkbox"
                id="all"
                value="All"
                v-model="checkedNames"
                @change="allCheck"
              />
              <label for="all">All Select</label>
            </div>
          </div>
          <div class="col-lg-8">
            <div
              class="cart__item"
              v-for="product in this.$store.state.cart"
              :key="product.id"
            >
              <div class="cart__item__header">
                <input
                  type="checkbox"
                  id="all"
                  :value="product.description"
                  @change="checkedItem($event, product)"
                  v-model="checkedNames"
                />

                <label class="desc__label">{{ product.description }}</label>
              </div>
              <div class="cart__item__main">
                <div class="cart__item__main__container">
                  <div class="photo">
                    <img :src="product.photo" alt="item_img" />
                  </div>
                  <div class="item__container">
                  <div class="item__desc">
                    <div class="item__title">{{ product.description }}</div>
                  </div>
                  <div class="item__qty">
                    <div class="number">
                      <span class="minus" @click="minusButton($event, product)"
                        >-</span
                      >
                      <input type="text" :value="product.quantity" />
                      <span class="plus" @click="plustButton($event, product)"
                        >+</span
                      >
                    </div>
                  </div>
                  <div class="item__price">
                    ${{ product.price * product.quantity }}
                  </div>
                  </div>
                  <span class="delete__button" @click="deleteCart(product)"
                    ><i class="fas fa-times"></i
                  ></span>
                </div>
              </div>
              <div class="cart__item__footer">
                <div class="row">
                  <div class="cart__item__total col-lg-12">
                    <div class="product__price">
                      <span>product price</span>
                      <strong>${{ product.price * product.quantity }}</strong>
                    </div>
                    <div class="minus__icon">
                      <i class="fas fa-minus"></i>
                    </div>
                    <div class="discount__price">
                      <span>discount price</span>
                      <strong>$2</strong>
                    </div>
                    <div class="plus__icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    <div class="shipping__charge">
                      <span>shipping__charge</span>
                      <strong>Free</strong>
                    </div>
                    <div class="equal__icon">
                      <i class="fas fa-equals"></i>
                    </div>
                    <div class="order__charge">
                      <span>order__charge</span>
                      <strong
                        >${{ product.price * product.quantity - 2 }}</strong
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="order">
              <div class="order__title">
                <strong>Total Price</strong>
              </div>
              <div class="order__info">
                <ul class="order__list">
                  <li class="list">
                    <span>상품수</span
                    ><strong>{{ this.$store.state.cartLength }}</strong>
                  </li>
                  <li class="list">
                    <span>상품금액</span><strong>${{ totalPrice }}</strong>
                  </li>
                  <li class="list">
                    <span>할인금액</span
                    ><strong class="discount__li">$4</strong>
                  </li>
                  <li class="list last">
                    <span>배송비</span><strong>0원</strong>
                  </li>
                </ul>
              </div>
              <div class="order__summary">
                <strong class="summary__text">Total Order</strong>
                <strong class="summary__num">${{ totalPrice - 4 }}</strong>
              </div>
              <div class="order__btn">
                <button>주문하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checkedNames: [],
      totalPrice: 0
      // uncheckedItems: []
    };
  },

  methods: {
    allCheck() {
      this.checked = !this.checked;
      if (this.checked) {
        console.log("checked");
        this.checkedNames = this.$store.state.cart.map(
          product => product.description
        );
        this.$store.state.cart.map(prod => {
          this.totalPrice += prod.quantity * prod.price;
        });
      } else {
        this.checkedNames = [];
        this.totalPrice = 0;
      }
    },
    plustButton(e, item) {
      console.log(item);
      e.target.previousSibling.value++;
      this.$store.commit("plusQty", item);
      this.totalPrice += item.price;
    },
    minusButton(e, item) {
      if (e.target.nextSibling.value == 1) {
        alert("주문 가능한 최소 수량은 1개 입니다.");
        return;
      }
      e.target.nextSibling.value--;
      this.$store.commit("minusQty", item);
      this.totalPrice -= item.price;
    },
    checkedItem(e, product) {
      const checked = e.target.checked;
      if (checked) {
        this.totalPrice += product.price * product.quantity;
      } else {
        this.totalPrice -= product.price * product.quantity;
      }
    },
    deleteCart(product) {
      if (confirm("Are you sure you want to delete it?") === true) {
        this.$store.commit("deleteCartItem", product);
        this.$store.commit("totalProductPrice");
        this.totalPrice = this.$store.state.totalPrice;
      } else {
        return;
      }
    }
  },
  mounted() {
    this.totalPrice = this.$store.state.totalPrice;
    this.checkedNames.push("All");
    this.$store.state.cart.forEach(product => {
      this.checkedNames.push(product.description);
    });
  }
};
</script>

<style>
.item__container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.bread__crumb {
  background-color: #f3f2ee;
  padding: 100px 0 30px 0;
}
.cart {
  background-color: #f3f2ee;
}
.cart__option__box {
  padding: 20px 0;
}
.cart__option__box label {
  margin-left: 8px;
  font-weight: bold;
}
.checkbox {
  padding: 20px;
}
.desc__label {
  margin-left: 4px;
}
.order {
  position: sticky;
  position: -webkit-sticky;
  top: 25%;
  background-color: #fff;
}
.cart__item {
  width: 100%;
  background-color: #fff;
  margin-bottom: 30px;
}
.cart__item__header {
  padding: 20px 10px;
  border-bottom: 2px solid #ddd;
}
.cart__item__main {
  display: flex;
}
.cart__item__main__container {
  display: flex;
  position: relative;
  padding: 20px 0;
  width: 100%;
  align-items: center;
}
.item__title {
  margin-left: 20px;
  font-size: 26px;
}
.item__price {
  margin-left: auto;
  margin-right: 20px;
  font-weight: bold;
  font-size: 24px;
}

.photo {
  margin-left: 22px;
}
.photo img {
  width: 150px;
  height: 150px;
}
.number span {
  cursor: pointer;
}

.minus,
.plus {
  width: 24px;
  height: 24px;
  background: #f2f2f2;
  border-radius: 4px;
  padding: 8px 5px 8px 5px;
  border: 1px solid #ddd;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.item__qty {
  margin-left: auto;
}
.item__qty input {
  height: 24px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: inline-block;
  margin: 0 10px;
}
.delete__button {
  position: absolute;
  right: 10px;
  top: 0;
  margin-left: 22px;
  font-size: 22px;
  cursor: pointer;
}
.cart__item__total {
  display: flex;
  padding: 15px 54px;
  align-items: center;
  justify-content: center;
}
.cart__item__footer {
  background-color: #f8f9fa;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.minus__icon {
  font-size: 24px;
  padding: 0 20px;
}
.plus__icon {
  font-size: 24px;
  padding: 0 20px;
}
.equal__icon {
  font-size: 24px;
  padding: 0 20px;
}
.product__price {
  display: flex;
  flex-direction: column;
}
.product__price span {
  color: #a4a9b0;
}
.product__price strong {
  text-align: center;
}

.discount__price {
  display: flex;
  flex-direction: column;
}
.discount__price span {
  color: #a4a9b0;
}
.discount__price strong {
  color: #23c72e;
  text-align: center;
}

.shipping__charge {
  display: flex;
  flex-direction: column;
}
.shipping__charge span {
  color: #a4a9b0;
}
.shipping__charge strong {
  color: #067dfd;
  text-align: center;
}

.order__charge {
  display: flex;
  flex-direction: column;
}
.order__charge span {
  color: #a4a9b0;
}
.order__charge strong {
  text-align: center;
}
.order {
  padding: 20px 20px;
}
.order__title {
  padding-bottom: 15px;
  border-bottom: 1px solid #333333;
}
.order__info {
  padding: 20px 0;
}
.list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
.list span {
  font-size: 14px;
  color: #7f8590;
}
.list strong {
  font-size: 15px;
  color: #444444;
}
.list .discount__li {
  color: #23c72e;
}
.last {
  margin-bottom: 0;
}
.order__info {
  border-bottom: 1px solid #333333;
}
.order__summary {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.summary__text {
  font-size: 16px;
}
.summary__num {
  font-size: 30px;
  font-weight: bolder;
}
.order__btn {
  display: flex;
  justify-content: center;
}
.order__btn button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2e8de5;
  color: #fff;
  padding: 16px 0;
  width: 100%;
  font-size: 22px;
  font-weight: bold;
  border: none;
}
.uncheckedItem {
  margin: 0 20px;
}

@media screen and (max-width: 768px) {
  .minus__icon,
  .plus__icon,
  .equal__icon {
    padding: 20px;
  }
  .cart__item__total span {
    font-size: 8px;
  }
  .cart__item__total strong {
    font-size: 12px;
  }
  .cart__item__total i {
    font-size: 10px;
  }
  .item__price {
    margin: 0;
    font-size: 20px;
  }
  .item__title {
    font-size: 18px;
    margin: 0;
  }
  .photo img {
    max-width: 120px;
    height: auto;
  }
  .minus,
.plus {
  width: 22px;
  height: 22px;
  background: #f2f2f2;
  border-radius: 4px;
  padding: 8px 5px 8px 5px;
  border: 1px solid #ddd;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.item__qty input {
  width: 22px;
  height: 22px;
}
.item__qty {
  margin: 0;
}
.item__container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cart__item__total {
  display: flex;
  padding: 10px 0;
  align-items: center;
}

.minus__icon {
  font-size: 24px;
  padding: 10px 0;
}
.plus__icon {
  font-size: 24px;
  padding: 10px 0;
}
.equal__icon {
  font-size: 24px;
  padding: 0 
}
.product__price {
  display: flex;
  flex-direction: column;
}

}
</style>
