import { createApp, type Directive } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import App from './App.vue'
import { vAppear } from './directives/vAppear'
import 'primeicons/primeicons.css'
import './assets/main.css'

type IntersectHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void

type IntersectBindingValue =
	| IntersectHandler
	| {
			handler: IntersectHandler
			options?: IntersectionObserverInit
			once?: boolean
		}

function normalizeBinding(value?: IntersectBindingValue): {
	handler?: IntersectHandler
	options?: IntersectionObserverInit
	once?: boolean
} {
	if (!value) {
		return {}
	}

	if (typeof value === 'function') {
		return { handler: value }
	}

	return value
}

const observers = new WeakMap<Element, IntersectionObserver>()

const intersectDirective: Directive<Element, IntersectBindingValue> = {
	mounted(el, binding) {
		const { handler, options, once } = normalizeBinding(binding.value)
		if (!handler) return

		const observer = new IntersectionObserver((entries, obs) => {
			entries.forEach((entry) => {
				handler(entry, obs)
				if (once && entry.isIntersecting) {
					obs.unobserve(el)
				}
			})
		}, options)

		observers.set(el, observer)
		observer.observe(el)
	},
	unmounted(el) {
		const observer = observers.get(el)
		if (observer) {
			observer.unobserve(el)
			observer.disconnect()
			observers.delete(el)
		}
	},
}

const app = createApp(App)
app.use(PrimeVue, {
	theme: {
		preset: Aura,
	},
})
app.directive('intersect', intersectDirective)
app.directive('appear', vAppear);
app.mount('#app')