import Vue from 'vue'
import Calendar from './calendar.vue'

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('calendar'))
  const app = new Vue(Calendar).$mount('calendar')

  console.log(app)
})
