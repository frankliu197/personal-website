<template lang="pug">
.carousel 
  v-img.fullscreen(src="@/assets/images/carousel.jpg")
    .menu-overlay(style="height: 25vh")
    .text-overlay(style="height: 75vh")
      div.title-padding
      .inline-text
        template(v-for="(letter, index) in FIRST_NAME")
          span.website-title.slide-in-from-left(:style="firstName(index)") {{ letter }}
        .f-spacer
        template(v-for="(letter, index) in LAST_NAME")
          span.website-title.slide-in-from-left(:style="firstName(index)") {{ letter }}
      div.subtitle-padding
      .inline-text
        span.website-subtitle.fade-in {{ $t('more') }}
      div(style="height: 2vh")
      .inline-text(style="height: 10vh")
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
    width: 100%;
    position: absolute;
  }

  
  .title-padding {
    height: 20vh;
  }

  .menu-overlay {
    top: 0%;
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
    height: 15vh;
    width: 15vh;

    .v-icon {
      font-size: 15vh;
    }
  }

  .subtitle-padding {
    height: 5vh;
  }
  
  .website-subtitle {
    font-size: 4vh;
    font-weight: 500;
    letter-spacing: 0.0125em !important;
    text-align: center;
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
  }


  
  @media screen and (max-height: 400px) {
    .website-subtitle {
      font-size: 1rem;
    }

    .website-title {      
      font-size: 2.75rem;
    }

    .title-button {
      height: 50px;
      width: 50px;

      .v-icon {
        font-size: 50px;
      }
    }

    
    .subtitle-padding {
      height: 0vh;
    }
  }

  @media screen and (max-height: 300px) { 
    .title-padding {
      height: 8vh !important;
    }
  }

  
  @media screen and (min-height: 300px) and (max-height: 400px) { 
    .title-padding {
      height: 15vh !important;
    }
  }

  @media screen and (max-width: 600px) and (min-height: 400px) {
    .website-title {      
      font-size: 3.25em;
    }

    .website-subtitle {
      font-size: 1rem !important;
    }

    .title-padding {
      height: 30vh;
    }

    .title-button {
      height: 50px;
      width: 50px;

      .v-icon {
        font-size: 50px;
      }
    }
  }

  @media screen and  (max-width: 600px) and (min-height: 550px) { 
    .title-padding {
      height: 30vh !important;
    }
  }

  @media screen and  (max-width: 600px) and (max-height: 550px) and (min-height: 400px) { 
    .title-padding {
      height: 15vh !important;
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
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.1)
      );
    }

    .text-overlay {
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.1),
        rgba(20, 80, 99, 0.8)
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
        rgba(255, 255, 255, 0.1)
      );
    }

    .text-overlay {
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.1),
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
    "more": "私のついて"
  },
  "zh": {
    "more": "更多关于我"
  }
}
</i18n>
