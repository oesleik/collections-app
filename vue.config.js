module.exports = {
  pwa: {
    name: "Sanity Keeper",
    themeColor: "#EF6C00"
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: "@import \"@/styles/config\";"
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'pt-BR',
      fallbackLocale: 'pt-BR',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
