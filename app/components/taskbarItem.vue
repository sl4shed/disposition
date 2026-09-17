<script lang="ts" setup>
import type { Component } from 'vue';

defineProps<{
    app: Component
}>()

function open() {
    console.log("open");
}
</script>

<template>
    <div class="item" @click="open">
        <button class="icon"></button>
        <div class="open"></div>
    </div>

</template>

<style scoped>
.item {
    width: 25px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    border: none;
    width: 25px;
    height: 25px;

    background-image: url("~/assets/icons/shop.png");
    background-size: cover;
}

.open {
    position: absolute;
    bottom: 0;
    width: 20px;
    left: 2.5px;

    height: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
</style>