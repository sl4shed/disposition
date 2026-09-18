<script setup lang="ts">
import "./index.css"
import Welcome from '~/apps/welcome.vue';
import Documentation from '~/apps/documentation.vue';
import Taskbar from '~/components/taskbar.vue';
import TaskbarItem from '~/components/taskbarItem.vue';

</script>

<template>
    <Welcome />
    <Documentation />

    <Taskbar>
        <!-- <TaskbarItem :app="Welcome"/> -->
    </Taskbar>
</template>