type WebLang = typeof import('./lang/index/en.json')

declare interface IntlMessages extends WebLang {}
