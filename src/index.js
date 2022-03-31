import * as directives from './plugins/directive.js'
import * as filters from './plugins/filters'
const juice = {
    install(Vue) {
        Object.keys(directives).forEach((key) => {
            Vue.directive(key, directives[key]);
        });

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