# my_vueproject01

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
### components:中文名组件，是component的复数形式
```bash
# 使用方法
1. 引入子组件
  import Search from "./components/Search";
  import Main from "./components/Main";
2. 注册组件
  components:{
            Search,
            UsersMain:Main
        }
3. 使用组件
  <div class="container">
    <search/>
    <users-main/>
  </div>
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
