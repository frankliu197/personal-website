<template lang="pug">
.about
    span.anchor-tag(id="about")
    v-container.py-16.px-10.background(fluid)
        p.text-h3.f-title {{ $t('title') }}
        v-row.mt-4
            v-col(offset=1 sm=4 cols=3)
                v-img.default(src="@/assets/images/fred.jpg")
            v-col(offset=1 sm=6 cols=7)
                i18n(path="main" tag="span" "class"="text-h6 f-main") 
                    br
                .y-spacer
                .fade-in-section
                    i18n(path="sub" tag="span" "class"="text-body-2 f-sub") 
                        br
                    .y-spacer
                    v-btn(download :href="'/documents/' + $t('resume-file')") {{ $t("resume") }}
                        v-icon mdi-download
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'About'
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

.about {
    line-height: 3.125rem;

    .background {
        background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(245, 246, 252, 0.7)), url('../assets/images/about.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
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
