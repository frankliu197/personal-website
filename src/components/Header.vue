<template lang="pug">
.header(ref="container" v-resize="onResize")
  v-app-bar(:height="HEADER_HEIGHT" fixed v-scroll="onScroll")
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

const HEADER_HEIGHT = 56;
import Vue from "vue"
import LocaleSelector from "@/components/LocaleSelector.vue"
export default Vue.extend({
  name: "Header",
  components: {
    LocaleSelector
  },
  data: () => ({
    
    HEADER_HEIGHT
  })
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
.title-button {
  background-color:rgba(89, 165, 218);
}
.inline-text{
  font-size: 15px;
}


</style>

