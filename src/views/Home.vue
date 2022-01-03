<template lang="pug">
.home
  Carousel
  About
  Contact
</template>

<script lang="ts">
  import Vue from 'vue'
  import Contact from '@/components/Contact.vue'
  import About from '@/components/About.vue'
  import Carousel from '@/components/Carousel.vue'
  export default Vue.extend({
    name: 'Home',
    components: {
      About,
      Contact,
      Carousel
    },
    
  })
</script>
