import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

import zhHans from 'vuetify/src/locale/zh-Hans'
import es from 'vuetify/src/locale/es'


export default new Vuetify({
    lang: {
        locales: {es},
        current: 'es'
    },
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                testdf: "#101012", //make your own variable access using --v-testdb-base or -lighten1-5/darken1-5
                primary: colors.blue.darken1,
                secondary: colors.yellow.lighten5,
                accent: colors.deepOrange.base
            }
        }
    }
});