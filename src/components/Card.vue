<template>
  <div class="card">
    <img width="200px" :src="imgSrc">
    <p class="dog">{{ name }}</p>
    <p class="fish">價錢:{{ price }}</p>
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

<style lang="scss">
.dog {
  font-family: Mantou Sans, sans-serif;

}

.fish {
  font-family: noto sans, sans-serif;
  font-size: 16px;
  letter-spacing: 1.5px;
  font-weight: 800;
  color: #FF892E;
}

.content {
  font-family: noto sans, sans-serif;
}
</style>
