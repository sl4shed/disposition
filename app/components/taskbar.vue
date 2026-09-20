<script setup lang="ts">

</script>

<template>
    <div class="taskbar">
        <div class="left">
            <button class="start"></button>
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

    z-index: 10;
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