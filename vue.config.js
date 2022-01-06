module.exports = {
    transpileDependencies: [
        'vuetify'
    ],

    pluginOptions: {
        i18n: {
            locale: 'es',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true,
            includeLocales: false,
            enableBridge: true
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Frank Liu";
                return args;
            })
    }
}