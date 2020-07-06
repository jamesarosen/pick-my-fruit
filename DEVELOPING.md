## Install Dependencies

```sh
$ nvm use
$ pnpm recursive install
```

For more, see the [nvm docs](https://github.com/nvm-sh/nvm) and the [pnpm docs](https://pnpm.js.org).

## Linting and Tests

Lint all packages in the workspace:

```sh
$ pnpm run lint
```

Run tests on all packages:

```sh
$ pnpm run -r test
```

Run tests for one package:

```sh
$ pnpm run --filter @pickmyfruit/foo test
```

## Running the Web Server

```sh
$ pnpm run --filter @pickmyfruit/web develop
```

Then open http://localhost:8000 in your browser
