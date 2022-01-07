import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

import zhHans from 'vuetify/src/locale/zh-Hans'
import es from 'vuetify/src/locale/es'


export default new Vuetify({
    lang: {
    },
    theme: {
        options: {
            customProperties: true
        },
        themes: {

        }
    }
});