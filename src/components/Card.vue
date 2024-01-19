<template>
  <div class="card">
    <img width="200px" :src="imgSrc">
    <p>品名:{{ name }}</p>
    <p>價錢:{{ price }}</p>
    <div class="content">
      <p>內容:{{ int }}</p>
    </div>
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

<style></style>
