<template lang="pug">
.home
  v-container(fluid)
    v-carousel(v-model='model' :height="'calc(90vh - 56px)'")
      v-carousel-item(v-for='elem in elements' :key='elem')
        v-card(tile height="100%")
          v-card-title Broken Clown
          v-card-subtitle First transcription
          v-btn(download href="/music/Broken Clown.mp3") listen
       
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'Piano',
    data: () => ({
      model: 0,
      elements: [
        "test"
      ],
    }),
  })
</script>
