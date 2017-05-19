<template>
  <div class="header">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'this is header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 100px; background-color: #f60;
}
</style>
