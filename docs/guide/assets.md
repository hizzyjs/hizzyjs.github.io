# Static Asset Handling

Static files are files that aren't included in the builds or source folder. Static files let you link your folder with a
path in your application. For example to link the `assets/` folder in your project folder to the path `/myAssets` you
would do this in the config file:
```json
{
  ...
  "static": {
    "assets": "myAssets"
  },
  ...
}
```

For example if you have a file structure like this:
- assets
  - myFile.txt

If user enters `https://yourpage.com/myAssets/myFile.txt` they will see the `assets/myFile.txt` file.

## Importing Asset as URL

Importing a static asset will return the resolved public URL when it is served:

```jsx
import imgURL from "../assets/img.png";

export default <img src={imgURL}/>;
```

### Explicit URL Imports

Assets' urls can also be accessed by using the `?url` suffix.

This is useful for your IDE to recognize the actual path of your asset.

```jsx
import fileURL from "../assets/file.js?url";

export default <>The file is at {fileURL}</>;
```

So if the `assets` is linked to `/` in path, this would result with `The file is at /file.js`

### Importing Asset as String

Assets can also be imported as the contents of the assets using the `?raw` suffix.

```js
import content from "../assets/file.js?raw"

console.log("Content of the file.js:", content);
```