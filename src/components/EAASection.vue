<template>
  <section
    v-appear
    id="eaa"
    class="py-20 bg-white dark:bg-ax-primary-900 transition-colors duration-300"
  >
    <div class="max-w-5xl mx-auto px-6">
      <!-- Heading + intro -->
      <Reveal>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-ax-primary-700 dark:text-ax-accent-200 mb-3">
            What is the European Accessibility Act (EAA)?
          </h2>
          <p
            class="inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wide text-ax-primary-600 dark:text-ax-accent-200 bg-ax-primary-100 dark:bg-ax-primary-800 px-3 py-1 rounded-full mb-4"
          >
            Enforceable from June 2025
          </p>
          <p class="text-lg text-ax-gray-700 dark:text-ax-gray-200">
            The EAA requires many digital products and services in the EU to be accessible
            for people with disabilities. That includes websites, webshops, SaaS products,
            banking portals, media, and more.
          </p>
        </div>
      </Reveal>

      <!-- 3 key cards -->
  <div class="grid md:grid-cols-3 gap-8 mt-12 items-stretch">
        <Reveal>
          <article
            class="bg-ax-gray-100 dark:bg-ax-primary-950 border border-ax-gray-200 dark:border-ax-primary-700 rounded-xl p-6 flex flex-col h-full text-left transition-colors"
          >
            <h3 class="text-lg font-semibold text-ax-primary-700 dark:text-ax-accent-200 mb-2">
              Who must comply?
            </h3>
            <p class="text-ax-gray-700 dark:text-ax-gray-200 text-sm flex-1">
              Providers of digital services in the EU: e-commerce, banks, insurers, telecom,
              transport, public services, and many SaaS platforms.
            </p>
          </article>
        </Reveal>

        <Reveal>
          <article
            class="bg-ax-gray-100 dark:bg-ax-primary-950 border border-ax-gray-200 dark:border-ax-primary-700 rounded-xl p-6 flex flex-col h-full text-left transition-colors"
          >
            <h3 class="text-lg font-semibold text-ax-primary-700 dark:text-ax-accent-200 mb-2">
              What if you don’t?
            </h3>
            <p class="text-ax-gray-700 dark:text-ax-gray-200 text-sm flex-1">
              Supervisors can issue warnings, fines, and orders to fix issues. In serious
              cases, your product can even be restricted or taken off the market.
            </p>
          </article>
        </Reveal>

        <Reveal>
          <article
            class="bg-ax-gray-100 dark:bg-ax-primary-950 border border-ax-gray-200 dark:border-ax-primary-700 rounded-xl p-6 flex flex-col h-full text-left transition-colors"
          >
            <h3 class="text-lg font-semibold text-ax-primary-700 dark:text-ax-accent-200 mb-2">
              What does AppAxess do?
            </h3>
            <p class="text-ax-gray-700 dark:text-ax-gray-200 text-sm flex-1">
              We test against WCAG 2.2 AA, document issues in plain language, and translate
              legal requirements into a practical roadmap for your team.
            </p>
          </article>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<script setup>
import Reveal from './Reveal.vue'
</script>