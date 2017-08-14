<template>
  <tr>
    <td>
      {{ story.id }}
    </td>
    <td class="col-md-6">
      <input class="form-control" v-if="story.editing" v-model="story.plot">
      </input>
      <span v-else>
	{{ story.plot }}
      </span>
    </td>
    <td>
      <input class="form-control" v-if="story.editing" v-model="story.writer">
      </input>
      <span v-else>
	{{ story.writer }}
      </span>
    </td>
    <td>
      {{ story.upvotes }}
    </td>
    <td>
      <div class="btn-group" v-if="!story.editing">
	<button @click="upvoteStory(story)" class="btn btn-primary">Upvote</button>
	<button @click="editStory(story)" class="btn btn-default">Edit</button>
	<button @click="deleteStory(story)" class="btn btn-danger">Delete</button>
      </div>
      <div class="btn-group" v-else>
	<button v-if="story.id" class="btn btn-primary" @click="updateStory(story)">Update Story</button>
	<button v-else class="btn btn-primary" @click="storeStory(story)">Save New Story</button>
	<button class="btn btn-default" @click="story.editing=false">Cancel</button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['story'],
  methods: {
    upvoteStory: function (story) {
      story.upvotes++
      HTTP.patch('/api/stories/' + story.id, story)
    },
    deleteStory: function (story) {
      var index = this.$parent.stories.indexOf(story)
      this.$parent.stories.splice(index, 1)
      HTTP.delete('/api/stories/' + story.id)
    },
    editStory: function (story) {
      story.editing = true
    },
    updateStory: function (story) {
      HTTP.patch('/api/stories/' + story.id, story)
      story.editing = false
    },
    storeStory: function (story) {
      HTTP.post('/api/stories/', story).then(response => {
	story.id = response.data.id

	story.editing = false
      })
    }
  }
}
</script>
