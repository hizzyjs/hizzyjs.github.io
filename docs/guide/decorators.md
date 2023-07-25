# Using Decorators

Decorators in Hizzy add new functionalities to functions.

## Built-in Decorators

### @server

The functions decorated with `@server`'s codes will not be shown to the client and when the function finishes, client
won't be notified. These functions can be run by a client-side code. The code will be executed in the server-side. A
variable named [`currentClient`](#the-variable-currentclient) will be defined.

Example:

```jsx {1}
// @server
function myFunction() {
    console.log("Someone just clicked to the button!"); // This message will be shown in the server-sided terminal
}

export default <button onClick={myFunction}>
    Click me and check the server-side terminal!
</button>;
```

Client sees something similar to this:

```jsx
const myFunction = (a, b) => secretSocket.send(`run myFunction with the arguments: ${a} and ${b}`);

export default <button onClick={myFunction}>
    Click me and check the server-side terminal!
</button>;
```

### @server/respond

The functions decorated with `@server/respond`'s codes will not be shown to the client and when the function finishes,
client will be notified with the returned value of the function in a promise. This forces it to become an asynchronous
function. These functions can be run by a client-side code. The code will be executed in the server-side. A variable
named [`currentClient`](#the-variable-currentclient) will be defined.

Example:

```jsx {1}
// @server/respond
function myFunction(a, b) {
    return a + b;
}

const result = await myFunction(5, 5);

export default <>
    The result of the function call is {result}!
</>;
```

Client sees something similar to this:

```jsx
const myFunction = async (a, b) => {
    secretSocket.send(`run myFunction with the arguments: ${a} and ${b}`);
    return await waitForTheResponse();
};

const result = await myFunction(5, 5);

export default <>
    The result of the function call is {result}!
</>;
```

### @server/start

The functions decorated with `@server/start` will not be shown to the client. These functions will be run at the start
of the process. The code will be executed in the server-side.

Example:

```jsx {1}
// @server/start
function onStart() {
    console.log("This will be shown in the server-side terminal!");
}
```

### @server/join

The functions decorated with `@server/join` will not be shown to the client. These functions will be run when a client
joins. The code will be executed in the server-side. A variable named [`currentClient`](#the-variable-currentclient)
will be defined.

Example:

```jsx {1}
// @server/join
function onJoin() {
    const uuid = currentClient.uuid;
    console.log(`Someone just joined! Their UUID is ${uuid}!`)
}
```

### @server/leave

The functions decorated with `@server/leave` will not be shown to the client. These functions will be run when a client
leaves. The code will be executed in the server-side. A variable named [`currentClient`](#the-variable-currentclient)
will be defined.

Example:

```jsx {1}
// @server/leave
function onLeave() {
    const uuid = currentClient.uuid;
    console.log(`Someone just left! Their UUID is ${uuid}!`)
}
```

::: warning Warning

This will not be triggered if the client navigates through the pages. You can also add `@server` decorator to a
function and use a client function with the decorator `@client/end` to call that function, but be aware of
that `@client/end` function call could be faked by the client.

:::

### @client

This is the default decorator for a function no matter if it has the `@client` decorator or not. These functions can be
used by the server-sided functions.

Example:

```jsx {1}
// @server
function serverFunction() {
    console.log("This message will be shown in the server-sided terminal.");
    clientFunction();
}

function clientFunction() {
    console.log("This message will be shown in the client-sided console.");
}

serverFunction();
// First "This message will be shown in the server-sided terminal." gets logged on server-side
// Second "This message will be shown in the client-sided console." gets logged on the client-side
```

::: warning Warning

The client functions that are not in top-level will not be recognized by server-sided functions.

:::

::: warning Warning

All function decorators starting with the `@client` can be faked by the client since it's client-sided.

:::

### @client/render

This function will be run immediately when the page gets rendered.

Example:

```jsx {1}
// @server
function serverFunction() {
    console.log("This message will be shown in the server-sided terminal.");
    clientFunction();
}

function clientFunction() {
    console.log("This message will be shown in the client-sided console.");
}

serverFunction();
// First "This message will be shown in the server-sided terminal." gets logged on server-side
// Second "This message will be shown in the client-sided console." gets logged on the client-side
```

### @client/navigate

This function will be run immediately before a navigation/reload. Will be useful for workers etc.

Example:

```jsx {3}
const worker = new Worker("./someScript.js");

// @client/navigate
function serverFunction() {
    worker.terminate();
}
```

## The variable `currentClient`

This variable can be accessed by functions that have one of these
decorators: `@server`, `@server/respond`, `@server/join`, `@server/leave`

### Properties

| Property        | Description                                               |
|-----------------|-----------------------------------------------------------|
| `uuid`          | The unique ID of the client generated cryptographically   |
| `ip`            | The IP address of the client                              |
| `request`       | The current request of the socket                         |
| `actualRequest` | The first non-navigated request of the socket             |
| `attributes`    | An object that you can use to store data about the socket |

### Methods

Here are some examples of all methods:

```js {1}
// @server/join
async function onJoin() {
    const response = await currentClient.eval("2 + 2"); // 4
    
    const result1 = await currentClient.run("App.jsx", "myFunction", 2, 2); // 5
    // OR
    const result2 = await myFunction(2, 2); // 5
    
    currentClient.remove("the reason goes here, optional"); // closes the client
}

function myFunction(a, b) {
    return a + b + 1;
}
```