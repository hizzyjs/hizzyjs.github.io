# Preparing for Production

When it is time to deploy your app for production, set the `"dev"` property in the config file to `false` and optionally
set `autoBuild` to `false` to prevent building everytime you start the app. You can also disable
the `includeOriginalInBuild` to speed up the build process. What `includeOriginalInBuild` does is explained in
the [Configuration Page](./config).

Then simply just type `npx hizzy` to start your project!

## Building manually

You can build your app manually by typing `npx hizzy --build`.