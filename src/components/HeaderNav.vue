<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue';

</script>

<template>
  <header class="bg-ax-primary-700 text-white shadow dark:bg-ax-primary-900">
    <div class="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
      <a href="/" class="flex items-center gap-3">
        <img src="/src/assets/AppAxess.png" alt="AppAxess logo" class="h-10" />
        <span class="text-xl font-bold">AppAxess</span>
      </a>

      <div class="flex items-center gap-4">
        <nav class="hidden md:flex items-center text-sm" aria-label="Primary">
          <ul class="flex items-center gap-8">
            <li><a href="#about" class="hover:text-ax-accent-400">Why Us?</a></li>
            <li>
              <a href="#eaa" class="hover:text-ax-accent-400">
                <abbr title="European Accessibility Act">EAA</abbr>
              </a>
            </li>
            <li><a href="#process" class="hover:text-ax-accent-400">Process</a></li>
            <li><a href="#services" class="hover:text-ax-accent-400">Services</a></li>
            <li><a href="#contact" class="hover:text-ax-accent-400">Contact</a></li>
          </ul>
        </nav>
        <div class="ml-3 md:ml-6 pl-3 md:pl-4 border-l border-white/30">
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>
</template>