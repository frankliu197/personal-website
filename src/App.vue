<template lang="pug">
v-app
  Header
  v-main
    router-view
  Footer
  Contact
</template>

<script lang="ts">
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Vue from 'vue';
import Contact from '@/components/Contact.vue'
export default Vue.extend({
  name: 'App',
  components: {
    Contact,
    Footer,
    Header
  },
  data: () => ({
    showContactSheet: false
  })
});
</script>

<style lang='scss'>

a {
    text-decoration: none;
}
</style>
