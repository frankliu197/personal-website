<template lang="pug">
.contact
  v-bottom-sheet(v-model="showSheet" width="auto")
    v-sheet.text-center(height="225px")
      .horizontal-aligner
        v-spacer  
        v-btn.ma-2(icon @click="showSheet = false")
          v-icon(large) mdi-close
      .py-4.px-15(style="margin-top: -44px")
        span.text-h6 I would be glad to hear from you!
        br
        span.text-h6 Contact me using the methods below:
        .horizontal-aligner.py-4(style="gap: 20px")
          v-tooltip(bottom v-for="(contact, index) in contactInfo" :key="index")
            template(v-slot:activator="{ on, attrs }")
              a.vertical-aligner.black--text(v-on="on" v-bind="attrs" :href="contact.link" target="_blank")
                span.pb-2 {{ contact.type.toUpperCase() }}
                v-btn.background-white(icon)
                  v-icon(size="50px" color="#191d20e8") {{ contact.icon }}
            span {{ contact.info }}
</template>

<script lang="ts">
import contactInfo from "@/assets/json/Contact.json"
import emitter from "@/services/emitter"
import Vue from 'vue';
export default Vue.extend({
  name: 'Contact',
  components: {
  },
  data: () => ({
    contactInfo,
    showSheet: false
  }),
  created(){
    emitter.on('toggleContact', ()=>{ this.showSheet = !this.showSheet })
  }
});



</script>

<style>

</style>