## Vuex版的斗鱼 (vuex-douyu)

使用技术栈： webpack + vuejs+ vuex + axios + vue-router	

## 更改使用本地Proxy代理，解决跨域问题	> A Vue.js project

```js	
proxyTable: {	
  '/api': {	
    target: 'http://open.douyucdn.cn/api/RoomApi',	
    changeOrigin: true,	
    pathRewrite: {	
      '^/api': ''	
    }	
  },	
  '/category': {	
    target: 'https://m.douyu.com/category',	
    changeOrigin: true,	
    pathRewrite: {	
      '^/category': ''	
    }	
  }	
}	
```	

## 动图演示	
![demo-1](https://github.com/axhello/vuex-douyu/blob/master/screenshot/demo-1.gif)	
![demo-2](https://github.com/axhello/vuex-douyu/blob/master/screenshot/demo-2.gif)	

## 本地运行	

 ``` bash
# install dependencies	# install dependencies
npm install or yarn install	npm install
 # serve with hot reload at localhost:8080	# serve with hot reload at localhost:8080
npm run dev or yarn run dev	npm run dev
 # build for production with minification
npm run build
 # build for production and view the bundle analyzer report
npm run build --report
```