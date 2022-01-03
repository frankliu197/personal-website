<template lang="pug">
.footer
  v-footer(padless)
    v-card.indigo(flat tile min-height="150px")
      v-card-text
        v-btn(x-large @click="toggleContact") {{ $t("contact-me") }}
</template>

<script lang="ts">
import Vue from 'vue';
import emitter from "@/services/emitter"
export default Vue.extend({
  name: 'Footer',
  data: () => ({
  }),
  methods: {
    toggleContact(){
      emitter.emit('toggleContact');
    }
  }
});
</script>

<style lang="scss">
.v-card {
  width: 100%;
  text-align: center;
}

@media screen and (max-height: 700px) {
  .v-footer {
    height: 150px;
  }
}
</style>

<i18n>
{
  "en": {
    "contact-me": "Contact Me"
  },
  "es" : {
    "contact-me": "Contáctame"
  }
}
</i18n>