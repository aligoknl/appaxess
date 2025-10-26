<template>
  <div class="min-h-screen bg-white text-gray-800 flex flex-col">
    <a href="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded focus:shadow"
      aria-label="Skip to main content">Skip to main content</a>
    <!-- Hero Section -->
    <header class="bg-gradient-to-r from-blue-600 to-blue-900 text-white">
        <div class="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-3">
      <img
        src="/src/assets/AppAxess.png"
        alt="AppAxess logo"
        class="h-10 w-auto"
      />
      <span class="text-xl font-bold text-white">AppAxess</span>
    </a>

    <!-- Optional: Add CTA button next to logo or leave it in center below -->
  </div>
      <div class="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 class="text-4xl md:text-5xl font-bold leading-tight">
          Accessibility, Made Simple
        </h1>
        <p class="mt-4 text-lg md:text-xl">
          We help companies ensure their websites comply with the European Accessibility Act (EAA) and WCAG 2.2.
        </p>
        <div class="mt-6">
          <a href="#contact" class="inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded shadow 
         hover:bg-yellow-300 focus:outline focus:outline-2 focus:outline-yellow-600
         no-underline visited:text-gray-900">
            Get a Free Audit
          </a>
        </div>
      </div>
    </header>

    <!-- About Section -->
    <section id="main" class="bg-gray-50 py-16">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-6">Why AppAxess?</h2>
        <p class="text-lg text-gray-700">
          Accessibility isn’t just a checkbox. It's a legal obligation and a moral responsibility. We guide you through
          the process, from scanning your site to fixing key issues and preparing for EAA enforcement in 2025.
        </p>
      </div>
    </section>

    <!-- Services -->
    <section class="bg-white py-16">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div class="text-4xl mb-4" aria-hidden="true">🔎</div>
            <h3 class="font-bold text-xl mb-2">Website Scan</h3>
            <p>We identify accessibility barriers based on WCAG 2.2 and provide a detailed report.</p>
          </div>
          <div>
            <div class="text-4xl mb-4" aria-hidden="true">📋</div>
            <h3 class="font-bold text-xl mb-2">EAA Compliance</h3>
            <p>We explain your legal obligations and guide you through compliance in plain language.</p>
          </div>
          <div>
            <div class="text-4xl mb-4" aria-hidden="true">🛠️</div>
            <h3 class="font-bold text-xl mb-2">Expert Fixes</h3>
            <p>We help you resolve issues directly or collaborate with your developers.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section id="contact" class="bg-gray-50 py-16">
      <div class="max-w-2xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Let’s Make Your Website Accessible</h2>
        <p class="mb-6 text-gray-700">
          Email us at
          <a href="mailto:support@appaxess.com"
            class="text-gray-900 font-medium underline hover:text-blue-800 focus:outline focus:outline-2 focus:outline-blue-400">
            support@appaxess.com
          </a>
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-100 text-center py-6 text-sm text-gray-600">
      © 2025 AppAxess. All rights reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
// No interactivity needed yet
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>