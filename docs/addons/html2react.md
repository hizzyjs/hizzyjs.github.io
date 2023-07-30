# HTML To React Addon

This addon adds the ability to convert HTML to React components easily!

Example:

```jsx
import {html, convert, spread} from "@hizzyjs/html2react";

const htmlElement = html`<div> This is a div! </div>`;
htmlElement.querySelector("div").style.color = "red"; // even raw dom functions like this!

const reactComponent = convert(htmlElement);

export default <>
    Hey! My HTML: {reactComponent}<br/>
    My other HTML: {myFile}
</>;
```

Alternatively you can use the ?spread attribute to spread it to all html imports!

Example:

```jsx
import {html, convert, spread} from "@hizzyjs/html2react?spread";
import myHTML from "./file.html";

console.log(html`<div> You can still use these! </div>`);

export default <div>
    {myHTML}
</div>;
```