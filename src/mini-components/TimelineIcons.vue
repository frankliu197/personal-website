<template lang="pug">
span.timeline-icons
  v-tooltip(top v-if="item.github")
    template(v-slot:activator="{ on, attrs }")
      v-btn.mt-n2(v-on="on" v-bind="attrs" :href="item.github" target="_blank" icon style="align-self: flex-start;")
        v-icon(medium) mdi-github
    span {{ $t("visit-source-code") }}
  v-tooltip(top v-if="item.link")
    template(v-slot:activator="{ on, attrs }")
      v-btn.mt-n2(v-on="on" v-bind="attrs" :href="item.link" target="_blank" icon style="align-self: flex-start;")
        v-icon(small) mdi-open-in-new
    span {{ $t("visit") }}
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'TimelineIcons',
    props: {
      item: {
        type: Object,
        required: true
      }
    }
});
</script>

<style lang="scss" scoped>
.v-card {
    text-align: left;
}
</style>

<i18n>
{
  "en": {
    "title": "About Me",
    "main": "Main",
    "sub": "Par1 {0} Par2 {0} Par{0}",
    "resume-file": "Resume.pdf",
    "resume": "Resume"
  },
  "es" : {
    "resume-file": "Resume_es.pdf"
  }
}
</i18n>
