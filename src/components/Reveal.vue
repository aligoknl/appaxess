<template>
  <div
    v-intersect="handleIntersect"
    :class="[
      'transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100',
      revealed
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-6'
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const revealed = ref(false)
const reduceMotion = ref(false)
let mediaQuery: MediaQueryList | undefined

const updatePreference = () => {
  reduceMotion.value = Boolean(mediaQuery?.matches)
  if (reduceMotion.value) {
    revealed.value = true
  }
}

onMounted(() => {
  if (typeof window === 'undefined') return
  mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  updatePreference()
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', updatePreference)
  } else if (mediaQuery.addListener) {
    mediaQuery.addListener(updatePreference)
  }
})

onBeforeUnmount(() => {
  if (!mediaQuery) return
  if (mediaQuery.removeEventListener) {
    mediaQuery.removeEventListener('change', updatePreference)
  } else if (mediaQuery.removeListener) {
    mediaQuery.removeListener(updatePreference)
  }
})

function handleIntersect(entry: IntersectionObserverEntry) {
  if (reduceMotion.value) {
    revealed.value = true
    return
  }

  if (entry.isIntersecting) {
    revealed.value = true
  }
}
</script>