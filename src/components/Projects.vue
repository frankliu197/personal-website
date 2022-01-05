<template lang="pug">
.projects
  v-container.py-16.px-10.background(fluid)
    v-timeline(dense)
      v-timeline-item(v-for='exp in experiences' :key='exp.title' large)
        template(v-slot:icon)
          v-avatar
            img(:src="require(`@/assets/portfolio/${exp.title}.jpg`)")
        template(v-slot:opposite='')
          p.text-body-2.f-sub {{ exp.start }} - 
          p.text-body-2.f-sub {{ exp.end }}
        v-card.elevation-2
          v-card-title.horizontal-aligner
            span
              span.text-h6.f-main  {{ exp.title }}
              .x-spacer
              span.text-body-2.f-sub.mb-1 {{ exp.start }} - {{ exp.end }}
            v-spacer
            v-tooltip(top)
              template(v-slot:activator="{ on, attrs }")
                v-btn.mt-n2(v-on="on" v-bind="attrs" :href="exp.website" target="_blank" icon style="align-self: flex-start;")
                  v-icon(size="small") mdi-open-in-new
              span {{ $t("visit") }}
          v-card-text 
            i18n(:path="kebabCase(exp.title) + '.experiences'" tag="span" "class"="text-body-2 f-sub") 
              br
</template>

<script lang="ts">
import { kebabCase } from "lodash";
import Vue from 'vue';
import tabs from "@/assets/json/Portfolio.json";
export default Vue.extend({
  name: 'Projects',
  data: () => ({
    experiences: tabs["projects"]
  }),
  methods: {
    kebabCase
  }
});

</script>

<style lang="scss" scoped>
    .background-image-styles {
        background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(245, 246, 252, 0.7)), url('../assets/images/about.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
        .default {
        transform: translateX(-100%);
    }
    .slide-in-from-left {
        transform: translateX(0%) !important;
        transition: transform 2s ease;
    }
    .fade-in-section.is-visible-delay-2 {
        opacity: 1;
        transition-delay: 2s;
    }


.f-sub.date {
  align-self: flex-end;
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