<template lang="pug">
.card-list-basic(ref="container")
  template(v-for="item in items")
    v-hover(v-slot="{ hover }")
      v-card.item-card.text-center(rounded=0 v-bind="cardWidth")
        v-card-title(:class="titleClass") {{ item.title }}
        v-card-text
          span.f-sub(v-if="item.description") {{ item.description }}
          span.f-sub(v-if="item.start") {{ item.start }}
          span.f-sub(v-if="item.end")  - {{ item.end }}
</template>

<script lang="ts">
import {  floor } from "lodash";
import Vue from 'vue';

const CARD_WIDTH = 500
export default Vue.extend({
  name: 'CardListBasic',
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
  data : function(){
    let longElem = this.items.some(element  => {
      // @ts-expect-error :no support
      return element.title.length > 25
    });
    return {
      titleClass: longElem? 'f-sub-bold' : 'f-main'
    }
  },
  methods: {
  },
  computed: {
    cardWidth() : any {
      let width = (this.width - 1) / floor(this.width / CARD_WIDTH)
      return {
        width
      }
    }
  }
});



</script>

<style lang="scss" scoped>
.card-list-basic {
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        flex-direction: row;
}

.item-card {
  padding: 3px 3px 10px 3px;
  text-align: left;
  text-align: left;
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