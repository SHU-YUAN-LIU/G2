<template>
  <div class="procard">
    <div class="card_pic">
      <img width="200px" :src="imgSrc">
    </div>
    <p class="title">{{ name }}</p>
    <p class="price">價錢:{{ price }}</p>

    <img width="200px" :src="imgSrc">
    <p class="title">{{ name }}</p>
    <p class="price">價錢:{{ price }}</p>

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
