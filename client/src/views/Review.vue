<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center" class="form-title">
              Write a Review
            </h2>
            <form>
              <div class="review__rating">
                <h2>Overall Rating</h2>
                <StarRating v-model="rating" class="star-rating" />
              </div>

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
              <!-- Price dropdown  -->

              <!-- Price dropdown  -->

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
                  <!-- <label for class="choosefile-button"> -->
                  <!-- <i class="fal fa-plus"></i> -->
                  <input type="file" @change="onFileSelected" />
                  <div id="preview">
                    <img v-if="url" :src="url" />
                  </div>
                  <!-- <p style="margin-top: -70px;">{{ fileName }}</p> -->
                  <!-- </label> -->
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
                      Write Review
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
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating
  },
  data() {
    return {
      title: "",
      description: "",
      selectedFile: "",
      rating: 0,
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
      data.append("description", this.description);
      data.append("rating", this.rating);
      data.append("photo", this.selectedFile);
      data.append("productID", this.$route.params.id);

      const response = await interceptorAxios.post("reviews", data);

      if (response.data.success) {
        this.$router.push(`/detail/${this.$route.params.id}`);
      } else {
        console.log("fuck it");
      }
    }
  },
  mounted() {
    console.log(this.$route.params);
  }
};
</script>

<style>
.form-title {
  font-size: 42px;
}
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
#preview img {
  margin-top: 20px;
  width: 200px;
  height: auto;
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
.review__rating {
  display: flex;
  flex-direction: column;
  margin: 20px 0 12px 0;
}
.rating h2 {
  font-size: 28px;
  display: block;
}
.star-rating {
  padding: 20px 20px 20px 0;
}
</style>
