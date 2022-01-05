<template lang="pug">
.card-list(ref="container")
  template(v-for="item in items")
    v-hover(v-slot="{ hover }")
      v-card.item-card(rounded=0 :width="width / (width / CARD_WIDTH)")
        v-img(:src="require(`@/assets/portfolio/${item.title}.jpg`)" alt="" height="250px")
        v-card-title.text-h4 {{ $t(item.title + ".name" ) }}
        v-card-text.dark-italic.text-h6 {{ $t(item.title + ".description") }}
        v-fade-transition(v-if="item.link")
          v-overlay(v-if="hover" absolute color="primary")
            v-btn(:href="item.link") {{ $t("more-info")}}
</template>

<script lang="ts">
import { kebabCase, floor } from "lodash";
import Vue from 'vue';

const CARD_WIDTH = 300
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
  data: () => ({
    CARD_WIDTH
  }),
  methods: {
    kebabCase
  },
  computed: {
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
  background-color: #fffbc5 !important;
  text-align: left;
  overflow: hidden;
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