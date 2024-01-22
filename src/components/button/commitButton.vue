<template>
    <button class="commit_btn">
        {{ commitButton }}
        <img src="@/assets/image/contect/arrow.svg" alt="">
    </button>
</template>
<script>

export default {
    data() {
        return {

        }
    },
    props: ['commitButton',],

}
</script>

<style lang="scss"></style>
