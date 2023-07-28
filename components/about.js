import { ref } from 'vue'

export default {
    setup() {
        const count = ref(0)
        return { count }
    },
    template: /*html*/`
        <h1>About</h1>
        <p>This is the about page</p>
        <p>count is {{ count }}</p>
    `
}