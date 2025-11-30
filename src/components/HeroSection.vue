<template>
  <section
    v-appear
    class="bg-gradient-to-r from-ax-primary-600 to-ax-primary-800 text-white text-center py-24 dark:from-ax-primary-900 dark:to-black transition-colors duration-300"
  >
    <Reveal>
      <h1 class="text-4xl md:text-6xl font-bold">
        Accessibility, Made Simple
      </h1>
    </Reveal>

    <Reveal>
      <p class="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-ax-gray-100">
        We help companies comply with the European Accessibility Act (EAA) using WCAG 2.2.
      </p>
    </Reveal>

    <Reveal>
      <a
        href="#contact"
  class="inline-block mt-8 bg-ax-accent-500 text-black px-8 py-3 text-lg font-semibold rounded shadow
  hover:bg-ax-accent-400"
      >
        Get a Free Accessibility Scan
      </a>
    </Reveal>
  </section>
</template>

<script setup>
import Reveal from './Reveal.vue'
</script>