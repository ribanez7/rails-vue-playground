import Vue from 'vue'
import TurbolinksAdapter from 'vue-turbolinks'
import Calendar from './calendar.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
    const calendarApp = document.querySelector('calendar-app')
    if (calendarApp != null) {
	const app = new Vue(Calendar).$mount(calendarApp)
    }
})
