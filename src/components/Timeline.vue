<template lang="pug">
.timeline
  v-container.py-16.px-10.background(fluid)
    v-timeline(dense)
      v-timeline-item(v-for='item in items' :key='item.title' large)
        template(v-slot:icon)
          v-avatar
            img(:src="require(`@/assets/portfolio/${item.title}.jpg`)")
        v-card.elevation-2
          span(v-if="width > 680")
            v-card-title.horizontal-aligner
              span
                span.text-h6.f-main  {{ item.title }}
                .x-spacer
                span.text-body-2.f-sub.mb-1 {{ item.start }} - {{ item.end }}
              v-spacer
              v-tooltip(top)
                template(v-slot:activator="{ on, attrs }")
                  v-btn.mt-n2(v-on="on" v-bind="attrs" :href="item.website" target="_blank" icon style="align-self: flex-start;")
                    v-icon(size="small") mdi-open-in-new
                span {{ $t("visit") }}
          span(v-else)
            v-card-title.horizontal-aligner
              span.text-h6.f-main  {{ item.title }}
              v-spacer
              v-tooltip(top)
                template(v-slot:activator="{ on, attrs }")
                  v-btn.mt-n2(v-on="on" v-bind="attrs" :href="item.website" target="_blank" icon style="align-self: flex-start;")
                    v-icon(size="small") mdi-open-in-new
                span {{ $t("visit") }}
            v-card-subtitle
              span.text-body-2.f-sub {{ item.start }} - {{ item.end }}
          v-card-text.pt-0
            i18n(:path="kebabCase(item.title) + '.description'" tag="span" "class"="text-body-2 f-sub") 
              br
</template>

<script lang="ts">
import { kebabCase } from "lodash";
import Vue from 'vue';

export default Vue.extend({
  name: 'Timeline',
  props: {
    width: {
      type: Number,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    kebabCase
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