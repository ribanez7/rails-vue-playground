import Vue from 'vue'
import TurbolinksAdapter from 'vue-turbolinks'
import Calendar from './calendar.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
    const element = document.querySelector('calendar-app')
    console.log(element)
    if (element != null) {
	const app = new Vue(Calendar).$mount('calendar-app')
    }
})
