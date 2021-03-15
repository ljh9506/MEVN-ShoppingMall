<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Upload Product</h2>
            <form>
              <!-- Title dropdown  -->
              <div class="a-spacing-top-medium input__title">
                <label style="margin-bottom: 20px;">Title</label>
                <input
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="title"
                />
              </div>
              <div class="a-spacing-top-medium">
                <label>Cateory</label>
                <select class="a-select-option" v-model="category">
                  <option
                    v-for="(category, i) in categories"
                    :key="i"
                    :value="category"
                    >{{ category }}</option
                  >
                </select>
              </div>
              <!-- Price dropdown  -->
              <div class="a-spacing-top-medium input__title">
                <label style="margin-bottom: 20px;">Price</label>
                <input
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="price"
                />
              </div>
              <!-- Price dropdown  -->
              <div class="a-spacing-top-medium input__title">
                <label style="margin-bottom: 20px;">stockQuantity</label>
                <input
                  type="number"
                  class="a-input-text"
                  style="width: 100%"
                  v-model="stockQuantity"
                />
              </div>
              <!-- Description dropdown  -->
              <div class="a-spacing-top-medium input__title">
                <label style="margin-bottom: 20px;">Description</label>
                <textarea
                  rows="5"
                  style="width: 100%;"
                  class="textarea__text"
                  v-model="description"
                ></textarea>
              </div>

              <!-- Photo dropdown  -->
              <div class="a-spacing-top-medium input__title">
                <label style="margin-bottom: 20px;">Add photo</label>
                <div class="a-row a-spacing-top-medium">
                  <input type="file" @change="onFileSelected" />
                  <div id="preview">
                    <img v-if="url" :src="url" />
                  </div>
                  <!--<div class="centerx">
                    <vs-upload
                      multiple
                      text="Upload Multiple"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      @on-success="successUpload"
                    />
                  </div>-->
                </div>
              </div>
              <!-- Button dropdown  -->
              <hr />

              <div
                class="a-spacing-top-large"
                @click="onUploadProduct"
                style="margin-bottom: 30px;"
              >
                <span class="a-button-register" style="width: 100%;">
                  <span class="a-button-inner">
                    <span class="a-button-text upload__btn">
                      Upload product
                    </span>
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
import { interceptorAxios } from "../api/index";

export default {
  data() {
    return {
      categories: ["Shirts", "Pants", "Bags", "Watch", "Shoes"],
      category: "",
      title: "",
      price: "",
      stockQuantity: "",
      description: "",
      selectedFile: null,
      url: null
    };
  },
  methods: {
    onFileSelected(e) {
      this.selectedFile = e.target.files[0];
      console.log(this.selectedFile);
      this.url = URL.createObjectURL(this.selectedFile);
      this.fileName = e.target.files[0].name;
    },
    async onUploadProduct() {
      let data = new FormData();
      data.append("title", this.title);
      data.append("category", this.category);
      data.append("price", this.price);
      data.append("stockQuantity", this.stockQuantity);
      data.append("description", this.description);
      data.append("photo", this.selectedFile, this.selectedFile.name);

      const response = await interceptorAxios.post("products", data);

      if (response.data.success) {
        this.$router.push("/");
      } else {
        console.log("error");
      }
    }
  }
};
</script>

<style>
.a-spacing-top-medium {
  margin-bottom: 50px;
}
.a-input-text {
  padding: 10px;
}
.input__title {
  font-size: 18px;
}
.textarea__text {
  padding: 10px;
}
.upload__btn {
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 30px;
  border: none;
  background-color: #000;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}
#preview img {
  margin-top: 20px;
  width: 200px;
  height: auto;
}
</style>
