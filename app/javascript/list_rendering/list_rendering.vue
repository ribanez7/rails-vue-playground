<template>
  <div>
    <hr/>
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
