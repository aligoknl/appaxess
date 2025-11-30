<template>
  <section class="max-w-4xl mx-auto px-6 py-16">
    <h1 class="text-4xl font-bold text-ax-primary-700 mb-8">
      Accessibility Statement
    </h1>

    <div class="space-y-8 text-ax-gray-800 leading-relaxed">

      <section>
        <h2 class="text-2xl font-semibold mb-3">Our Commitment</h2>
        <p>
          AppAxess is committed to providing a website that is accessible to
          the widest possible audience, regardless of ability or technology.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-3">Compliance Status</h2>
        <p>
          We aim to meet <strong>WCAG 2.2 Level AA</strong> and the
          <strong>European Accessibility Act (EAA)</strong> requirements.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-3">Measures We Take</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>Semantic HTML</li>
          <li>Keyboard support</li>
          <li>Accessible color contrast</li>
          <li>Screen reader-friendly labels</li>
          <li>Reduced motion support</li>
          <li>Responsive design</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-3">Feedback</h2>
        <p>
          If you encounter an accessibility barrier, please contact us:
        </p>
        <p class="mt-3">
          Email:
          <a href="mailto:support@appaxess.com" class="underline">
            support@appaxess.com
          </a>
        </p>
      </section>

          <RouterLink
        to="/"
        class="inline-flex items-center justify-center gap-2 bg-ax-accent-500 text-black px-6 py-3 
               rounded-md font-semibold hover:bg-ax-accent-400 transition"
      >
        Back to Home
      </RouterLink>

    </div>
  </section>
</template>