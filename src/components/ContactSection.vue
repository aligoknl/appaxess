<template>
  <section v-appear id="contact" class="py-20 bg-ax-gray-100 text-center">
    <div class="max-w-xl mx-auto px-6">
      <Reveal>
        <h2 class="text-3xl font-bold text-ax-primary-700 mb-4">
          Let's Make Your Website Accessible
        </h2>
      </Reveal>

      <Reveal>
        <p class="text-lg text-ax-gray-700 mb-6">
          Contact us at
          <a href="mailto:support@appaxess.com"
            class="underline text-ax-primary-700 hover:text-ax-primary-500">
            support@appaxess.com
          </a>
        </p>
      </Reveal>
    </div>
  </section>
</template>

<script setup>
import Reveal from './Reveal.vue'
</script>