<template>
  <section
    v-appear
    id="services"
    class="py-20 bg-white dark:bg-ax-primary-950 transition-colors duration-300"
  >
    <div class="max-w-6xl mx-auto px-6">
      <Reveal>
  <h2 class="text-3xl font-bold text-center text-ax-primary-700 dark:text-ax-accent-200 mb-10">
          Our Services
        </h2>
      </Reveal>

      <div class="grid md:grid-cols-3 gap-10" role="list" aria-label="AppAxess service offerings">
        <Reveal>
          <article class="text-center text-ax-gray-800 dark:text-ax-gray-100" role="listitem">
            <div
              class="w-20 h-20 mx-auto mb-4 rounded-full bg-ax-primary-100 dark:bg-ax-primary-800 flex items-center justify-center transition-colors"
            >
              <i class="pi pi-search text-5xl text-ax-primary-600 dark:text-ax-accent-200" aria-hidden="true"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Accessibility Audit</h3>
            <p class="text-ax-gray-700 dark:text-ax-gray-300">WCAG 2.2 manual testing with actionable insights.</p>
          </article>
        </Reveal>

        <Reveal>
          <article class="text-center text-ax-gray-800 dark:text-ax-gray-100" role="listitem">
            <div
              class="w-20 h-20 mx-auto mb-4 rounded-full bg-ax-primary-100 dark:bg-ax-primary-800 flex items-center justify-center transition-colors"
            >
              <i class="pi pi-file-edit text-5xl text-ax-primary-600 dark:text-ax-accent-200" aria-hidden="true"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">EAA Compliance</h3>
            <p class="text-ax-gray-700 dark:text-ax-gray-300">Guidance on legal requirements under the EAA (2025).</p>
          </article>
        </Reveal>

        <Reveal>
          <article class="text-center text-ax-gray-800 dark:text-ax-gray-100" role="listitem">
            <div
              class="w-20 h-20 mx-auto mb-4 rounded-full bg-ax-primary-100 dark:bg-ax-primary-800 flex items-center justify-center transition-colors"
            >
              <i class="pi pi-wrench text-5xl text-ax-primary-600 dark:text-ax-accent-200" aria-hidden="true"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">Development Support</h3>
            <p class="text-ax-gray-700 dark:text-ax-gray-300">We fix accessibility issues or guide your dev team.</p>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<script setup>
import Reveal from './Reveal.vue'
</script>