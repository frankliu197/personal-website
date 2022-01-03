<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in lang" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
import Vue from "vue"
import localeList from "@/assets/json/lang.json"

export default Vue.extend({
  name: "LocaleSelector",
  data: () => ({
    lang: ["en", "es"]
  })
});
/*
<template lang="pug">

.locale-selector
  v-menu(open-on-hover top offset-y)
    template(v-slot:activator='{ on, attrs }')
      v-btn(v-bind='attrs' v-on='on') 
        country-flag(:country="localeList[$i18n.locale]")
        | {{ $i18n.locale }}
    v-list
      v-list-item-group(v-model="$i18n.locale"  mandatory)
        v-list-item(v-for='lang in Object.keys(localeList)' :key='lang' :value="lang")
          v-list-item(:value="lang") 
            country-flag(:country="localeList[lang]") 
            | {{ lang.toUpperCase() }}
 

</template>
*/

</script>

<i18n>
{
  "en": {
    "": "Hello i18n in SFC!"
  },
  "es" : {
    "hello": "probando"
  }
}
</i18n>
