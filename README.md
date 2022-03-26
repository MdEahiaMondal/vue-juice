# vue-utilities
Vue Juice is a beautiful user friendly package made up of a combination of very useful small directive, filters and other useful functions that will make your development faster and more easier
# How To Use
At the beginning of installation I would like to inform you that this package is for ``vue 2``.

 ## First you need to install this packege using ```npm``` or ```yarn``` 

```
npm i vue-juice
```
or 
```
yarn add vue-juice
```
## Finaly ou need to use this package in you app directory

```
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import vueJuice from 'vue-juice'
Vue.use(vueJuice)

new Vue({
  render: h => h(App),
}).$mount('#app')
```
## use case

### As a **directives** 
| Name | Binding Type | Value | Description |
|------|--------------|-------|-------------|
| v-at-sign, v-hash-sign | `object` | `style: {},returnType: {tag: 'a', href: 'http://example.com'}`| You can design any of the words in the paragraph that starts with `@sign` or `#sign`. |
| v-linkup | `object` |  `style: {color: "green",},target: true` | If there is a link in the paragraph, you can use it to style.|
| v-see-more | `object` | `limit: 10,style: {}, classList: ["your-custom-class"]` | You can use it if your paragraph-the is too long and you want to add `see more` and `see less` btn that's time you can use it.|
| v-focus |  | | You can use it to focus your input field.|
| v-pin | object | `style: {position: "fixed",right: "300px",top: "0px"}` | if you want to fixed or sticky any section that's time you can use it |
### Customize configuration
See [Configuration Reference](https://github.com/MdEahiaMondal/vue-juice).
