# vue-starry-sky

### 包下载&引用

在 vue 项目中使用 npm 安装

```
npm install vue-starry-sky
```

### 文件地址

下面是项目地址：

- git 地址：[vue-starry-sky](https://github.com/ZERO-DG/vue-starry-sky.git)
- npm 地址：[vue-starry-sky](https://www.npmjs.com/package/vue-starry-sky)

### 使用方法

在 vue 项目中 src/main.js 中加入下列语句

```
//main.js
import VueStarrySky from "vue-starry-sky"
import "vue-starry-sky/lib/vue-starry-sky.css"

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

### 原生 JS 写法

博客园可以用这类方法写入或者在设置中

```
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>星星特效html版本</title>
    <style>
        body {
            background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #75517d, #1b2947);
            background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
            background-attachment: fixed;
        }

        @keyframes rotate {
            0% {
                transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
            }

            100% {
                transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
            }
        }

        #stars {
            transform: perspective(500px);
            transform-style: preserve-3d;
            position: fixed;
            perspective-origin: 50% 100%;
            left: 50%;
            animation: rotate 66s infinite linear;
            bottom: 0;
            z-index: -99;
        }

        .star {
            width: 2px;
            height: 2px;
            background: #f7f7b8;
            position: fixed;
            top: 0px;
            left: 0;
            backface-visibility: hidden;
        }
    </style>
</head>

<body>
    <!-- 星星特效 -->
    <div id="stars">
    </div>

    <script>
        (function () {
            let starsCount = 800; //星星数量
            let distance = 800;//间距
            let parentStarts = document.getElementById("stars");
            for (let i = 0; i < starsCount; i++) {
                let childStart = document.createElement("div");
                childStart.setAttribute("class", 'star');
                parentStarts.appendChild(childStart);
            }
            for (let i = 0; i < starsCount; i++) {
                let item = parentStarts.children[i];
                let speed = 0.2 + (Math.random() * 1);
                let thisDistance = distance + (Math.random() * 300);
                console.log(parentStarts);
                item.style.transformOrigin = "0 0 " + thisDistance + "px";
                item.style.transform = "translate3d(0,0,-" + thisDistance + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + speed + "," + speed + ")";
            }
        })();
    </script>
</body>

</html>

```

### 参照の大佬

bilibili up 主 [欧贵姥爷啊](https://www.bilibili.com/video/BV1EJ411e7sr) 等待授权

#### 备注:

基于 vue 的一个星空特效插件
待更新...
