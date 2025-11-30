<template>
  <footer class="bg-ax-primary-900 text-white py-8 text-sm">
    <div
      class="max-w-6xl mx-auto px-6 grid gap-8 text-center md:text-left md:grid-cols-[1.3fr_1fr_1fr] md:items-start"
    >
      <section class="space-y-2">
        <h3 class="text-base font-semibold">AppAxess</h3>
        <address class="not-italic text-xs opacity-80 space-y-1">
          <p>Accessibility Consultancy</p>
          <p>Amsterdam, Netherlands</p>
          <a
            href="mailto:support@appaxess.com"
            class="underline hover:text-ax-accent-400 rounded"
          >
            support@appaxess.com
          </a>
        </address>
      </section>

      <section class="md:justify-self-center flex flex-col items-center md:items-start text-center md:text-left">
        <h3 class="text-xs font-semibold tracking-wide opacity-80">AppAxess Identifiers</h3>
        <dl class="mt-3 space-y-2 text-xs opacity-90">
          <div class="flex items-center gap-1 justify-center md:justify-start">
            <dt class="font-medium min-w-[3rem]">KVK:</dt>
            <dd>{{ kvkNumber }}</dd>
          </div>
          <div class="flex items-center gap-1 justify-center md:justify-start">
            <dt class="font-medium min-w-[3rem]">BTW:</dt>
            <dd>{{ btwNumber }}</dd>
          </div>
        </dl>
      </section>

      <section class="md:justify-self-end">
        <h3 class="text-xs font-semibold tracking-wide opacity-80">Connect</h3>
        <ul class="mt-3 flex justify-center md:justify-start items-center gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/appaxess-consultancy-391901394/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 hover:opacity-90 rounded"
            >
              <span class="sr-only">AppAxess on LinkedIn</span>
              <img
                :src="linkedinLogo"
                alt="LinkedIn logo"
                class="h-8 w-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
        </ul>
      </section>
    </div>

    <p class="mt-6 text-center text-xs opacity-70">
      © {{ new Date().getFullYear() }} AppAxess. All rights reserved.
    </p>
  </footer>
</template>

<script setup lang="ts">
import linkedinLogo from '../assets/social/linkedin.svg'

const btwNumber = 'NL005357884B48'
const kvkNumber = '98860186'
</script>