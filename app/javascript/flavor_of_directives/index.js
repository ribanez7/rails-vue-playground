import Vue from 'vue'
import TurbolinksAdapter from 'vue-turbolinks'
import FlavorOfDirectives from './flavor_of_directives.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
    const flavorOfDirectivesApp = document.querySelector('flavor-of-directives-app')
    if (flavorOfDirectivesApp != null) {
	const app = new Vue(FlavorOfDirectives).$mount(flavorOfDirectivesApp)
    }
})
