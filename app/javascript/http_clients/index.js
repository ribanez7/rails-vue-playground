import Vue from 'vue'
import TurbolinksAdapter from 'vue-turbolinks'
import HttpClients from './http_clients.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
    const httpClientsApp = document.querySelector('http-clients-app')
    if (httpClientsApp != null) {
	const app = new Vue(HttpClients).$mount(httpClientsApp)
    }
})
