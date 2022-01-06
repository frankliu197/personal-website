<template lang="pug">
.header(ref="container" v-resize="onResize")
  v-app-bar(fixed v-scroll="onScroll")
    v-btn.secondary--text(text href="/")
      v-app-bar-title Frank Liu
    v-toolbar-items
      v-btn(text href="/") Home
    v-spacer
    v-toolbar-items
      LocaleSelector
  .header-margin
</template>


<script lang="ts">
import Vue from "vue"
import LocaleSelector from "@/components/LocaleSelector.vue"
export default Vue.extend({
  name: "Header",
  components: {
    LocaleSelector
  }
});
</script>

<style lang="scss" scoped>

.active::before {
  opacity: 0.24 !important;
}

.v-list-item .v-btn {
  width: 100%;
}

.v-list-item .v-list-item__title {
  text-align: center;
}


</style>

<i18n>
{
  "en": {
    "about": "About",
    "portfolio": "Portfolio",
    "contact": "Contact",
    "menu": "Menu"
  },
  "es" : {
    "contact-me": "Contáctame"
  },
  "ja" : {
    "contact-me": "連絡"
  },
  "zh" : {
    "contact-me": "联系我"
  }
}
</i18n>