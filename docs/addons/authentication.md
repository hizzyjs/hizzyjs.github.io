# Authentication Addon

This addon makes authentication extremely easy! (Too easy to be exact!)

This addon is completely server-sided!

## Installation

Check [Using Addons](../guide/using-addons.md) page for installation.

## Local Authentication

Local authentication is a Login/Logout type of authentication where you enter an email password(Whatever you would like)
and it gives you access to your account.

Example:

```jsx
import {LocalAuthentication} from "@hizzyjs/authentication";

global.auth = new LocalAuthentication({
    cookie: "TheSecretCookieName" // This is the name of the cookie that will be set for the client
});

// Let's say you want to make it so entering "/login" requires client to be not logged in whereas entering to "/" requires
// client to be logged in.
export default <Routes>
    <Route
        path="/"
        route="App.jsx"
        onRequest={auth.required("/login")} // If not logged in, redirect to "/login"
        allow={["App.css"]}
    />
    <Route
        path="/login"
        route="Login.jsx"
        onRequest={auth.unrequired("/")} // If already logged in, redirect to "/"
        allow={["App.css"]}
    />
</Routes>;

// --------------

// Let's say you are in a decorated function where currentClient is defined.

// To make the client log in:
await auth.login(currentClient, {username: "jeff", password: "mynameisjeff"});

// To check if the client is authenticated:
if(auth.isAuthenticated(currentClient)) console.log("The client is logged!");
else console.log("The client has not logged in...");

// To get the data you gave to the client:
// Note: it gives `undefined` if the client hasn't logged in.
const data = auth.getData(currentClient); // {username: "jeff", password: "mynameisjeff"}

// To make client log out:
await auth.logout(currentClient);
```

[Click me to view a local login/logout example made with Hizzy](https://github.com/hizzyjs/hizzy/tree/main/examples/local-auth)

## Discord Authentication

Discord authentication adds the feature to authenticate your users using Discord OAuth.

Example:

```jsx
import {DiscordAuthentication} from "@hizzyjs/authentication";

global.auth = new DiscordAuthentication({
    clientId: "The Client ID of your application",
    clientSecret: "The Client Secret of you application",
    callbackURL: "The callback URL of your application",
    scopes: ["identify"] // Client's scopes you want to access
});

// Let's say you want to make it so entering to "/" requires client to be logged in.
export default <Routes>
    <Route path="/" route="App.jsx" onRequest={auth.required()}/>
    <Route path="/callback" onRequest={auth.createCallback("/")}/>
</Routes>;
// NOTE: "/callback" depends on the URL you enter in the callbackURL, so be sure to sync them!

// --------------

// Let's say you are in a decorated function where currentClient is defined.

// To check if the client is authenticated:
if(auth.isAuthenticated(currentClient)) console.log("The client is logged!");
else console.log("The client has not logged in...");

// To get the data we got from the client's authentication:
// Note: it gives `undefined` if the client hasn't logged in.
const data = auth.getData(currentClient);

// To make client log out:
await auth.logout(currentClient);

// To get the URL where client can log in:
const url = auth.authenticationURL;
```

[Click me to view a Discord Authentication example made with Hizzy](https://github.com/hizzyjs/hizzy/tree/main/examples/discord-auth)