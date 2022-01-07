<template lang="pug">
v-checkbox.dark-theme-toggler.f-btn-icon-bold(v-model='$vuetify.theme.dark' off-icon='mdi-theme-light-dark' on-icon='mdi-theme-light-dark')
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    name:'ThemeToggler',
    props: {
    }
})

</script>

<style lang="scss">
.dark-theme-toggler {
  .v-input__control{
    height: 24px;
  }
  .v-input__control .v-input__slot {
    margin-bottom: 0px;
  }
}
</style>