<script setup lang="ts">
import { Transition } from 'vue';
import StartMenu from './startMenu.vue';

let isOpen = useState("startMenuOpen", () => false);

function sopen() {
    if(isOpen.value) {
        isOpen.value = false;
    }
}
</script>

<template>
    <div class="start-shell" @click.passive="sopen" :style="{
        zIndex: isOpen ? 9999 : 0,
    }">
        <StartMenu v-if="isOpen" />
    </div>

    <div class="taskbar">
        <div class="left">
            <button class="start" @click="isOpen=!isOpen"></button>
        </div>

        <div class="divider"></div>

        <div class="middle">
            <slot />
        </div>

        <div class="right">
            <!-- calendar, clock, announcements, idk -->

            <div class="clock">
                <p></p>
                <p></p>
            </div>
            <div class="hours"></div>
        </div>
    </div>
</template>

<style>
.start-shell {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: start;
    padding-bottom: calc(35px - 2px);
}

.taskbar {
    position: absolute;
    width: 100vw;
    bottom: 0;
    left: 0;

    height: 35px;
    background: linear-gradient(180deg, #525252 0%, #000000 100%);
    border-top: 2px solid #797979;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 10px;

    padding-left: 10px;
    padding-right: 10px;

    z-index: 9999;
}

.divider {
    height: 100%;
    width: 2px;
    background-color: #797979;
}

.middle {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;

    gap: 5px;
}

.left {
    display: flex;
    justify-content: center;
    align-items: center;
}

.start {
    height: 25px;
    width: 25px;

    background-image: url("~/assets/icons/start.png");
    border: none;
    background-color: transparent;
    background-size: contain;
}

@keyframes spinny {
    0% {
        rotate: 0deg;
    }

    100% {
        rotate: 720deg;
    }
}

.start:hover {
    animation-name: spinny;
    animation-iteration-count: 1;
    animation-duration: 0.5s;
}
</style>