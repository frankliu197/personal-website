<template lang="pug">
.timeline.pt-3
    v-timeline(v-if="width > 750" dense)
      v-timeline-item(v-for="item in items", :key="item.title", large)
        template(v-slot:icon)
          v-avatar
            img(:src="require(`@/assets/portfolio/${item.title}.jpg`)")
        v-card.text-left.elevation-2.pb-1
          template(v-if="width > 850")
            v-card-title.horizontal-aligner.mb-0
              span
                span.f-main {{ item.title }}
                .x-spacer
                span(v-if="item.role").f-sub-bold.mb-1 {{ item.role }}
              v-spacer
              TimelineIcons(:item="item")
          template(v-else)
            v-card-title.horizontal-aligner.mb-0
              span.f-main {{ item.title }}
              v-spacer
              TimelineIcons(:item="item")
            v-card-title(v-if="item.role").mb-0(style="margin-top: -35px")
              span.f-sub-bold {{ item.role }}
          v-card-subtitle.pt-0.pb-2
            span.f-sub {{ item.start }}
            span.f-sub(v-if="item.end")  - {{ item.end }}
          v-card-text(v-if="item.role").pt-0(v-html="$t('portfolio.' + item.title + '.' + item.role)")
          v-card-text(v-else).pt-0(v-html="$t('portfolio.' + item.title)")
    template(v-else)
      .vertical-aligner(style="gap: 10px")
        v-card.text-left.elevation-2.pb-1(v-for="item in items" :key="item.title")
          v-card-title.horizontal-aligner.mb-0
            span.f-main {{ item.title }}
            v-spacer
            TimelineIcons(:item="item")
          v-card-title.mb-0(style="margin-top: -35px")
            span(v-if="item.role").f-sub-bold {{ item.role }}
          v-card-subtitle.pt-0.pb-2
            span.f-sub {{ item.start }}
            span.f-sub(v-if="item.end")  - {{ item.end }}
          v-card-text(v-if="item.role").pt-0(v-html="$t('portfolio.' + item.title + '.' + item.role)")
          v-card-text(v-else).pt-0(v-html="$t('portfolio.' + item.title)")
</template>
<script lang="ts">
//https://wordhtml.com/
import { kebabCase } from "lodash";
import TimelineIcons from "@/mini-components/TimelineIcons.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Timeline",
  components: {
    TimelineIcons,
  },
  props: {
    width: {
      type: Number,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    kebabCase,
  },
});
</script>

<style lang="scss" scoped>
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