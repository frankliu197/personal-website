<template lang="pug">
.home(v-resize="onResize")
  HeaderHome(:menuItems="menuItems")
  Carousel
  About(ref="about")
  Portfolio(ref="portfolio" @onTabChange="onResize")
  Footer
</template>

<script lang="ts">
  import Vue from 'vue'
  import About from '@/components/About.vue'
  import Carousel from '@/components/Carousel.vue'
  import Portfolio from "@/components/Portfolio.vue"
  import HeaderHome from "@/components/HeaderHome.vue"
  import Footer from "@/components/Footer.vue"
  const MENU_ITEMS = ["about", "portfolio"]
  export default Vue.extend({
    name: 'Home',
    components: {
      About,
      Carousel,
      Portfolio,
      HeaderHome,
      Footer
    },
    data: ()=>({
      menuItems: [] as any
    }),
    methods: {
      onResize(){
        for (const [k, v] of MENU_ITEMS.entries()) {
          // @ts-expect-error: test
          this.menuItems[k].height = this.$refs[v].$el.offsetHeight
          
          // @ts-expect-error: test
          this.menuItems[k].top = this.$refs[v].$el.offsetTop
        }
      }
    },
    created() {
      for (const i of MENU_ITEMS) {
        this.menuItems.push({title: i})
      }
    }
  })
</script>
