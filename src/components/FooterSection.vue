<template>
  <footer class="bg-ax-primary-900 text-white py-10 text-sm">
    <div
      class="max-w-6xl mx-auto px-6 grid gap-12
             md:grid-cols-3 md:items-start"
    >
      <!-- Column 1: Identifiers -->
      <section class="space-y-3">
        <h3 class="text-xs font-semibold tracking-wide opacity-80">
          Company Information
        </h3>

        <dl class="mt-2 space-y-2 text-xs opacity-90">
          <div class="flex items-center gap-2">
            <dt class="font-medium w-[3.2rem]">KVK:</dt>
            <dd>{{ kvkNumber }}</dd>
          </div>
          <div class="flex items-center gap-2">
            <dt class="font-medium w-[3.2rem]">BTW:</dt>
            <dd>{{ btwNumber }}</dd>
          </div>
        </dl>

        <nav aria-label="Legal links" class="mt-6">
          <ul class="space-y-2 text-xs uppercase tracking-wide">
            <li>
              <RouterLink
                to="/privacy"
                class="hover:text-ax-accent-300 transition"
              >
                Privacy Policy
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/accessibility"
                class="hover:text-ax-accent-300 transition"
              >
                Accessibility Statement
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/terms"
                class="hover:text-ax-accent-300 transition"
              >
                Terms &amp; Conditions
              </RouterLink>
            </li>
          </ul>
        </nav>
      </section>

            <!-- Column 2: Company -->
      <!-- Column 2: Company -->
      <section class="space-y-3 md:justify-self-center">
        <h3 class="text-base font-semibold">AppAxess</h3>
        <address class="not-italic text-xs opacity-80 space-y-1 leading-relaxed">
          <p>Accessibility Consultancy</p>
          <p>Amsterdam, Netherlands</p>
          <a
            href="mailto:support@appaxess.com"
            class="underline hover:text-ax-accent-400 rounded focus-visible:outline focus-visible:outline-yellow-400"
          >
            support@appaxess.com
          </a>
        </address>
      </section>

      <!-- Column 3: Connect -->
      <section class="space-y-3 md:justify-self-end">
        <h3 class="text-xs font-semibold tracking-wide opacity-80">Connect</h3>

        <ul class="flex items-center gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/ali-g%C3%B6k-8265a7229/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 hover:opacity-90 rounded
                     focus-visible:outline focus-visible:outline-yellow-400"
            >
              <span class="sr-only">Ali Gök on LinkedIn</span>
              <img
                :src="linkedinLogo"
                alt=""
                class="h-8 w-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
          </li>
        </ul>
      </section>
    </div>

    <p class="mt-10 text-center text-xs opacity-70">
      © {{ new Date().getFullYear() }} AppAxess. All rights reserved.
    </p>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import linkedinLogo from '../assets/social/linkedin.svg'

const btwNumber = 'NL005357884B48'
const kvkNumber = '98860186'
</script>