<template lang="pug">
.language-list
  template(v-for="item in items")
    v-card.text-center.item-card(:key="item.title" rounded=0 v-bind="cardDimensions" @click="$root.$i18n.locale = item.code" :disabled="isLanguageSelected(item) || ! isSupported(item) ") 
      v-card-title {{ $t(item.title  ) }}
      v-card-subtitle {{ $t(item.fluency )}}
      v-card-text.dark-text(v-if="isLanguageSelected(item)") {{ $t("currently-selected") }}   
      v-card-text.dark-text(v-else-if="isSupported(item)") {{ $t("change-language", {"lang": $t(item.title)}) }}   
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
      
      let width = (this.width - 1) / floor(this.width / CARD_WIDTH)
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
  overflow: hidden;
}

.theme--light {
  .item-card {
    
    background-color: #fffbc5 !important;
  }
}


</style>

<i18n>
{
  "en": {
    "Core": "Core",
    "Professional": "Professional",
    "Fluent": "Fluent",
    "Native": "Native",
    "change-language": "Change language to {lang}",
    "currently-selected": "Currently Selected",
    "English": "English",
    "Spanish": "Spanish",
    "Japanese": "Japanese",
    "French":  "French",
    "Chinese": "Chinese"
  },
  "es": {
    "Core": "Intermedio",
    "Professional": "Competencia Profesional",
    "Fluent": "Fluido",
    "Native": "Nativo",
    "change-language": "Cambiar el idioma a {lang}",
    "currently-selected": "Actualmente Seleccionado",
    "English": "Inglés",
    "Spanish": "Español",
    "French": "Francés",
    "Chinese": "Chino",
    "Japanese": "Japonés"
  },
  "zh": {
    "Core": "中级",
    "Professional": "高级 (无障碍商务沟通)",
    "Fluent": "流利",
    "Native": "母语",
    "change-language": "改变语言为{lang}",
    "currently-selected": "目前所选",
    "English": "英文",
    "Spanish": "西班牙语",
    "French": "法语",
    "Chinese": "中文",
    "Japanese": "日文"
  },
  "ja": {
    "Core": "中級",
    "Professional": "ビジネス上級",
    "Fluent": "流暢",
    "Native": "母語",
    "change-language": "言語を{lang}に変更",
    "currently-selected": "現在の選択",
    "English": "英語",
    "Spanish": "スパイン語",
    "French": "フランス語",
    "Chinese": "中国語",
    "Japanese": "日本語"
  }
}
</i18n>