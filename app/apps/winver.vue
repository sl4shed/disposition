<script setup lang="ts">
import Window from "~/components/window.vue"

let funFact = "I love eating shawarma.";

const manager = useWindowManager();
function rsvp() {

}
</script>

<template>
    <!-- <Window title="Welcome!" :width="600" :height="310" :posX="700" :posY="300" :resizeable="false" :tool="true"> -->
    <div class="content">
        <div class="header">
            <div class="striped-bg">
                <img src="~/assets/logos/Docs.png" alt="DispoVer Logo" class="logo" />
                <span>
                    <h2>Welcome to DispoVer</h2>
                    <p>hey kid, you want some... information?</p>
                </span>
            </div>

            <div class="spacer"></div>
        </div>

        <div class="main">
            <p>
                Hack Club Disposition <br />
                Version 0.1 (Build 15: Service Pack 1) <br />
                Copyright (c) 2026 Absolutely no one. Some rights reserved. <br />
                The Disposition operating system and its user interface are protected by the wonderful MIT license. <br />

                <br /><br /><br /><br /><br /><br /><br />

                This product is licensed under the MIT license to: <br />
                    you!!
            </p>
        </div>
    </div>
    <!-- </Window> -->
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


.spacer {
    width: 100%;
    height: 12px;
    border: 1px solid #c6c6c4;
    background-color: #dedede;
}

.content {
    display: flex;
    flex-direction: column;
}

.main {
    padding: 10px;
}

.main p {
    font-size: 14px;
}
</style>