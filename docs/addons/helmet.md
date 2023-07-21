# Helmet Addon

This addon adds the ability to add components into the `<head>` tag.

Example:
```jsx
import Helmet from "@hizzyjs/helmet";

export default <>
    <Helmet>
        <title>The title!</title>
    </Helmet>

    <div>Hello, world!</div>
</>;
```