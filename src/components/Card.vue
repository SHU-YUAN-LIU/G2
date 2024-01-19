<template>
  <div class="card">
    <img width="200px" :src="imgSrc">
<<<<<<< HEAD
    <p>品名:{{ name }}</p>
    <p>價錢:{{ price }}</p>
=======
    <p class="dog">{{ name }}</p>
    <p class="fish">價錢:{{ price }}</p>
>>>>>>> f2dadc6a71a50df5ce3bb5c3cb388c6873c1a4a8
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
<<<<<<< HEAD
  }
}
</script>

<style></style>
=======

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
>>>>>>> f2dadc6a71a50df5ce3bb5c3cb388c6873c1a4a8
