<template lang="pug">
.language-list
  div(v-for="item in items" :key="item.title")
    v-card.item-card(rounded=0 v-bind="cardDimensions" @click="$root.$i18n.locale = item.code" :disabled="$root.$i18n.locale === item.code") 
      v-card-title.text-h4 {{ $t(item.title + ".name" ) }}
      v-card-text.dark-italic.text-h6 {{ $t("change-language", item.title) }}
</template>

<script lang="ts">
import { kebabCase, floor } from "lodash";
import Vue from 'vue';
const CARD_WIDTH = 500
export default Vue.extend({
  name: 'LanguageList',
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
  },
  computed: {
    cardDimensions() : any {
      
      let width = this.width / floor(this.width / CARD_WIDTH)
      return {
        width,
        "min-width": width / 5
      }
    }
  }
});



</script>

<style lang="scss" scoped>
.language-list {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
}

.item-card {
  padding: 3px 3px 10px 3px;
  background-color: #fffbc5 !important;
  overflow: hidden;
}

.v-card__title {
  display: inherit !important;
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