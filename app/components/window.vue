<script setup lang="ts">
import "./window.css"

const width = useState('width', () => 300);
const height = useState('height', () => 300);
const posX = useState('posX', () => 200);
const posY = useState('posY', () => 200);
// const minWidth = useState('minWidth', () => 200);
// const minHeight = useState('minHeight', () => 300);

const {title, minWidth, minHeight} = defineProps({
    title: {
        type: String,
        required: true
    },

    minWidth: {
        type: Number,
        default: 200
    },

    minHeight: {
        type: Number,
        default: 300,
    }
})

let resizeDir: string | null = null;
let startX = 0, startY = 0;
let startWidth = 0, startHeight = 0;
let startPosX = 0, startPosY = 0;
let drag = false;

function resize(event: MouseEvent) {
    event.preventDefault();
    const target = event.currentTarget;
    if (!(target instanceof HTMLElement)) return;

    resizeDir = target.dataset.dir ?? null;
    if (!resizeDir) return;

    startX = event.clientX;
    startY = event.clientY;
    startWidth = width.value;
    startHeight = height.value;
    startPosX = posX.value;
    startPosY = posY.value;

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
}

function onMouseMove(event: MouseEvent) {
    event.preventDefault();
    if (!resizeDir) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;

    if (resizeDir.includes("right")) width.value = Math.max(minWidth, startWidth + dx);
    if (resizeDir.includes("bottom")) height.value = Math.max(minHeight, startHeight + dy);
    if (resizeDir.includes("left")) {
        width.value = Math.max(minWidth, startWidth - dx);
        if (width.value > minWidth) posX.value = startPosX + dx;
    }
    if (resizeDir.includes("top")) {
        height.value = Math.max(minHeight, startHeight - dy);
        if (height.value > minHeight) posY.value = startPosY + dy;
    }
}

function onMouseUp(event: MouseEvent) {
    event.preventDefault();
    resizeDir = null;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
}

function startDrag(event: MouseEvent) {
    event.preventDefault();
    console.log("aiojag;ihagaguiherg")

    drag = true;
    startX = event.clientX;
    startY = event.clientY;
    startPosX = posX.value;
    startPosY = posY.value;

    document.addEventListener("mousemove", onDragMove);
    document.addEventListener("mouseup", onDragEnd);

}

function onDragMove(event: MouseEvent) {
    event.preventDefault();
    if (!drag) return;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    posX.value = startPosX + dx;
    posY.value = startPosY + dy;
}

function onDragEnd(event: MouseEvent) {
    event.preventDefault();
    drag = false;
    document.removeEventListener("mousemove", onDragMove);
    document.removeEventListener("mouseup", onDragEnd);
}

function close() {
    console.log("close")
}

function minimize() {
    console.log("minimize ")
}
</script>

<template>
    <div class="window active" :style="{
        width: width + 'px',
        height: height + 'px',
        left: posX + 'px',
        top: posY + 'px'
    }">
        <div class="resize-bars">
            <div class="resize-bar left" data-dir="left" @mousedown="resize"></div>
            <div class="resize-bar right" data-dir="right" @mousedown="resize"></div>
            <div class="resize-bar top" data-dir="top" @mousedown="resize"></div>
            <div class="resize-bar bottom" data-dir="bottom" @mousedown="resize"></div>
            <div class="resize-bar top-left" data-dir="top-left" @mousedown="resize"></div>
            <div class="resize-bar top-right" data-dir="top-right" @mousedown="resize"></div>
            <div class="resize-bar bottom-left" data-dir="bottom-left" @mousedown="resize"></div>
            <div class="resize-bar bottom-right" data-dir="bottom-right" @mousedown="resize"></div>
        </div>

        <div class="title-bar" @mousedown="startDrag" style="background-attachment: local;">
            <div class="title-bar-text">{{ title }}</div>
            <div class="title-bar-controls">
                <button class="minimize" @mousedown.stop @click="minimize"></button>
                <button class="close" @mousedown.stop @click="close"></button>
            </div>
        </div>

        <div class="window-background">
            <div class="window-body">
                <slot />
            </div>
        </div>
    </div>
</template>

<style>
.title-bar-text {
    user-select: none;
}

.window-body {
    font-family: "Old Standard TT", serif;
}
</style>