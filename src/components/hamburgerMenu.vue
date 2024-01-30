<template>
    <div class="hamburger-menu" :class="{ open: isOpen }" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        }
    }
};
</script>
  
<style scoped>
.hamburger-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    cursor: pointer;

    .bar {
        width: 100%;
        height: 4px;
        background-color: #333;
        border-radius: 2px;
        transition: all 0.3s;
    }
}



.open .bar:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
}

.open .bar:nth-child(2) {
    opacity: 0;
}

.open .bar:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
}
</style>