<template lang="pug">
.timeline
  v-container.py-16.px-10.background(fluid)
    v-timeline(dense)
      v-timeline-item(v-for='item in items' :key='item.title' large)
        template(v-slot:icon)
          v-avatar
            img(:src="require(`@/assets/portfolio/${item.title}.jpg`)")
        v-card.elevation-2
          template(v-if="width > 680")
            v-card-title.horizontal-aligner
              span
                span.text-h6.f-main  {{ item.title }}
                .x-spacer
                span.text-body-2.f-sub.mb-1 {{ item.start }} - {{ item.end }}
              v-spacer
              TimelineIcons(:item="item")
          template(v-else)
            v-card-title.horizontal-aligner
              span.text-h6.f-main  {{ item.title }}
              v-spacer
              TimelineIcons(:item="item")
            v-card-subtitle
              span.text-body-2.f-sub {{ item.start }} - {{ item.end }}
          v-card-text.pt-0
            i18n(:path="kebabCase(item.title) + '.description'" tag="span" "class"="text-body-2 f-sub") 
              br
</template>

<script lang="ts">
import { kebabCase } from "lodash";
import TimelineIcons from "@/mini-components/TimelineIcons.vue"
import Vue from 'vue';

export default Vue.extend({
  name: 'Timeline',
  components: {
    TimelineIcons
  },
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