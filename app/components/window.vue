<script setup lang="ts">
import "7.css/dist/7.scoped.css"

const width = useState('width', () => 300);
const height = useState('height', () => 300);
const posX = useState('posX', () => 200);
const posY = useState('posY', () => 200);
const minWidth = useState('minWidth', () => 400);
const minHeight = useState('minHeight', () => 300);

defineProps({
    title: {
        type: String,
        required: true
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

    if (resizeDir.includes("right")) width.value = Math.max(minWidth.value, startWidth + dx);
    if (resizeDir.includes("bottom")) height.value = Math.max(minHeight.value, startHeight + dy);
    if (resizeDir.includes("left")) {
        width.value = Math.max(minWidth.value, startWidth - dx);
        if (width.value > minWidth.value) posX.value = startPosX + dx;
    }
    if (resizeDir.includes("top")) {
        height.value = Math.max(minHeight.value, startHeight - dy);
        if(height.value > minHeight.value) posY.value = startPosY + dy;
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
    <div class="win7">
        <div class="window glass active" style="--w7-w-bg: #D9D9D9;" :style="{
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
                    <button aria-label="Minimize" @mousedown.stop @click="minimize"></button>
                    <button aria-label="Close" @mousedown.stop @click="close"></button>
                </div>
            </div>

            <div class="window-body has-space">
                <slot />
            </div>
        </div>
    </div>
</template>

<style>
.title-bar-text {
    user-select: none;
}

.resize-bars {
    position: absolute;
    width: 100%;
    height: 100%;
    user-select: none;
    pointer-events: none;
}

.resize-bar {
    user-select: all;
    pointer-events: all;
    position: absolute;
    z-index: 20;
}

.resize-bar.left {
    cursor: col-resize;
    top: 0;
    height: 100%;
    left: 0;
    width: 2px;
}

.resize-bar.right {
    cursor: col-resize;
    top: 0;
    height: 100%;
    right: 0;
    width: 2px;
}

.resize-bar.top {
    cursor: row-resize;
    top: 0;
    width: 100%;
    left: 0;
    height: 2px;
}

.resize-bar.bottom {
    cursor: row-resize;
    bottom: 0;
    width: 100%;
    left: 0;
    height: 2px;
}

.resize-bar.top-left {
    cursor: nwse-resize;
    width: 3px;
    height: 3px;
    z-index: 30;
    top: 0;
    left: 0;
}

.resize-bar.top-right {
    cursor: nesw-resize;
    width: 3px;
    height: 3px;
    z-index: 30;
    top: 0;
    right: 0;
}

.resize-bar.bottom-left {
    cursor: nesw-resize;
    width: 3px;
    height: 3px;
    z-index: 30;
    bottom: 0;
    left: 0;
}

.resize-bar.bottom-right {
    cursor: nwse-resize;
    width: 3px;
    height: 3px;
    z-index: 30;
    bottom: 0;
    right: 0;
}

.window {
    position: absolute;
    left: 200px;
}
</style>