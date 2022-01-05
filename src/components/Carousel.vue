<template lang="pug">
.carousel
  v-img.fullscreen(src="@/assets/images/carousel.jpg")
    .carousel-item-overlay
            .first-filler
            .inline-text
                span.text-h2.text-sm.h1.website-title F
                span.text-h2.text-sm.h1.website-title(
                    :style="{transform: 'translateX(' + String(windowWidth) + 'px)', fontSize: windowWidth > 960 ? '13vh !important':'3.75rem !important'}"
                ) R
                span.text-h2.text-sm.h1.website-title(
                    :style="{transform: 'translateX(' + String(windowWidth) + 'px)', fontSize: windowWidth > 960 ? '13vh !important':'3.75rem !important'}"
                ) E
                span.text-h2.text-sm.h1.website-title(
                    :style="{transform: 'translateX(' + String(windowWidth) + 'px)', fontSize: windowWidth > 960 ? '13vh !important':'3.75rem !important'}"
                ) D
                span.px-4
                span.text-h2.text-sm.h1.website-title(
                    :style="{transform: 'translateX(' + String(windowWidth) + 'px)', fontSize: windowWidth > 960 ? '13vh !important':'3.75rem !important'}"
                ) L
                span.text-h2.text-sm.h1.website-title(
                    :style="{transform: 'translateX(' + String(windowWidth) + 'px)', fontSize: windowWidth > 960 ? '13vh !important':'3.75rem !important'}"
                ) I
                span.text-h2.text-sm.h1.website-title(
                    :style="{transform: 'translateX(' + String(windowWidth) + 'px)', fontSize: windowWidth > 960 ? '13vh !important':'3.75rem !important'}"
                ) U
            .second-filler
            span.text-lg-h3.text-md-h4.text-sm-h5.text-h6.website-subtitle.fade-in-section More about me below
            .third-filler
            v-icon.icon-styles.fade-in-section(color="white") mdi-arrow-down

</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Carousel',
  components: {
  },
  data: () => ({
    windowWidth: document.body.clientWidth
  }),
        methods: {
            determineWidth: function() {
                if (this.windowWidth > 960) {
                    return '50%'
                } else if (this.windowWidth > 600) {
                    return '60%'
                } else {
                    return '80%'
                } 
            }
        },
        mounted() {
            let websiteSubtitles = document.querySelectorAll('.fade-in-section')
            websiteSubtitles[0].className += ' is-visible-delay-2'
            websiteSubtitles[1].className += ' is-visible-delay-3'
            setTimeout(()=>{
                let websiteTitles = document.querySelectorAll('.website-title')
                websiteTitles[0].className += ' normal-position-1'
                websiteTitles[1].className += ' normal-position-2'
                websiteTitles[2].className += ' normal-position-3'
                websiteTitles[3].className += ' normal-position-4'
                websiteTitles[4].className += ' normal-position-5'
                websiteTitles[5].className += ' normal-position-6'
                websiteTitles[6].className += ' normal-position-7'
            }, 1)
            
        }

});



</script>

<style>
 .carousel-item-overlay {
        top: 25%;
        height: 75%;
        width: 100%;
        position: absolute;
        background: linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(255, 144, 53, 0.8));
    }
    .first-filler {
        height: 20vh;
    }
    .second-filler {
        height: 5vh;
    }
    .third-filler {
        height: 2vh;
    }
    .icon-styles {
        font-size: 100px;
    }
    .inline-text {
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
    }
    .website-title {
        color: var(--v-secondary-base);
        font-weight: bolder;
        font-style: italic;
        transform: translateX(100vw);
    }
    .normal-position-1 {
        transform: translateX(0%) !important;
        transition: transform 1s ease-in;
    }
    .normal-position-2 {
        transform: translateX(0%) !important;
        transition: transform 1.25s ease-in;
    }
    .normal-position-3 {
        transform: translateX(0%) !important;
        transition: transform 1.5s ease-in;
    }
    .normal-position-4 {
        transform: translateX(0%) !important;
        transition: transform 1.75s ease-in;
    }
    .normal-position-5 {
        transform: translateX(0%) !important;
        transition: transform 2.25s ease-in;
    }
    .normal-position-6 {
        transform: translateX(0%) !important;
        transition: transform 2.5s ease-in;
    }
    .normal-position-7 {
        transform: translateX(0%) !important;
        transition: transform 2.75s ease-in;
    }
    .website-subtitle {
        color: var(--v-secondary-base);
    }
    .fade-in-section.is-visible-delay-2 {
        opacity: 1;
        transition-delay: 3s;
    }
    .fade-in-section.is-visible-delay-3 {
        opacity: 1;
        transition-delay: 4s;
    }
    
    .v-window__prev,.v-window__next {
        background: transparent !important;
    }
    .v-window__prev .v-btn,.v-window__next .v-btn {
        height: 52px !important;
        width: 54px !important;
    }
    .v-window__prev .v-btn::before,.v-window__next .v-btn::before {
        background: var(--v-accent-base) !important;
    }
    .v-window__prev .v-btn:hover:before,.v-window__next .v-btn:hover:before {
        opacity: 1 !important;
    }
    .v-window__prev .v-btn .v-icon,.v-window__next .v-btn .v-icon {
        font-size: 48px !important;
    }
</style>