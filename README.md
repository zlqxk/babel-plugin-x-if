### 将babel-plugin-x-if配置到babelrc下
```js
  {
    "plugins": [
      ["babel-plugin-x-if"],
    ]
  }
```
### 这样你就可以在react中使用x-if模板语法
```js
  <div x-if={true}>
    hello world
  </div>
```
### 他会帮你装换成下面的格式
```js
  true: <div>
    hello world
  </div>? null
```
