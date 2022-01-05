<template lang="pug">
.footer
  v-footer(v-if="route === 'Home'" padless)
    v-container(fluid)
      .horizontal-aligner
        v-btn(x-large @click="toggleContact") {{ $t("contact-me") }}
  template(v-if="route === 'Piano'")
  v-footer(v-else)
  
</template>

<script lang="ts">
import Vue from 'vue';
import emitter from "@/services/emitter"
export default Vue.extend({
  name: 'Footer',
  data: function() {
    return {
      route: this.$router.currentRoute.name
    }
  },
  methods: {
    toggleContact(){
      emitter.emit('toggleContact');
    }
  },
  watch: {
    $route(to, from) {
      this.route = to.name 
    }
  }
});
</script>

<style lang="scss">
.v-card {
  width: 100%;
  text-align: center;
}


</style>

<i18n>
{
  "en": {
    "contact-me": "Contact Me"
  },
  "es" : {
    "contact-me": "Contáctame"
  },
  "ja" : {
    "contact-me": "連絡"
  },
  "zh" : {
    "contact-me": "联系我"
  }
}
</i18n>