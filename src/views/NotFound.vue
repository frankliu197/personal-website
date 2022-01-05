<template lang="pug">
.not-found
  p Page Not found
  P Redirecting to home ...
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'NotFound',
    created(){
      setTimeout( () => this.$router.push({ path: '/home'}), 1000);
    }
  })
</script>
