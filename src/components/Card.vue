<template>
  <div class="card">
    <<<<<<< HEAD <div class="card_pic">
      <img width="200px" :src="imgSrc">
  </div>
  <p class="title">{{ name }}</p>
  <p class="price">價錢:{{ price }}</p>
  =======
  <img width="200px" :src="imgSrc">
  <p class="title">{{ name }}</p>
  <p class="price">價錢:{{ price }}</p>
  <!-- <div class="content">
      <p>內容:{{ int }}</p>
    </div> -->
  >>>>>>> 130bbafc562e5f487ca16a1e2a6edb3d9ecde520
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: ['imgSrc', 'name', 'price', 'int'],
  created() { },
  methods: {

  }
}
</script>

<style lang="scss"></style>
