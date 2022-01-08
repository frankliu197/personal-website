<template lang="pug">
v-app
  //<v-theme-provider root> possible required
  Header(v-if="$route.meta.defaultHeader")
  v-main
    router-view
  Contact
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import Vue from "vue";
import Contact from "@/components/Contact.vue";
export default Vue.extend({
  name: "App",
  components: {
    Contact,
    Header,
  },
  data: () => ({
    showContactSheet: false,
  }),
});
</script>

<style lang='scss'>
.container.main {


  //alias for .py-16.px-10 and applies to all v-container.main
  //used as a padding for main container
  padding-right: 40px !important;
  padding-left: 40px !important;
  padding-top: 64px !important;
  padding-bottom: 64px !important;
}

.container.main.slim {
  @media only screen and (max-width: 650px) {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
}
.f-title {
  //.test-h3
  font-size: 3rem !important;
  font-weight: 400;
  line-height: 3.125rem;
  letter-spacing: normal !important;
  font-family: "Roboto", sans-serif !important;
}

.f-title-small {
  //.text-h6
  font-size: 1.25rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: "Roboto", sans-serif !important;
}
.f-sub {
  //alias for .text-body-2
  // used for all subtitles in cards
  font-size: 0.875rem !important;
  font-weight: 400 !important;
  line-height: 1.25rem !important;
  letter-spacing: 0.0178571429em !important;
  font-family: "Roboto", sans-serif !important;
}

.f-sub-bold {
  //alias for .text-body-2
  // used for all subtitles in cards
  font-size: 0.875rem !important;
  font-weight: 400 !important;
  line-height: 1.25rem !important;
  letter-spacing: 0.0178571429em !important;
  font-family: "Roboto", sans-serif !important;
}

.f-main {
  //alias for .text-h6
  font-size: 1.25rem !important;
  font-weight: 500 !important;
  line-height: 2rem !important;
  letter-spacing: 0.0125em !important;
  font-family: "Roboto", sans-serif !important;
}
.theme--dark .f-sub-bold {
  color: #FFFFFF;
}

.theme--light {
  .f-main,
  .f-sub-bold,
  .f-title-small,
  .f-title {
    color: rgba(0, 0, 0, 0.87) !important;
  }

  .f-sub {
    color: rgba(0, 0, 0, 0.6) !important;
  }

  .website-title,
  .website-subtitle {
    color: #fffde7;
  }
  
  .f-btn-icon-bold .v-icon {
    color: #191d20e8 !important;
  }
}

.v-card.text-center .v-card__title {
  //allows you to have v-card text center with v-card.text-center
  //and the default
  //v-card.text-left
  justify-content: center;
}

.v-card__title {
  word-break: normal !important;
}
.header header {
  z-index: 100 !important;
}
</style>
