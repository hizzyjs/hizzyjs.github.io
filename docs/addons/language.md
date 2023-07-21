# Language Addon

This addon adds language support to your website.

The addon requires you to set the `directory` to a directory name in the config file.

Example:

```json
{
  // ...
  "addons": {
    "@hizzyjs/language": {
      "directory": "languages",
      "default": "the default language's name, first language will be selected if this is not given."
    }
  }
  // ...
}
```

You should locate your language files into the folder you've given. Files should be JSON files. If the file name
is `en.json`, the language name for that file will be set to `en`.

You can use the client-sided value of the addon as a component.

Example:

```jsx
import Lang from "@hizzyjs/helmet";

export default <>
    The value of the key 'myKey': <Lang>myKey</Lang>
</>;
```

Additionally, you can use the readonly properties of the component.

Example:

```jsx
import Lang from "@hizzyjs/helmet";

Lang.language; // This is the current language

Lang.language = "en"; // This changes the current language and resets all Language components

Lang.languages; // This is an array of registered languages

Lang.container; // An object that has the languages as keys and the maps of the languages as values

Lang.next; // Gives the next language

export default <>
    The value of the key 'myKey': <Lang>myKey</Lang><br/>
    <button onClick={() => Lang.language = Lang.next}>Change language</button>
</>;
```