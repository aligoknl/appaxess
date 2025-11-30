<template>
  <section
    v-appear
    id="process"
    class="py-20 bg-ax-gray-100 dark:bg-ax-primary-900 transition-colors duration-300"
  >
    <div class="max-w-6xl mx-auto px-6">
      <Reveal>
  <h2 class="text-3xl font-bold text-center text-ax-primary-700 dark:text-ax-accent-200 mb-12">
          How AppAxess Works
        </h2>
      </Reveal>

  <div class="grid md:grid-cols-4 gap-8" role="list" aria-label="How AppAxess engagement works">
        <Reveal>
          <article
            class="bg-white dark:bg-ax-primary-950 p-6 rounded-xl border border-ax-gray-200/80 dark:border-ax-primary-700 shadow-sm h-full transition-colors"
            role="listitem"
          >
            <p class="sr-only">Step 1 of 4.</p>
            <p class="text-sm font-semibold text-ax-primary-600 dark:text-ax-accent-200 mb-1" aria-hidden="true">
              Step 1
            </p>
            <h3 class="font-bold text-xl mb-2 text-ax-primary-800 dark:text-white">Intake</h3>
            <p class="text-ax-gray-700 dark:text-ax-gray-200">We understand your product, tech stack & legal risk.</p>
          </article>
        </Reveal>

        <Reveal>
          <article
            class="bg-white dark:bg-ax-primary-950 p-6 rounded-xl border border-ax-gray-200/80 dark:border-ax-primary-700 shadow-sm h-full transition-colors"
            role="listitem"
          >
            <p class="sr-only">Step 2 of 4.</p>
            <p class="text-sm font-semibold text-ax-primary-600 dark:text-ax-accent-200 mb-1" aria-hidden="true">
              Step 2
            </p>
            <h3 class="font-bold text-xl mb-2 text-ax-primary-800 dark:text-white">Audit</h3>
            <p class="text-ax-gray-700 dark:text-ax-gray-200">
              Manual WCAG 2.2 testing: keyboard, screen-reader, contrast, semantics.
            </p>
          </article>
        </Reveal>

        <Reveal>
          <article
            class="bg-white dark:bg-ax-primary-950 p-6 rounded-xl border border-ax-gray-200/80 dark:border-ax-primary-700 shadow-sm h-full transition-colors"
            role="listitem"
          >
            <p class="sr-only">Step 3 of 4.</p>
            <p class="text-sm font-semibold text-ax-primary-600 dark:text-ax-accent-200 mb-1" aria-hidden="true">
              Step 3
            </p>
            <h3 class="font-bold text-xl mb-2 text-ax-primary-800 dark:text-white">Report</h3>
            <p class="text-ax-gray-700 dark:text-ax-gray-200">
              Clear findings with a developer-ready remediation roadmap.
            </p>
          </article>
        </Reveal>

        <Reveal>
          <article
            class="bg-white dark:bg-ax-primary-950 p-6 rounded-xl border border-ax-gray-200/80 dark:border-ax-primary-700 shadow-sm h-full transition-colors"
            role="listitem"
          >
            <p class="sr-only">Step 4 of 4.</p>
            <p class="text-sm font-semibold text-ax-primary-600 dark:text-ax-accent-200 mb-1" aria-hidden="true">
              Step 4
            </p>
            <h3 class="font-bold text-xl mb-2 text-ax-primary-800 dark:text-white">Fix & Verify</h3>
            <p class="text-ax-gray-700 dark:text-ax-gray-200">
              We fix issues or guide your team, then verify accessibility.
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