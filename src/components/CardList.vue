<template lang="pug">
.card-list(ref="container")
  template(v-for="item in items")
    v-hover(v-slot="{ hover }")
      v-card.item-card(rounded=0 v-bind="cardWidth")
        v-img(:src="require(`@/assets/portfolio/${item.title}.jpg`)" alt="" height="250px")
        v-card-title.f-title-small {{ $t("portfolio." + item.title + ".title" ) }}
        v-card-text.f-sub {{ $t("portfolio." + item.title + ".description") }}
        v-fade-transition(v-if="item.link")
          v-overlay(v-if="hover" absolute color="primary")
            v-btn(:href="item.link") {{ $t("more-info")}}
</template>

<script lang="ts">
import { kebabCase, floor } from "lodash";
import Vue from 'vue';

const CARD_WIDTH = 300
const CARD_MIN_WIDTH = 200
export default Vue.extend({
  name: 'CardList',
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
    cardWidth() : any {
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
.card-list {
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