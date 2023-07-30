# API Addon

This addon makes it really easy to make APIs inside your Hizzy app by adding custom Route components!

Example usage:

```jsx
import {API} from "@hizzyjs/api";

export default <Routes>
    
    <API path="/" handle={"hello, world!"}/>
    
    <API path="/a" handle={{a: "b"}}/>
    
    <API path="/b" handle={req => req.headers.referer ? "good" : "bad!"}/>
    
    <API path="/b" handle={(req, res) => res.send("Hello!")}/>
    
</Routes>;
```