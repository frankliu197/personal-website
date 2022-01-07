<template lang="pug">
.about
  span#about.anchor-tag
  v-container.main.background(fluid)
    p.f-title.text-center {{ $t('title') }}
    v-row.mt-4
      v-col(sm=5, offset-sm=0, offset=2, cols=8)
        v-img.default(src="@/assets/images/Frank.jpg")
      v-col(offset-sm=1, sm=6, offset=0, cols=12)
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

<style lang="scss" scoped>
.background-image-styles {
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0),
      rgba(245, 246, 252, 0.7)
    ),
    url("../assets/images/about.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.about {
 .background {
    background-image: linear-gradient(
        to bottom,
        rgba(245, 246, 252, 0),
        rgba(245, 246, 252, 0.7)
      ),
      url("../assets/images/about.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
</style>

<i18n>
{
  "en": {
    "title": "About Me",
    "description-main": "My name is Frank Liu and I am a fifth year student at Carleton University.",
    "description": "I am a one of those computer science enthusiasts who codes both as a hobby and as a career. In my own time, I typically enjoy learning programming technologies and re-coding various programs to make them run faster. After all, one of my dreams is to build a supercomputer! <br><br> Unlike most programmers, I am a very social person. I enjoy working in a group environment and sharing my knowledge. This is one of the main reasons I have started a Linux Tutorial blog.<br><br>To learn more, download my resume, or browse my portfolio!",
    "resume-file": "Resume.pdf",
    "resume": "Resume"
  },
  "es" : {
    "title": "Sobre mi",
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
