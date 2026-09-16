<script setup lang="ts">
import Window from "~/components/window.vue"
</script>

<template>
    <Window title="Welcome!">
        <div class="content">
            <h1>Welcome to <bold>Disposition</bold></h1>

            <div class="horizontal">
                <div class="fun-fact">
                </div>
                
                <div class="buttons">
                    <button>Visit the shop</button>
                    <button>Take a guided tour</button>
                    <button>Manage your projects</button>
                    <button>Read up on the documentation</button>
                </div>
            </div>

            <h2>Build projects, build your physical media collection!</h2>
        </div>
    </Window>
</template>

<style>
.content {
    display: flex;
    flex-direction: column;
    gap: 2px;

    padding: 5px;
}

.buttons {
    display: flex;
    flex-direction: column;
    gap: 1px;

    flex-grow: 1;
}

.horizontal {
    display: flex;
    flex-direction: row;

    gap: 3px;
}

.fun-fact {
    flex-grow: 5;

    border-style:inset;
    background-color: gray;
}
</style>