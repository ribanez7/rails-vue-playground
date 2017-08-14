<template>
  <div class="container">
    <h1>Stories</h1>
    <div id="v-app">
      <table class="table table-stripped">
	<tr>
	  <th>#</th>
	  <th>Plot</th>
	  <th>Writer</th>
	  <th>Upvotes</th>
	  <th>Actions</th>
	</tr>
	<tr v-for="story in stories" is="story" :story="story"></tr>
      </table>
      <p class="lead">
	Here's a list of all your stories.
	<button @click="createStory()" class="btn btn-primary">Add a new one?</button>
      </p>
    </div>
  </div>
</template>

<script>
import Story from './Story.vue'

export default {
  components: {
    Story
  },
  props: ['stories'],
  data: function () {
    return {
      story: {}
    }
  },
  methods: {
    createStory () {
      var newStory = {
        plot: '',
        upvotes: 0,
        editing: true
      }
      this.stories.push(newStory)
    },
  }
}
</script>
