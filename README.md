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
<table>
    <thead>
        <th width="100">Name</th>
        <th>Binding Value</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>v-at-sign</td>
            <td>as an object ```{style: {}, returnType: {tag: 'a', attr: {href: 'http://something.com/', title: 'nice'}}}```</td>
            <td>You can design any of the words in the paragraph that starts with @sign.</td>
        </tr>
    </tbody>

</table>


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
