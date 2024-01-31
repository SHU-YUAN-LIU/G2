<template>
    <button class="commit_btn">
        {{ commitButton }}
        <img src="/image/contect/arrow.svg" alt="">
    </button>
</template>
<script>

export default {
    data() {
        return {

        }
    },
    props: ['commitButton', 'goTo'],

}
</script>

<style lang="scss"></style>
