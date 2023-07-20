# Addon API

To create your own addon open a terminal then type:

```bash
npx hizzy --addon-init YourAddonName
```

This will create a package.json and an index.js file.

In the index.js file you will have 6 methods.

## Class Methods

### onLoad

This function will be run once at the beginning of the process.

### onEnable

This function will be run when the server starts listening. Can be triggered by using the `a` shortcut which disables &
re-enables all addons.

### onDisable

This function will be run before process terminates. Can be triggered by using the `a` shortcut which disables &
re-enables all addons. The function will receive the reason text in the first parameter of the function.

Official reasons:

- shortcut: `a` shortcut is used to disable and re-enable
- termination: the process has been terminated

### onClientSideLoad

The contents of this function will be run in client-side, and you cannot access the class variables or any other
server-sided variables from here. This function will be run when a client enters the website and won't be run again
afterward. To use server sided variables check [Injecting Server Sided Variables](#injecting-server-sided-variables).
The return value of this function will be used for client-sided API of this addon and will be achievable, more
information about how to import an addon from client-side at [Using Addons](./using-addons#using-an-addon).

### onClientSideRendered

The contents of this function will be run in client-side, and you cannot access the class variables or any other
server-sided variables from here. This function will be run when a page is rendered in the client-side the website and
will run every time the page navigates. To use server sided variables
check [Injecting Server Sided Variables](#injecting-server-sided-variables).

### onClientSideError

The contents of this function will be run in client-side, and you cannot access the class variables or any other
server-sided variables from here. This function will be run when an error occurs while rendering in the client side. The
function will receive the error instance in the first parameter of the function. To use server sided variables
check [Injecting Server Sided Variables](#injecting-server-sided-variables).

## Injecting Server Sided Variables

To use backend variables you can inject them using JSON.stringify.