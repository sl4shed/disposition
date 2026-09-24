<script setup lang="ts">
import Window from "~/components/window.vue"

const id = useId();
const manager = useWindowManager();
function open(appId) {
    manager.open(appId);
} 
</script>

<template>
    <div class="content">
        <div class="header">
            <div class="striped-bg">
                <img src="~/assets/logos/Settings.png" alt="DispoVer Logo" class="logo" />
                <span>
                    <h2>DispoRun</h2>
                    <p>Type in the ID of any app and Disposition will open it for you.</p>
                </span>
            </div>

            <div class="spacer"></div>
        </div>

        <div class="main">
            <input type="text" placeholder="welcome" />
            <div class="buttons">
                <button>OK</button>
                <button @click="manager.close(id)">Cancel</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.buttons {
    display: flex;
    flex-direction: row;
    gap: 5px;
}

.buttons button {
    width: 100px;
}

.logo {
    width: 30px;
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
</style>