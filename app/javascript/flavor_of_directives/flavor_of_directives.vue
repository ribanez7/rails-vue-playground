<template>
  <div>
    <!-- <template> -->
      <h1 v-if="!message">You must send a message for help!</h1>
      <h2 v-else>You have sent a message!</h2>
      <!-- <p>Dispatch a messenger immediately!</p> -->
      <!-- <p>To nearby kingdom of Hearts!</p> -->
    <!-- </template> -->
    <textarea v-model="message"></textarea>
    <button v-if="message">
      Send word to allies for help!
    </button>
    <br/>
    <hr/>
    <br/>
    <div v-if="gender == 'male' || gender == 'female'">
      <h1>Hello,
	<span v-show="gender == 'male'">Mister {{ name }}</span>
	<span v-if="gender == 'female'">Miss {{name}}.</span>
      </h1>
    </div>
    <h1 v-else>So you can't decide. Fine!</h1>
    <label for="gender">Enter your gender:</label>
    <input name="gender" type="text" v-model="gender"/>
    <label for="name">Enter your name:</label>
    <input name="name" type="text" v-model="name"/>
    <br/>
    <hr/>
    <br/>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Our king is dead! Send help!",
      name: 'Universe',
      gender: 'female'
    }
  }
}
</script>

<style scoped>
</style>
