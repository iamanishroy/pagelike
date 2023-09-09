<!-- ![Logo](https://raw.githubusercontent.com/iamanishroy/pagelike/main/assets/logo-small.png) -->

# PageLike

An opensource Web widget that allows you to quickly and easily add a like button to your very liked website.

<!-- ## Demo -->

![Example](https://user-images.githubusercontent.com/62830866/203528800-23ba7697-3ad8-4a2f-88c7-990d6b3fe673.png)

## Plugin Reference

Simply include the JavaScript **`<script>`** tag and CSS **`<link>`** tag in the **`<head>`** tag to seamlessly integrate this into your website.

### Script Tag

```html
<script
  defer
  src="https://unpkg.com/pagelike-plugin@1.2.91/dist/js/index.js"
></script>
```

#### Custom Attributes

| Attribute                 | Default | Value                        | Description                                                                                                   |
| :------------------------ | :------ | :--------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `data-pl-custom`          | `true`  | `true`                       | enables using custom attributes                                                                               |
| `data-pl-button-location` | `TR`    | `TL` \| `TR` \| `BL` \| `BR` | defines the location of the button                                                                            |
| `data-pl-z-index`         | `1`     | `Number`                     | defines custom z-index for button                                                                             |
| `data-pl-level`           | `path`  | `path` \| `host`             | `host`: every page within that domain will have same counter; `path`: every page will have a separate counter |

### Link Tag

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/pagelike-plugin@1.2.91/dist/css/styles.css"
/>
```

That's all!! You are now ready to start receiving likes on your page.

<!-- ## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here) -->

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributing

Contributions are always welcome!

Please adhere to this project's `code of conduct`.

## Roadmap

- Add route level like button ✅
- Additional customization support
- Add react plugin
