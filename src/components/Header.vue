<template lang="pug">
.header
  v-app-bar(fixed)
    v-btn.home-button.navbar-link.secondary--text(text)
      v-toolbar-title Frank Liu
    div(v-if="this.$router.currentRoute.name === 'Home'")
      v-toolbar-items.ml-4
    v-spacer
    LocaleSelector
    

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

import LocaleSelector from "@/components/LocaleSelector.vue"
export default Vue.extend({
  name: "Header",
  components: {
    LocaleSelector
  },
  data: () => ({}),
});
</script>

<style scoped>
.container {
  padding: 0px;
}
.active.navbar-link::before {
  opacity: 0.24 !important;
}
.nav-divider {
  border: none !important;
  border-color: transparent !important;
}
.sidenav-divider {
  border: solid !important;
  border-width: thin 0 0 0 !important;
  border-color: var(--v-secondary-base) !important;
}
</style>