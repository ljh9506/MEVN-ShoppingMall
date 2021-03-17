<template>
  <div class="center">
    <vs-button shadow @click="active = !active">
      Qucik View
    </vs-button>
    <vs-dialog overflow-hidden v-model="active">
      <template #header>
        <h3>
          Introduction
        </h3>
      </template>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 ">
            <img :src="product.photo" alt="" class="modal__img"/>
          </div>
          <div class="col-lg-4 col-md-4">
            <h4>Title: {{ product.title }}</h4>
            <p>Description: {{ product.description }}</p>
            <p>Category: {{ product.category }}</p>
          </div>
          <div class="col-lg-4 col-md-4">
            <p>${{ product.price }}</p>
          </div>
        </div>
      </div>
    </vs-dialog>
  </div>
</template>

<!-- <div class="centerx ">
    <div>
      {{ val == null ? 'null' : val }}
    </div>
    <vs-button @click="activePrompt = true" color="white" class="modal__btn"
      >Quick View</vs-button
    >

    <vs-prompt
      color="black"
      :buttons-hidden="true"
      :active.sync="activePrompt"
      title="Quick View"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 justify-content-center">
            <img :src="product.photo" alt="" />
          </div>
          <div class="col-lg-4 col-md-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus architecto dolore at, enim laudantium pariatur esse
              dicta non sequi, facilis vel, vero vitae earum sapiente. Maxime
              eius odio maiores sint iste soluta minima earum ad illo ea
              laboriosam amet, facere rerum unde, tenetur, voluptatem doloribus
              impedit? Eaque reprehenderit minus ex praesentium sapiente! Sequi
              dolore, eligendi ratione recusandae illo fugit. Impedit, quidem!
              Iusto ipsum debitis possimus quidem velit harum quasi adipisci
              odio, perspiciatis dolores magnam culpa quos iure cum temporibus
              atque voluptatem repellat dolorum, dicta tenetur rem praesentium
              alias cupiditate. Dolore eum obcaecati doloremque ratione
              inventore, porro debitis doloribus minus minima adipisci odit
              asperiores sunt magni voluptate voluptatem dignissimos repellat
              temporibus? Animi consectetur recusandae labore cupiditate
              incidunt laudantium distinctio quibusdam veniam rem sequi aliquid,
              amet minus autem nesciunt, facere praesentium perspiciatis beatae
              similique quasi facilis tempore quam enim. Laudantium expedita
              quaerat suscipit distinctio ipsum voluptates corrupti rem quisquam
            </p>
          </div>
          <div class="col-lg-4 col-md-4">
            김치
          </div>
        </div>
      </div>
    </vs-prompt>
  </div> -->

<script>
export default {
  data: () => ({
    active: false,
    input1: "",
    input2: "",
    checkbox1: false
  }),
  props: ["product"]

  //   methods: {
  //     acceptAlert(color) {
  //       this.$vs.notify({
  //         color: 'success',
  //         title: 'Accept Selected',
  //         text: 'Lorem ipsum dolor sit amet, consectetur',
  //       });
  //     },
  //     close() {
  //       this.$vs.notify({
  //         color: 'danger',
  //         title: 'Closed',
  //         text: 'You close a dialog!',
  //       });
  //     },
  //   },
};
</script>

<style>
.modal__btn {
  display: inline-block;
}

.vs-dialog {
  min-width: 500px !important;
  overflow-x: hidden !important;
}
.vs-dialog__header {
  padding: 24px !important;
}
.vs-icon-close {
  padding: 30px !important;
}
.modal__img {
  width: 100%;
  max-width: 200px;
}

@media screen and (max-width: 900px) {
  .vs-dialog {
  max-width: 300px !important;
  max-height: 575px !important;
  overflow: hidden !important;
}
}
@media screen and (max-width: 500px) {
  .vs-dialog {
  min-width: 100% !important;
  height: 575px !important;
  overflow: hidden !important;
}
.modal__img {
  margin: 10px auto;
  display: block;
}
}
</style>
