# Command Line Interface

## `npx hizzy`

Starts Hizzy in the current directory.

### Usage

```bash
npx hizzy [root]
```

### Options

| Options              | Description                                                   |
|----------------------|---------------------------------------------------------------|
| `-h, --help`         | Shows the help menu                                           |
| `-v, --version`      | Shows the version of the Hizzy installed                      |
| `--advanced-version` | Shows extra information to put in a GitHub issue              |
| `-b, --build`        | Builds the project and exits                                  |
| `--host`             | Toggles the view of IPv4                                      |
| `-f, --force`        | Forces to build on start                                      |
| `-d, --dev`          | Enables developer mode                                        |
| `-o, --open`         | Opens the app on start                                        |
| `--debug`            | Enables debug messages                                        |
| `--debug-socket`     | Reveals the packets of sockets to console, requires `--debug` |
| `--addon-init`       | Initializes up an addon environment                           |
| `--no-clear`         | Disables the initial screen clear                             |
| `--ts`               | Makes the setup process prefer TypeScript                     |
| `--config=PATH`      | Sets the path of the config (`string`)                        |
| `-p, --port=PORT`    | Sets the port to listen on (`number`)                         |
| `--injections`       | Builds HTML/JSX injection files (EXPERIMENTAL)                |