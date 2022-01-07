<template lang="pug">
.carousel 
  v-img.fullscreen(src="@/assets/images/carousel.jpg")
    .text-overlay
      div(style="height: 20vh")
      .inline-text
        template(v-for="(letter, index) in FIRST_NAME")
          span.website-title.slide-in-from-left(:style="firstName(index)") {{ letter }}
        .f-spacer
        template(v-for="(letter, index) in LAST_NAME")
          span.website-title.slide-in-from-left(:style="firstName(index)") {{ letter }}
      div(style="height: 5vh")
      .inline-text
        span.website-subtitle.fade-in {{ $t('more') }}
      div(style="height: 2vh")
      .inline-text
        v-btn.fade-in.title-button(icon, rounded, href="#about")
          v-icon mdi-arrow-down
</template>

<script lang="ts">
import Vue from "vue";
const FIRST_NAME = "Frank";
const LAST_NAME = "Liu";
export default Vue.extend({
  name: "Carousel",
  components: {},
  data: () => ({
    FIRST_NAME,
    LAST_NAME,
  }),
  methods: {
    firstName(index: number): any {
      return {
        "animation-delay": index * 0.2 + 0.8 + "s",
      };
    },
    lastName(index: number): any {
      return {
        "animation-delay": (index + FIRST_NAME.length) * 0.2 + 0.8 + "s",
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.text-overlay {
  top: 25%;
  height: 75%;
  width: 100%;
  position: absolute;
  background: linear-gradient(
    to bottom,
    rgba(245, 246, 252, 0),
    rgba(255, 144, 53, 0.8)
  );
}



.inline-text {
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
}

.title-button {
  height: 100px;
  width: 100px;

  .v-icon {
    color: var(--v-secondary-base);
    font-size: 100px;
  }
}

.website-title {
  color: var(--v-secondary-base);
  font-weight: 450;
  font-style: italic;
  transform: translateX(100vw);
  font-size: 13vh;

  @media only screen and (max-width: 900px) {
    font-size: 3.75em;
  }
}

.f-spacer {
  width: calc(2em - 12px);
  display: inline-block;
}

.website-subtitle {
  color: var(--v-secondary-base);
  font-size: 1.25rem !important;
  font-weight: 500;
  letter-spacing: 0.0125em !important;
  //alias .text-h6
}

.fade-in {
  animation-delay: 3.5s;
}
</style>

<i18n>
{
  "en": {
    "more": "More About Me Below"
  }
}
</i18n>
