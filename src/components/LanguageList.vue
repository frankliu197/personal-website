<template lang="pug">
.language-list
  template(v-for="item in items")
    v-card.item-card(:key="item.title" rounded=0 v-bind="cardDimensions" @click="$root.$i18n.locale = item.code" :disabled="isLanguageSelected(item) || ! isSupported(item) ") 
      v-card-title {{ $t(item.title + ".name" ) }}
      v-card-subtitle {{ $t(item.title + ".fluency")}}
      v-card-text.dark-text(v-if="isLanguageSelected(item)") {{ $t("currently-selected") }}   
      v-card-text.dark-text(v-else-if="isSupported(item)") {{ $t("change-language", {"lang": item.title}) }}   
      v-card-text.dark-text(v-else) 
</template>

<script lang="ts">
import { floor } from "lodash";
import Vue from 'vue';
const CARD_WIDTH = 400
const CARD_MIN_WIDTH = 200
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
    isLanguageSelected(item :any) : boolean {
      return this.$root.$i18n.locale === item.code
    },
    isSupported(item :any) : boolean {
      return !!item.code
    }
  },
  computed: {
    cardDimensions() : any {
      
      let width = this.width / floor(this.width / CARD_WIDTH)
      return {
        width,
        "min-width": CARD_MIN_WIDTH
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
    "change-language": "Change language to {lang}",
    "English": {
      "name": "English",
      "fluency": "Native"
    },
    "Spanish": {
      "name": "Spanish",
      "fluency": "Professional"
    },
    "French": {
      "name": "French",
      "fluency": "Core"
    },
    "Chinese": {
      "name": "Chinese",
      "fluency": "Professional"
    }
  },
  "es": {
    "change-language": "Cambiar el idioma a {lang}",
    "English": {
      "name": "Inglés"
    }
  }
}
</i18n>