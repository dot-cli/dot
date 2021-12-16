dot
===

dot cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dot.svg)](https://npmjs.org/package/dot)
[![Downloads/week](https://img.shields.io/npm/dw/dot.svg)](https://npmjs.org/package/dot)
[![License](https://img.shields.io/npm/l/dot.svg)](https://github.com/chico/dot/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dot
$ dot COMMAND
running command...
$ dot (-v|--version|version)
dot/0.0.0 darwin-x64 node-v12.16.1
$ dot --help [COMMAND]
USAGE
  $ dot COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dot hello`](#dot-hello)
* [`dot help [COMMAND]`](#dot-help-command)
* [`dot login`](#dot-login)

## `dot hello`

Prints out a greeting to the logged in user

```
USAGE
  $ dot hello
```

_See code: [src/commands/hello.js](https://github.com/chico/dot/blob/v0.0.0/src/commands/hello.js)_

## `dot help [COMMAND]`

display help for dot

```
USAGE
  $ dot help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.14/src/commands/help.ts)_

## `dot login`

Logs in the user using github

```
USAGE
  $ dot login
```

_See code: [src/commands/login.js](https://github.com/chico/dot/blob/v0.0.0/src/commands/login.js)_
<!-- commandsstop -->
