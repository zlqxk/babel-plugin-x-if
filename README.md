### 将 babel-plugin-x-if 配置到 babelrc 下

```js
  {
    "plugins": [
      ["babel-plugin-x-if"],
    ]
  }
```

### 这样你就可以在 react 中使用 x-if 模板语法

```js
<div x-if={true}>hello world</div>
```

### 他会帮你装换成下面的格式

```js
  true: <div>
    hello world
  </div>? null
```

## TDDO

1、自动忽略 ts 报错
