# vue-starry-sky

## 包下载&应用

在 vue 项目中使用 npm 安装

```
npm install vue-starry-sky
```

### 使用方法

在 vue 项目中 src/main.js 中加入下列语句

```
//main.js
import VueStarrySky from "../packages/index"

Vue.use(VueStarrySky);

```

在 vue 页面中使用

```
<vue-starry-sky></vue-starry-sky>
//或者
<vue-starry-sky :stars-count="800" :distance="800"></vue-starry-sky>
```

- 参数说明
  - stars-count 类型：{Number,String} 星星的数量控制，默认是 800
  - distance 类型：{Number,String} 星星的间距控制，默认是 800

### 备注

基于 vue 的一个星空特效插件
待更新...
