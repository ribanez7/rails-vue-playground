<template>
  <div class="container">
    <h1>Let's hear some stories!</h1>
    <stories :stories="stories"></stories>
    <hr/>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
import axios from 'axios'
import Stories from './components/Stories.vue'

export default {
  name: 'http_clients',
  components: {
    Stories
  },
  data () {
    return {
      stories: [
	{
	  plot: 'My horse is amazing.',
	  writer: 'Mr. Weebl',
	  upvotes: 28,
	  voted: false
	},
	{
	  plot: 'Narwhals invented Shish Kebab.',
	  writer: 'Mr. Weebl',
	  upvotes: 8,
	  voted: false
	},
	{
	  plot: 'The dark side of the Force is stronger.',
	  writer: 'Darth Vader',
	  upvotes: 52,
	  voted: false
	},
	{
	  plot: 'One does not simply walk into Mordor',
	  writer: 'Boromir',
	  upvotes: 74,
	  voted: false
	}
      ]
    }
  }
}
</script>
