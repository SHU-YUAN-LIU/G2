<template>
    <div class="bread">
        <ul>
            <li>
                <RouterLink to="/">首頁</RouterLink> / {{ page }}
            </li>
        </ul>

    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: ['page',],

}
</script>
<style lang="scss"></style>
