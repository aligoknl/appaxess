<template>
    <section id="contact" class="py-20 bg-white dark:bg-ax-primary-900 transition-colors duration-300">
        <div class="max-w-4xl mx-auto px-6">
            <h2 class="text-3xl font-bold text-ax-primary-700 dark:text-ax-accent-200 text-center mb-4">
                Get a Free Accessibility Scan
            </h2>
            <p class="text-center text-ax-gray-700 dark:text-ax-gray-100 mb-10 max-w-2xl mx-auto">
                Share your product URL and we’ll run a rapid WCAG health check. You’ll receive a concise
                scan summary with the top issues and next steps directly in your inbox.
            </p>

            <form
                name="contact"
                method="POST"
                action="/success"
                netlify
                data-netlify="true"
                netlify-honeypot="bot-field"
                class="space-y-6 bg-ax-gray-100 dark:bg-ax-primary-950 p-8 rounded-xl shadow-sm transition-colors"
            >
                <!-- Required hidden Netlify fields -->
                <input type="hidden" name="form-name" value="contact" />

                <!-- Honeypot field (bot trap) -->
                <div class="hidden">
                    <label>
                        Don’t fill this out if you're human:
                        <input name="bot-field" />
                    </label>
                </div>

                <!-- Name -->
                <div>
                    <label for="name" class="block font-medium text-sm mb-1 text-ax-gray-800 dark:text-ax-gray-100">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        class="w-full border border-ax-gray-300 dark:border-ax-primary-700 bg-white dark:bg-ax-primary-900 rounded-md px-3 py-2 dark:text-ax-gray-100"
                    />
                </div>

                <!-- Email -->
                <div>
                    <label for="email" class="block font-medium text-sm mb-1 text-ax-gray-800 dark:text-ax-gray-100">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        class="w-full border border-ax-gray-300 dark:border-ax-primary-700 bg-white dark:bg-ax-primary-900 rounded-md px-3 py-2 dark:text-ax-gray-100"
                    />
                </div>

                <!-- Website URL -->
                <div>
                    <label for="url" class="block font-medium text-sm mb-1 text-ax-gray-800 dark:text-ax-gray-100">
                        Website URL
                    </label>
                    <div class="flex">
                        <span
                            class="inline-flex items-center px-3 bg-ax-gray-200 dark:bg-ax-primary-800 border border-r-0 border-ax-gray-300 dark:border-ax-primary-700 rounded-l-md text-sm text-ax-gray-600 dark:text-ax-gray-200"
                        >
                            https://
                        </span>

                        <input
                            id="url"
                            name="url"
                            type="text"
                            placeholder="www.example.com"
                            required
                            class="w-full border border-ax-gray-300 dark:border-ax-primary-700 bg-white dark:bg-ax-primary-900 rounded-r-md px-3 py-2 dark:text-ax-gray-100"
                        />
                    </div>
                </div>

                <!-- Message -->
                <div>
                    <label for="message" class="block font-medium text-sm mb-1 text-ax-gray-800 dark:text-ax-gray-100">
                        Your message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        class="w-full border border-ax-gray-300 dark:border-ax-primary-700 bg-white dark:bg-ax-primary-900 rounded-md px-3 py-2 dark:text-ax-gray-100"
                    ></textarea>
                </div>

                <!-- Submit -->
                <button
                    type="submit"
                    class="w-full bg-ax-accent-500 text-black font-semibold py-3 rounded-md shadow hover:bg-ax-accent-400"
                >
                    Send message
                </button>
            </form>
        </div>
    </section>
</template>