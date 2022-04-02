import * as directives from './plugins/directive.js'
import * as filters from './plugins/filters'

import { strLimit, reverse, capitalize, uncapitalize, kebabCase, snakeCase, swapCase, titleCase, camelCase, uppercase, chars, words, stripTags } from './plugins/filters'
const juice = {
    install(Vue) {
        Object.keys(directives).forEach((key) => {
            Vue.directive(key, directives[key]);
        });

        Object.keys(filters).forEach((key) => {
            Vue.filter(key, filters[key]);
        });
        Vue.prototype.$strLimit = strLimit
        Vue.prototype.$reverse = reverse
        Vue.prototype.$capitalize = capitalize
        Vue.prototype.$uncapitalize = uncapitalize
        Vue.prototype.$kebabCase = kebabCase
        Vue.prototype.$snakeCase = snakeCase
        Vue.prototype.$swapCase = swapCase
        Vue.prototype.$titleCase = titleCase
        Vue.prototype.$camelCase = camelCase
        Vue.prototype.$uppercase = uppercase
        Vue.prototype.$chars = chars
        Vue.prototype.$words = words
        Vue.prototype.$stripTags = stripTags

    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(juice);
}

export default juice;