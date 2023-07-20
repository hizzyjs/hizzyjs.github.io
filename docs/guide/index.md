# Getting Started

## Overview

Hizzy (Turkish word for 'speed' + the letters 'zy') is a build tool that aims to provide a faster and leaner development
experience for modern fullstack web projects. It consists of two major parts:

- A dev server that provides rich feature enhancements
  over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), for example extremely
  fast Hot Module Replacement (HMR).

- A build command that bundles your code into JS files that can be used to run the application with a blazingly fast
  speed.

Hizzy is opinionated and comes with sensible defaults out of the box. Support for frameworks or integration with other
tools is possible through [Addons](./using-addons). The [Config Section](./config) explains how to configure your
project if needed.

Hizzy is also highly extensible via its [Addon API](./api-addon) and [JavaScript API](./api-javascript) with full typing
support.

## Scaffolding Your First Hizzy Project

::: tip Compatibility Note
Hizzy requires [Node.js](https://nodejs.org/en/) version 18+.
:::

```bash
$ npx hizzy
```

That's it! This will first download the package, then set up your project for you in the current directory!

Immediately afterward it will start your app up!

#### Specifying Alternative Root

Running `npx hizzy` starts the Hizzy server using the current working directory as root. You can specify an alternative
root
with `npx hizzy path/to/project`.

Note that Hizzy will also resolve [its config file (i.e. `hizzy.config.js`)](./config) inside the
project root, so you'll need to move it if the root is changed.

## Command Line Interface

In a project where Hizzy is installed, you can use the `hizzy` binary in your npm scripts, or run it directly
with `npx hizzy`.

You can specify additional CLI options like `--port` or `--https`. For a full list of CLI options,
run `npx hizzy --help` in your project.

Learn more about the [Command Line Interface](./cli.md)

## Viewing/Editing Hizzy Locally

If you can't wait for a new release to test the latest features, or you want to edit the Hizzy's source code, you will
need to clone the [hizzy repo](https://github.com/hizzyjs/hizzy) to your local machine and then build and link it
yourself:

```bash
git clone https://github.com/hizzyjs/hizzy.git
cd hizzy
npm install
node hizzy path/to/project
```

That's it! This will run your project using the latest(possibly unreleased) version of Hizzy!

## Community

If you have questions or need help, reach out to the community at [Discord](https://discord.gg/emAhrw3mvM)
and [GitHub Discussions](https://github.com/hizzyjs/hizzy/discussions).