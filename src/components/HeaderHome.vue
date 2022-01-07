<template lang="pug">
.header-home.header(ref="container", v-resize="onResize")
  v-app-bar(
    :height="HEADER_HEIGHT",
    fixed,
    v-scroll="onScroll",
    :class="navBarClass()",
    :elevation="scrollTop == 0 ? 0 : 12"
  )
    v-btn.secondary--text(text, @click="scrollToTop")
      v-app-bar-title Frank Liu
    v-toolbar-items
      template(v-if="!collapseNavBar")
        template(v-for="item of menuItems")
          v-btn(
            text,
            :href="'#' + item.title.toLowerCase()",
            :class="navBtnClass(item)"
          ) {{ $t(item.title) }}
        v-btn(text, @click="emitter.emit('toggleContact')") {{ $t('contact') }}
    v-spacer
    v-toolbar-items
      DarkThemeToggler
      LocaleSelector
      template(v-if="collapseNavBar")
        v-divider(vertical)
        v-app-bar-nav-icon(@click="showNavDrawer = true")
  v-navigation-drawer(
    app,
    temporary,
    right,
    v-model="showNavDrawer",
    v-bind="navDrawDimensions",
    v-resize="() => {showNavDrawer = collapseNavBar && showNavDrawer}"
  )
    v-list
      v-list-item
        v-list-item-title.text-h6 {{ $t('Menu') }}
    v-divider
    v-list
      template(v-for="item of menuItems")
        v-list-item
          v-btn(
            text,
            :href="'#' + item.title.toLowerCase()",
            :class="navBtnClass(item)"
          ) {{ $t(item.title) }}
      v-list-item
        v-btn(text, @click="emitter.emit('toggleContact')") {{ $t('Contact') }}
</template>


<script lang="ts">
import Vue from "vue";
const MIN_NAVDRAW_WIDTH = 300;
const COLLAPSE_NAV_BAR_WIDTH = 600;
const HEADER_HEIGHT = 56;
import DarkThemeToggler from "@/components/DarkThemeToggler.vue";
import LocaleSelector from "@/components/LocaleSelector.vue";
import emitter from "@/services/emitter";
export default Vue.extend({
  name: "HeaderHome",
  components: {
    LocaleSelector,
    DarkThemeToggler,
  },
  props: {
    menuItems: Array as () => any[],
  },
  data: function () {
    return {
      width: 0,
      showNavDrawer: false,
      emitter,
      scrollTop: 0,
      HEADER_HEIGHT,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    onScroll() {
      this.scrollTop = document.documentElement.scrollTop;
    },
    onResize() {
      this.width = (this.$refs.container as HTMLDivElement).clientWidth;
    },
    navBtnClass(item: any): string {
      if (
        this.scrollTop >= item.top - HEADER_HEIGHT &&
        this.scrollTop < item.top + item.height - HEADER_HEIGHT
      ) {
        return "active";
      }
      return "";
    },
    navBarClass(): string {
      if (this.scrollTop < this.menuItems[0].top - HEADER_HEIGHT) {
        return "transparent";
      } else {
        return "";
      }
    },
  },
  computed: {
    navDrawDimensions(): any {
      return {
        width:
          this.width / 3 > MIN_NAVDRAW_WIDTH ? this.width : MIN_NAVDRAW_WIDTH,
      };
    },
    collapseNavBar(): boolean {
      return this.width < COLLAPSE_NAV_BAR_WIDTH;
    },
  },
  watch: {
    /*
    $route(to, from) {
      this.home = to.name === 'Home'
    }*/
  },
  mounted() {
    this.onScroll();
  },
});
</script>

<style lang="scss">
.header-home {
  .active::before {
    opacity: 0.24 !important;
  }

  .v-list-item .v-btn {
    width: 100%;
  }

  .v-list-item .v-list-item__title {
    text-align: center;
  }

  .transparent {
    color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
  }

  .v-toolbar__items {
    align-items: center;
  }

}
</style>

<i18n>
{
  "en": {
    "about": "About",
    "portfolio": "Portfolio",
    "contact": "Contact",
    "menu": "Menu"
  },
  "es" : {
    "about": "Detalles",
    "portfolio": "Portafolio",
    "contact": "Contactar",
    "menu": "Menú"
  },
  "ja" : {
    "about": "詳細",
    "portfolio": "ポートフォリオ",
    "contact": "連絡",
    "menu": "メニュー"
  },
  "zh" : {
    "about": "详细",
    "portfolio": "作品集",
    "contact": "联系",
    "menu": "菜单"
  }
}
</i18n>