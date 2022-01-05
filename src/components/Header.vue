<template lang="pug">
.header(ref="container" v-resize="() => {width = $refs.container.clientWidth}")
  v-app-bar(fixed)
    v-btn.secondary--text(text href="/")
      v-app-bar-title Frank Liu
    v-toolbar-items
      template(v-if="home && !collapseNavBar")
        v-btn(text href="#about") About
        v-btn(text href="#portfolio") Portfolio
        v-btn(text @click="emitter.emit('toggleContact')") Contact
      template(v-else-if="!home")
        v-btn(text href="/") Home
    v-spacer
    v-toolbar-items
      v-menu "test"
      LocaleSelector
      template(v-if="home && collapseNavBar")
        v-divider(vertical)
        v-app-bar-nav-icon(@click="showNavDrawer = true")
  v-navigation-drawer(app temporary right v-model="showNavDrawer" v-bind="navDrawDimensions"  v-resize="() => {showNavDrawer = collapseNavBar && showNavDrawer}")
    v-list
        v-list-item
          v-list-item-title.text-h6 MENU
    v-divider
    v-list
      v-list-item
        v-btn(text href="#about") About
      v-list-item
        v-btn(text href="#portfolio") Portfolio
      v-list-item
        v-btn(text @click="emitter.emit('toggleContact')") Contact
  .header-margin(v-if="!home")
</template>


<script lang="ts">
import Vue from "vue"
const MIN_NAVDRAW_WIDTH = 300
import LocaleSelector from "@/components/LocaleSelector.vue"
import emitter from "@/services/emitter"
export default Vue.extend({
  name: "Header",
  components: {
    LocaleSelector
  },
  data: function() {
    return {
      width: 0,
      showNavDrawer: false,
      home: this.$router.currentRoute.name === 'Home',
      emitter
    }
  },
  methods: {
  },
  computed: {
    navDrawDimensions() : any {
      return {
        width: this.width / 3 > MIN_NAVDRAW_WIDTH? this.width: MIN_NAVDRAW_WIDTH,
      }
    },
    collapseNavBar(): boolean {
      return this.width < 960
    }
  },
  watch: {
    $route(to, from) {
      this.home = to.name === 'Home'
    }
  }
});
</script>

<style lang="scss" scoped>
.v-list-item .v-btn {
  width: 100%;
}

.v-list-item .v-list-item__title {
  text-align: center;
}


</style>