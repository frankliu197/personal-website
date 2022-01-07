<template lang="pug">
.carousel 
  v-img.fullscreen(src="@/assets/images/carousel.jpg")
    .menu-overlay
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

<style lang="scss">
.carousel {
  .text-overlay {
    top: 25%;
    height: 75%;
    width: 100%;
    position: absolute;
  }

  .menu-overlay {
    top: 0%;
    height: 25%;
    width: 100%;
    position: absolute;
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
      font-size: 100px;
    }
  }

  .website-subtitle {
    font-size: 1.25rem !important;
    font-weight: 500;
    letter-spacing: 0.0125em !important;
    //alias .text-h6
  }

  .f-spacer {
    width: calc(2em - 12px);
    display: inline-block;
  }

  .fade-in {
    animation-delay: 3.5s;
  }

  .website-title {
    font-weight: 450;
    font-style: italic;
    transform: translateX(100vw);
    font-size: 13vh;

    @media only screen and (max-width: 900px) {
      font-size: 3.75em;
    }
  }
}

.theme--light {
  .carousel {
    .website-title,
    .website-subtitle,
    .title-button .v-icon {
      color: #fffde7;
    }

    .menu-overlay {
      background: linear-gradient(
        to bottom,
        rgba(256, 256, 256, 0.6),
        rgba(256, 256, 256, 0.1)
      );
    }

    .text-overlay {
      background: linear-gradient(
        to bottom,
        rgba(256, 256, 256, 0.1),
        rgba(255, 144, 53, 0.8)
      );
    }

    .v-image__image {
      filter: brightness(0.5);
    }
  }
}

.theme--dark {
  .carousel {
    .v-image__image {
      filter: brightness(0.5);
    }

    
    .menu-overlay {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.6),
        rgba(256, 256, 256, 0.1)
      );
    }

    .text-overlay {
      background: linear-gradient(
        to bottom,
        rgba(256, 256, 256, 0.1),
        rgba(255, 144, 53, 0.8)
      );
    }
  }
}
</style>

<i18n>
{
  "en": {
    "more": "More About Me Below"
  },
  "es": {
    "more": "Mas Sobre Mi Abajo"
  }, 
  "ja": {
    "more": "私について"
  },
  "zh": {
    "more": "更多关于我"
  }
}
</i18n>
