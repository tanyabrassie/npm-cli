---
title: npm-shrinkwrap.json
description: A publishable lockfile
---

# npm-shrinkwrap.json

## A publishable lockfile

### Description

`npm-shrinkwrap.json` is a file created by npm-shrinkwrap(1). It is identical to
`package-lock.json`, with one major caveat: Unlike `package-lock.json`,
`npm-shrinkwrap.json` may be included when publishing a package.

The recommended use-case for `npm-shrinkwrap.json` is applications deployed
through the publishing process on the registry: for example, daemons and
command-line tools intended as global installs or `devDependencies`. It's
strongly discouraged for library authors to publish this file, since that would
prevent end users from having control over transitive dependency updates.

Additionally, if both `package-lock.json` and `npm-shrinkwrap.json` are present
in a package root, `package-lock.json` will be ignored in favor of this file.

For full details and description of the `npm-shrinkwrap.json` file format, refer
to the manual page for package-lock.json(5).

### See also

* [npm-shrinkwrap](npm-shrinkwrap)
* [package-lock.json](package-lock.json)
* [package.json](package.json)
* [npm-install](npm-install)
