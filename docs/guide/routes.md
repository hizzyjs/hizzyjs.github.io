# Routes

Routes determine which file you should be sent to when you enter a page in the website, and it is server-sided. The
routes are exported from the main file(default: /src/Server.jsx). Example routes:

```jsx
// your server-sided code goes here...

export default <Routes>
    <Route path="/" route="./App.jsx"/>
</Routes>;
```

## Route Component

### <span style="color:red">*</span> path

Route components require a `path` attribute that determines when it should be triggered. For example setting path
to `/docs` and entering the page `/page` as in URL triggers that route.

### route

The `route` attribute determines the file it should load which can be any type of files (JSX/TSX files will be rendered
differently). Optional.

### method

The `method` attribute determines the method of the request. `GET` is the default value. Case-insensitive.

### allow

The `allow` attribute determines which files the given file can access. This attribute only makes sense for JSX/TSX
files. It expects a string(file path) array or `"*"` or `"auto"`. Setting it to `"*"` makes the file be able to access
every file in
the source folder. Setting it to `"auto"` makes it check the imports of the files the route file imports. By default,
this is set to `"auto"`.

### deny

The `deny` attribute determines which files the given file cannot access. This attribute only makes sense for JSX/TSX
files. It expects a string(file path) array or `"*"`. Setting it to `"*"` makes the file not be able to access any file
in the source
folder. By default, this is set to `[]`.

### onRequest

The `onRequest` attribute determines what actions should be taken when a request is sent. It expects a function or a
function list. Given function(s) should be in this format:

```ts
(request: Request, response: Response, next: NextFunction, ...args: any[]) => void
```

If the function `next` is not called it stops the flow causing it to not process the give `route`(if given) and also
stopping the remaining functions given in the `onRequest` attribute. This can be used to send raw JSX/TSX files like
this:

```jsx
export default <Routes>
    <Route path="/" onRequest={(request, response) => response.sendFile(__dirname + "App.jsx")}/>
</Routes>;
```

You can also communicate between the `NextFunction`s!

Example:

```jsx
function first(req, res, next) {
    next("Hello world!", 1);
}

function second(req, res, next, text, number) {
    res.send("The text is: " + text + ", and the number is: " + number);
}

export default <Routes>
    <Route path="/" onRequest={[first, second]}/>
</Routes>;
```

If you want to tell it to continue for searching other routes you can use `next(true)`:

```jsx
function first(req, res, next) {
    next(true); // this will continue with the next route!
    // only works for the last onRequest function!
}

export default <Routes>
    <Route path="/" onRequest={first}/>
    <Route path="/" route="App.jsx"/>
</Routes>;
```

## Nested Routes

Route components can include Route components inside themselves which appends the paths. An example:

```jsx
export default <Routes>
    <Route path="/a">
        <Route path="/b" route="./App.jsx"/>
    </Route>
</Routes>;
```

This will basically append `/a` and `/b` to create `/a/b` path which will be routed to given `./App.jsx` file.

::: tip Tip

Nested route components can append their `path`, `allow`, `deny`, `onRequest`!

:::