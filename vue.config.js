module.exports = {
    transpileDependencies: [
        'vuetify'
    ],

    publicPath: process.env.NODE_ENV === "production" ? "/personal-website/" : "/",

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