<script setup lang="ts">
import Window from "~/components/window.vue"

const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

</script>

<template>
    <Window title="Documentation Viewer" :pos-x="10">
        <div class="content">
            <div class="header">
                <div class="striped-bg">
                    <img src="~/assets/logos/Docs.png" alt="DispoDocs Logo" class="logo" />
                    <span>
                        <h2>DispoDocs</h2>
                        <p>a pretty boring documentation viewer</p>
                    </span>
                </div>

                <div class="spacer"></div>
            </div>

            <div class="main">
                <ContentRenderer v-if="home" :value="home" />
            </div>
        </div>
    </Window>
</template>

<style scoped>
.fun-fact p {
    margin: 0;
    padding-left: 10px;
    padding-bottom: 10px;
}

.fun-fact span {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding-left: 10px;
    gap: 5px;
}

.logo {
    width: 60px;
    height: 60px;

    filter: drop-shadow(0 0 0.2rem black);
}

.header {
    display: flex;
    flex-direction: column;
}

.striped-bg span h2 {
    margin: 0;
}

.striped-bg span {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
}

.striped-bg span p {
    margin: 0;
}

.striped-bg {
    width: 100%;

    background: repeating-linear-gradient(0deg,
            #d7d7d7 0px,
            #d7d7d7 6px,
            #9f9f9f 6px,
            #9f9f9f 7px);
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding-left: 7px;
    gap: 2px;
}

.main {
    margin: 0;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;

    display: flex;
    flex-direction: column;
    gap: 4px;
}


</style>