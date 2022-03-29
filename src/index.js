import { atSign, hashSign, linkup, seeMore, focus, fontSize, color, pin } from './plugins/directive.js'
import * as filters from './plugins/filters'
const juice = {
    install(Vue) {
        Vue.directive('atSign', atSign);
        Vue.directive('hashSign', hashSign);
        Vue.directive('linkup', linkup);
        Vue.directive('seeMore', seeMore);
        Vue.directive('focus', focus);
        Vue.directive('fontSize', fontSize);
        Vue.directive('color', color);
        Vue.directive('pin', pin);

        Object.keys(filters).forEach((key) => {
            Vue.filter(key, filters[key]);
        });

    }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(juice);
}

export default juice;