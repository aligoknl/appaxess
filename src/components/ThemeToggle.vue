<template>
  <button
    @click="toggleTheme"
  class="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/40 text-white bg-white/10 hover:bg-white/20 transition"
    aria-label="Toggle dark mode"
  >
    <i
      aria-hidden="true"
      class="pi text-lg"
      :class="isDark ? 'pi-sun' : 'pi-moon'"
    ></i>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')

  // Persist user preference
  localStorage.setItem("theme", isDark.value ? "dark" : "light")
}

// Load saved preference
if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark")
}
</script>