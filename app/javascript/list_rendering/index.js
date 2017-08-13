import Vue from 'vue'
import TurbolinksAdapter from 'vue-turbolinks'
import ListRendering from './list_rendering.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
    const listRenderingApp = document.querySelector('list-rendering-app')
    if (listRenderingApp != null) {
	const app = new Vue(ListRendering).$mount(listRenderingApp)
    }
})
