<template lang="pug">
.about
  v-container.py-16(
            fluid
            
        )
   
        span.text-lg-h2.text-h3 About Me
        v-row.mt-4
            v-col(
                offset="1"
                sm="3"
                cols="10"
            )
                v-img.default(
                    src="@/assets/images/fred.jpg"
                )
            v-col(
                offset="1"
                sm="6"
                cols="10"
            )
                .text-left
                    span.text-h6 Hello! My name is Fred Liu and I'm a second year computer science student at the University of Waterloo.
                br
                .fade-in-section(
                )
                    .text-left(
                        v-for="(paragraph, i) in paragraphs"
                    )
                        br
                        span.text-body-2.pt-4 {{ paragraph }}
                    .text-left
                        br
                        br
                        a(
                            download
                        )
                            v-btn Resume
                                v-icon mdi-download
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'About',
        data: () => {
            return {
                paragraphs: [
                    `
                    Based on the initial view of the webpage, you may have already noticed that I enjoy traveling and photography.
                    However, despite all the amazing places out there, nothing beats the humble feeling of sitting down, tuning into some music and coding!
                    `,
                    `
                    I'm very passionate about computer science, knowing that the skills I learn in this field can benefit many people.
                    I hope to use my skills to make a positive impact!
                    `,
                    `
                    To learn more, download my resume or browse the tabs below to see what I've been up to!
                    `
                ]
            }
      
}});

</script>

<style scoped>
    .background-image-styles {
        background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(245, 246, 252, 0.7)), url('../assets/images/about.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
        .default {
        transform: translateX(-100%);
    }
    .slide-in-from-left {
        transform: translateX(0%) !important;
        transition: transform 2s ease;
    }
    .fade-in-section.is-visible-delay-2 {
        opacity: 1;
        transition-delay: 2s;
    }
</style>