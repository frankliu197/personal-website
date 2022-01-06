<template lang="pug">
v-app
  Header(v-if="$route.meta.defaultHeader")
  v-main
    router-view
  Contact
</template>

<script lang="ts">
import Header from './components/Header.vue'
import Vue from 'vue';
import Contact from '@/components/Contact.vue'
export default Vue.extend({
  name: 'App',
  components: {
    Contact,
    Header
  },
  data: () => ({
    showContactSheet: false
  })
});
</script>

<style lang='scss'>

.container.main {
  //alias for .py-16.px-10 and applies to all v-container.main
  padding-right: 40px !important;
  padding-left: 40px !important;
  padding-top: 64px !important;
  padding-bottom: 64px !important;

}
</style>
