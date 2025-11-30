<template>
  <!-- Dark mode toggle -->
  <button
    type="button"
    @click="toggleTheme"
    class="fixed top-4 right-4 inline-flex items-center justify-center w-11 h-11 rounded-full
           border border-ax-gray-200 dark:border-white/40 text-ax-gray-700 dark:text-white
           bg-white/80 dark:bg-white/10 hover:bg-white/90 dark:hover:bg-white/20 backdrop-blur transition"
    aria-label="Toggle dark mode"
  >
    <span class="sr-only">Toggle dark mode</span>
    <i class="pi text-lg" :class="isDark ? 'pi-sun' : 'pi-moon'" aria-hidden="true"></i>
  </button>

  <section
    class="min-h-screen bg-ax-gray-50 dark:bg-ax-primary-950 text-ax-gray-900 dark:text-ax-gray-100 
           flex items-center justify-center px-4 py-10 transition-colors"
  >
    <!-- Main success card -->
    <main
      class="fade-in bg-white dark:bg-ax-primary-900/70 backdrop-blur-xl shadow-2xl rounded-2xl 
             p-10 max-w-xl w-full text-center border border-ax-gray-200 dark:border-white/10 
             transition-colors"
    >
      <!-- Logo -->
      <img
        src="/appaxess-logo.png"
        alt="AppAxess logo"
        class="h-12 mx-auto mb-6"
      />

      <h1 class="text-3xl md:text-4xl font-bold text-ax-primary-700 dark:text-ax-accent-200 mb-4">
        Message received!
      </h1>

      <p class="text-lg text-ax-gray-700 dark:text-ax-gray-200 mb-8">
        Thank you for your message. We will get back to you as soon as possible.
      </p>

      <RouterLink
        to="/"
        class="inline-flex items-center justify-center gap-2 bg-ax-accent-500 text-black px-6 py-3 
               rounded-md font-semibold hover:bg-ax-accent-400 transition"
      >
        Back to Home
      </RouterLink>
    </main>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink} from 'vue-router'

const isDark = ref(false)

const toggleTheme = () => {
  const root = document.documentElement
  const nowDark = root.classList.toggle('dark')
  localStorage.setItem('theme', nowDark ? 'dark' : 'light')
  isDark.value = nowDark
}

onMounted(() => {
  const stored = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const root = document.documentElement

  if (stored === 'dark' || (!stored && prefersDark)) {
    root.classList.add('dark')
    isDark.value = true
  } else {
    root.classList.remove('dark')
    isDark.value = false
  }
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.9s ease-out forwards;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .fade-in {
    animation: none !important;
  }
}
</style>