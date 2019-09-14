---
title: npm-build
description: Build a package
---

# npm-build

## Build a package

### Synopsis
```shell
npm build [<package-folder>]
```

* `<package-folder>`:
  A folder containing a `package.json` file in its root.

### Description

This is the plumbing command called by `npm link` and `npm install`.

It should generally be called during installation, but if you need to run it
directly, run:
```bash
    npm run-script build
```

### See Also

* npm-install(1)
* npm-link(1)
* npm-scripts(7)
* package.json(5)
