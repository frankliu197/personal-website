<template lang="pug">
.home
  Carousel
  About
  Portfolio
  Footer
</template>

<script lang="ts">
  import Vue from 'vue'
  import About from '@/components/About.vue'
  import Carousel from '@/components/Carousel.vue'
  import Portfolio from "@/components/Portfolio.vue"
  export default Vue.extend({
    name: 'Home',
    components: {
      About,
      Carousel,
      Portfolio
    },
    
  })
</script>
