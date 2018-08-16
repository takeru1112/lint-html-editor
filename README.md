# lint-html-editor

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
## テンプレートの編集

### パーツリストの更新
`src/consts/partsList.ts` 内の `PARTS_LIST` の内容を編集。
フォーマットは以下。

```ts
{
    "[パーツカテゴリ]": {
        "[パーツ名]": `[HTML]`
    },
}
```

### HTML表示部分の編集
`public/preview.html` を編集。

```html
<div id="app"></div>
```
に編集したものが入るので挿入したい箇所に設置する。
