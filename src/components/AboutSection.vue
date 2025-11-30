<template>
  <section id="about" class="py-20 bg-ax-gray-100 dark:bg-ax-primary-950 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-6 text-center">

      <!-- Title -->
      <Reveal>
  <h2 class="text-3xl md:text-4xl font-bold text-ax-primary-700 dark:text-ax-accent-400 mb-6">
          Why AppAxess?
        </h2>
      </Reveal>

      <!-- Subtitle -->
      <Reveal>
  <p class="text-lg text-ax-gray-700 dark:text-ax-gray-200 max-w-3xl mx-auto mb-12">
          Accessibility isn’t just a checkbox, it’s a legal obligation and a user experience
          requirement. AppAxess helps you meet the European Accessibility Act (EAA) and
          WCAG 2.2 with clear guidance, expert audits, and developer-ready solutions.
        </p>
      </Reveal>

      <!-- Trust Badges -->
      <Reveal>
  <div class="flex flex-col items-center gap-6 mb-16 opacity-90">
    <p class="text-xs font-semibold tracking-[0.3em] text-ax-primary-600 dark:text-ax-accent-200 uppercase">
            Certifications & credentials
          </p>
          <div class="flex flex-wrap justify-center items-center gap-10">
            <img
              :src="iaapLogo"
              alt="International Association of Accessibility Professionals (IAAP)"
              class="h-12 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />

            <img
              :src="cpaccLogo"
              alt="Certified Professional in Accessibility Core Competencies (CPACC)"
              class="h-12 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </Reveal>

    <!-- 3 Pillars -->
  <div class="grid md:grid-cols-3 gap-8 text-left md:auto-rows-fr items-stretch">

        <!-- Pillar 1 -->
        <Reveal class="h-full">
          <div class="bg-white dark:bg-ax-primary-900 rounded-lg shadow-sm p-8 h-full flex flex-col transition-colors">
            <h3 class="font-semibold text-xl text-ax-primary-700 dark:text-ax-accent-300 mb-3">Certified Expertise</h3>
            <p class="text-ax-gray-700 dark:text-ax-gray-200">
              Work directly with a CPACC-certified accessibility specialist with hands-on
              experience in WCAG 2.2, EAA requirements, and enterprise-level audits.
            </p>
          </div>
        </Reveal>

        <!-- Pillar 2 -->
        <Reveal class="h-full">
          <div class="bg-white dark:bg-ax-primary-900 rounded-lg shadow-sm p-8 h-full flex flex-col transition-colors">
            <h3 class="font-semibold text-xl text-ax-primary-700 dark:text-ax-accent-300 mb-3">Developer-Friendly Approach</h3>
            <p class="text-ax-gray-700 dark:text-ax-gray-200">
              No vague recommendations. You get clear, actionable, developer-ready fixes,
              including HTML, ARIA, keyboard, contrast, and screen-reader improvements.
            </p>
          </div>
        </Reveal>

        <!-- Pillar 3 -->
        <Reveal class="h-full">
          <div class="bg-white dark:bg-ax-primary-900 rounded-lg shadow-sm p-8 h-full flex flex-col transition-colors">
            <h3 class="font-semibold text-xl text-ax-primary-700 dark:text-ax-accent-300 mb-3">Built for EAA 2025</h3>
            <p class="text-ax-gray-700 dark:text-ax-gray-200">
              We create EAA readiness plans, policy templates, and executive briefings so your
              team can reduce legal risk, champion accessibility, and ship without slowing down
              delivery.
            </p>
          </div>
        </Reveal>
  </div>

    </div>
  </section>
</template>

<script setup>
import cpaccLogo from '../assets/cpacc-logo.png'
import iaapLogo from '../assets/iaap-logo.png'
import Reveal from './Reveal.vue'
</script>