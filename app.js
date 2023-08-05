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
		<nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  			<div class="container-fluid">
    			<a class="navbar-brand" href="#/">Vue W/o Node</a>
    			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      				<span class="navbar-toggler-icon"></span>
    			</button>
    			<div class="collapse navbar-collapse" id="navbarNav">
      				<ul class="navbar-nav">
        				<li class="nav-item">
          					<a class="nav-link" href="#/">Home</a>
        				</li>
        				<li class="nav-item">
          					<a class="nav-link" href="#/about">About</a>
        				</li>
      				</ul>
    			</div>
  			</div>
		</nav>
		<component :is="currentView" />
	`
}
