import { ref, computed } from 'vue'
import Home from './components/home.js'
import About from './components/about.js'

export default {
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
		<nav class="navbar bg-body-tertiary">
  			<div class="container-fluid">
    			<a class="navbar-brand" href="#">Navbar</a>
  			</div>
		</nav>
		<a href="#/">Home</a> |
  		<a href="#/about">About</a> 
		<component :is="currentView" />
	`
}
