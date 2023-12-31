import { ref, computed } from 'vue'
import Home from './components/pages/home.js'
import About from './components/pages/about.js'
import Navbar from './components/ui/navbar.js'
import Footer from './components/ui/footer.js'

export default {
	components: {
		Navbar,
		Footer
	},
	setup() {
		const count = ref(0)
		const routes = {
			'/': Home,
			'/about': About
		}
		const currentPath = ref(window.location.hash)

		window.addEventListener('hashchange', () => {
			currentPath.value = window.location.hash;
		})

		const currentView = computed(() => {
			return routes[currentPath.value.slice(1) || '/'] || NotFound
		})
		return { count, currentView }
	},
	template: /*html*/`
		<div id="body">
			<Navbar />
			<div id="content">
				<component :is="currentView" />
			</div>
			<Footer />
		</div>
	`
}
