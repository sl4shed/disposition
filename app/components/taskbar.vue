<script setup lang="ts">

</script>

<template>
    <div class="taskbar">
        <div class="left">
            <button class="start"></button>
        </div>

        <div class="middle">
            <slot />
        </div>

        <div class="right">
            <!-- calendar, clock, announcements, idk -->
        </div>
    </div>
</template>

<style>
.taskbar {
    position: absolute;
    width: calc(100vw - 20px);
    bottom: 0;
    left: 0;

    height: 39px;
    background: linear-gradient(180deg, #000 0%, #000 50%, #686868 100%);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-left: 10px;
    padding-right: 10px;
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