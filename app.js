import { ref } from 'vue'

export default {
	setup() {
		const count = ref(0)
		return { count }
	},
	template: /*html*/`
		<h1>Counting</h1>
		<div>count is {{ count }}</div>
	`
}
