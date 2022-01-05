<template lang="pug">
.portfolio
  span.anchor-tag(id="portfolio")
  v-container.py-16.px-10(fluid)
    div(ref="container" v-resize="() => {this.width = this.$refs.container.clientWidth}")
      p.text-h3.f-title {{ $t('title') }}
      v-tabs(v-model="tabIndex" v-bind="vTabProps")
        v-tabs-slider(color="accent lighten-3")
        template(v-for="(tab, index) in Object.keys(tabItems)" top)
          v-tab(:key="tab") {{ $t(tab + ".name") }}
      v-tabs-items(v-model="tabIndex")
        v-tab-item(v-for="tab in Object.keys(tabItems)" :key="tab")
          component(:is="tabItems[tab]" :items="portfolioData[tab]" :width="width")
</template>

<script lang="ts">
import Vue from 'vue';
import Timeline from "@/components/Timeline.vue";
import CardList from "@/components/CardList.vue";
import LanguageList from "@/components/LanguageList.vue";
let vTabProps = {
  "fixed-tabs": true,
  "next-icon": "mdi-arrow-right-bold-box-outline",
  "prev-icon": "mdi-arrow-left-bold-box-outline",
  "show-arrows": true
}

let tabItems = {
  experiences: "Timeline",
  projects: "Timeline",
  skills: "CardList",
  hobbies: "CardList",
  languages: "LanguageList"
}

import portfolioData from "@/assets/json/Portfolio.json"
export default Vue.extend({
  name: 'Portfolio',
  components: {
    Timeline,
    CardList,
    LanguageList
  },
  data: () => ({
    tabIndex: 0,
    vTabProps,
    tabItems,
    portfolioData,
    width: 0
  }),
  methods: {
  },
  watch: {
    tabIndex: function() {
      this.$emit('onTabChange', {tabIndex: this.tabIndex})
    }
  }
});

</script>

<style lang="scss" scoped>
.portfolio {
  line-height: 3.125rem;
  text-align: center;

  .item-card-container {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    flex-direction: row;
  }
}
</style>

<i18n>
{
  "en": {
    "title": "Portfolio",
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