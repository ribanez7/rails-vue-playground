<template>
  <div class="container">
    <h1>Let's hear some stories!</h1>
    <stories :stories="stories"></stories>
    <hr/>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
import { HTTP } from './http-common'
import Stories from './components/Stories.vue'

export default {
  name: 'http_clients',
  components: {
    Stories
  },
  data: function () {
    return {
      stories: [],
      story: {}
    }
  },
  created: function () {
    this.fetchStories()
  },
  methods: {
    fetchStories () {
      HTTP.get('/api/stories')
        .then(response => {
        this.stories = response.data
      })
    }
  }
}
</script>
