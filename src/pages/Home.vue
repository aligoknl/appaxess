<template>
  <div
    class="min-h-screen bg-white text-gray-800 dark:bg-ax-primary-950 dark:text-ax-gray-100 flex flex-col transition-colors duration-300"
  >
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <HeaderNav />
    <main
      id="main-content"
      tabindex="-1"
      class="flex-1"
    >
      <HeroSection />
      <AboutSection />
      <EAASection />
      <ProcessSection />
      <ServicesSection />
      <ContactForm />
    </main>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import HeaderNav from '../components/HeaderNav.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import FooterSection from '../components/FooterSection.vue'
import EAASection from '../components/EAASection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import ContactForm from '../components/ContactForm.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>