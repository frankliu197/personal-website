<template lang="pug">
.header(ref="container" v-resize="() => {width = $refs.container.clientWidth}")
  v-app-bar(fixed)
    v-btn.home-button.secondary--text(text)
      v-toolbar-title Frank Liu
    template(v-if="home && !collapseNavBar")
      v-btn(text href="#about") About
      v-btn(text href="#portfolio") Portfolio
      v-btn(text @click="emitter.emit('toggleContact')") Contact
    v-spacer
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

//    v-toolbar-items.ml-4
      v-btn.navbar-link.secondary--text(
        class="hidden-sm-and-down"
        :class="scrollTop >= windowHeight-64 && scrollTop < windowHeight+aboutHeight-64 && !contactStatus ? 'active':''"
        text
        href="#about"
      ) About
      v-btn.navbar-link.secondary--text(
        class="hidden-sm-and-down"
        :class="scrollTop >= windowHeight+aboutHeight-64 && !contactStatus ? 'active':''"
        text
        href="#portfolio"
      ) Portfolio
      v-btn.navbar-link.secondary--text(
        class="hidden-sm-and-down"
        :class="contactStatus ? 'active':''"
        text
        @click="openContact"
        ) Contact
    v-divider.nav-divider
    v-app-bar-nav-icon(
      color="secondary"
      class="hidden-md-and-up"
      @click.stop="showSide=!showSide"
    )
  v-card(tile)
    v-navigation-drawer(
      app
      v-model="showSide"
      v-resize="closeMenu"
      temporary
      right
      dark
      :width="windowWidth/3 > 250 ? windowWidth/3:250"
      overlay-color="primary"
      color="primary"
      class="text-center"
      style="z-index: 11 !important"
    )
      v-list
        v-list-item
          v-list-item-title.text-h6 MENU

      v-divider.sidenav-divider

      v-list
        v-list-item
          v-btn.navbar-link.secondary--text(
            :class="scrollTop >= windowHeight-64 && scrollTop < windowHeight+aboutHeight-64 && !contactStatus ? 'active':''"
            text
            width="100%"
            href="#about"
          ) About
        v-list-item
          v-btn.navbar-link.secondary--text(
            :class="scrollTop >= windowHeight+aboutHeight-64 && !contactStatus ? 'active':''"
            text
            width="100%"
            href="#portfolio"
          ) Portfolio
        v-list-item
          v-btn.navbar-link.secondary--text(
            :class="contactStatus ? 'active':''"
            text
            width="100%"
            @click="EventBus.$emit('toggleContact')"
          ) Contact
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

<style scoped>
.v-list-item .v-btn {
  width: 100%;
}

.v-list-item .v-list-item__title {
  text-align: center;
}
</style>