import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    page: "home",
    home: true
  }),
  watch: {
    $route(to, from) {
        debugger
      this.home = (to.name === 'Home')
    }
  },
  render() : any {
      // @ts-expect-error: javascript
      return this.$scopedSlots.default({
          page: this.page,
          home: this.home
      })
  }
});