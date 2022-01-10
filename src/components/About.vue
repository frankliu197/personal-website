<template lang="pug">
.about
  span#about.anchor-tag
  v-container.main.background(fluid)
    p.f-title.text-center {{ $t('title') }}
    v-row.mt-4
      v-col(md=5, offset-md=0, offset=2, cols=8)
        v-img.default(src="@/assets/images/Frank.jpg")
      v-col(offset-md=1, md=6, offset=0, cols=12)
        span.f-main {{ $t('description-main') }}
        .y-spacer
        .y-spacer
        span.f-sub-bold(v-html="$t('description')")
        .y-spacer
        v-btn(download, :href="'/documents/' + $t('resume-file')") {{ $t('resume') }}
          v-icon mdi-download
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "About",
});
</script>

<style lang="scss">


.about {
 .background {
    background-image: url("../assets/images/about.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

}


.theme--dark {
  .about {
    .background {
      background: linear-gradient(
        to bottom,
       rgba(0, 0, 0, 0.5),
        rgba(0,0,0, 0.5)
      ), url("../assets/images/about.jpg");;
    }
  }
}

.theme--light {
  .about {
   .background {
      background: linear-gradient(
        to bottom,
       rgba(256, 256, 256, 0.3),
       rgba(256, 256, 256, 0.3)
      ), url("../assets/images/about.jpg");;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "title": "About Me",
    "description-main": "My name is Frank Liu and I will be graduating Carleton University in April.",
    "description": "I am one of those computer science enthusiasts who codes both as a hobby and as a career. I am fascinated with software algorithms and architecture/design patterns. This includes technologies such as Machine Learning, Operating Systems Design (especially Linux), Container Management and Web Frameworks.<br><br>When I am not programming, you can usually find me exercising, hanging out with other people or playing the piano. I love meeting new people so feel free to contact me and say hello!",
    "resume-file": "Resume.pdf",
    "resume": "Resume"
  },
  "es" : {
    "title": "Sobre Mi",
    "resume-file": "Resume_es.pdf"
  },
  "zh" :{
    "title": "关于我" 
  },
  "ja": {
    "title": "自己紹介"
  }
}
</i18n>
