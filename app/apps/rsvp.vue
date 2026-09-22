<script setup lang="ts">
import { ref, computed } from 'vue'

const email = ref('')

const isEmailValid = computed(() => {
    const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    return pattern.test(email.value)
})
</script>

<template>
    <div class="content">
        <h1>log in with hack club auth first</h1>
        <input
            id="email"
            type="email"
            placeholder="enter your email here"
            required
            v-model="email"
        >
        <button :disabled="!isEmailValid" @click="navigateTo('/oauth', {external: true})">RSVP</button>
    </div>
</template>

<style scoped>
input[type="email"] {
    background-color: #F2F2F2;
    border: 1px solid #7B7B7B;
}

input:focus {
    outline: none;
}

.content {
    padding: 10px;
    gap: 5px;

    display: flex;
    flex-direction: column;
}

.content button {
    width: 200px;
}

.content button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.content h1 {
    margin: 0;
}
</style>