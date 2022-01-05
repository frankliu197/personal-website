<template lang="pug">
v-menu.locale-selector(open-on-hover bottom offset-y)
  template(v-slot:activator='{ on, attrs }')
    v-btn(text v-bind='attrs' v-on='on') 
      country-flag.flag-margin(:country="localeList[$root.$i18n.locale]")
      .x-spacer
      span.locale-font {{ $root.$i18n.locale }}
  v-list
    v-list-item-group(v-model="$root.$i18n.locale"  mandatory)
      v-list-item(v-for='lang in Object.keys(localeList)' :key='lang' :value="lang")
          country-flag.flag-margin(:country="localeList[lang]") 
          .x-spacer
          span.locale-font {{ lang.toUpperCase() }}
</template>

<script lang="ts">
import Vue from "vue"
import localeList from "@/assets/json/lang.json"

export default Vue.extend({
  name: "LocaleSelector",
  data: () => ({
    localeList
  })
});

</script>

<style scoped>
.locale-font {
  font-size: 0.875rem;
  font-weight: 500;
}

.flag-margin {
  margin-bottom: 1px!important;
}
</style>

