<template lang="pug">
v-app(v-resize="onResize")
  Header
  v-main
    router-view
  Footer
  LocaleSelector
  HelloI18n
</template>

<script lang="ts">
import Footer from './components/Footer.vue'
//import Header from './components/Header.vue'
import Vue from 'vue';
import emitter from "@/services/emitter"
import LocaleSelector from "@/components/LocaleSelector.vue"
import HelloI18n from "@/components/HelloI18n.vue"
export default Vue.extend({
  name: 'App',
  components: {
    //Header,
    HelloI18n,
    Footer,
    LocaleSelector
  },
  data: () => ({
    showContactSheet: false
  }),
  methods: {
    onResize: function() {
      //console.log({width: window.innerWidth, height: window.innerHeight })
      emitter.emit('resize', {width: document.body.clientWidth, height: document.body.clientHeight })
    }
  }
});
</script>

<style lang='scss'>
a {
    text-decoration: none;
}
</style>
