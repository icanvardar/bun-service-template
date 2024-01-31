# Bun Service Template [![Bun][bun-badge]][bun] [![Github Actions][gha-badge]][gha] [![License: MIT][license-badge]][license]

[gha]: https://github.com/icanvardar/bun-service-template/actions
[gha-badge]: https://img.shields.io/badge/Github%20Actions-282a2e?style=for-the-badge&logo=githubactions&logoColor=367cfe
[license]: https://opensource.org/licenses/MIT
[license-badge]: https://camo.githubusercontent.com/92ef5e7ebc8632fef4862d243dda949198df87928b72df01444fc213163a7e53/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f496c65726961796f2f6d61726b646f776e2d6261646765733f7374796c653d666f722d7468652d6261646765
[bun]: https://github.com/oven-sh/bun
[bun-badge]: https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white

A pre-configured http server template that works with Bun.

## Dependencies

- [hono](https://github.com/honojs/hono): web framework that is foundation of this template
- [husky](https://github.com/typicode/husky): commit checker that is being used with eslint and prettier in this project
- [tsoa](https://github.com/lukeautry/tsoa): helper that generates swagger definitions out of declarations in controllers
- [prettier](https://github.com/prettier/prettier): code formatter for files that have extensions of ts, js and json files
- [winston](https://github.com/winstonjs/winston): a customizable logger for general usage
- [zod](https://github.com/colinhacks/zod): a schema validator
- [eslint](https://github.com/eslint/eslint): identifier and reporter according to given patterns for js and ts files 

## Getting Started

To initiate a new repository using this template, simply click on the [`Use this template`](https://github.com/icanvardar/bun-service-template/generate) button located at the top of the page. This will create a new repository with the contents of this template as the starting point.

Alternatively, if you prefer a manual installation process:

```sh
$ mkdir my-project
$ cd my-project
$ bun create icanvardar/bun-service-template
$ bun install
```

For those unfamiliar with Bun, please refer to the
[installation instructions](https://bun.sh/docs/installation) for guidance..

---

## Features

- **Linting and Formatting**: Integrated linter (ESLint) and formatter (Prettier) to maintain consistent code quality and style.
- **Git Hooks with Husky**: Git hooks configured using Husky to automate checks and enforce code quality before commits.
- **CI/CD with GitHub Actions**: GitHub Actions workflow set up for continuous integration and deployment.
- **Swagger Documentation**: Utilizing TSOA to generate Swagger/OpenAPI definitions for API endpoints, hosted statically for easy access.
- **Hono**: Backend powered by Hono, ensuring efficient and scalable API handling.
- **Test Suite with Jest**: Comprehensive test suite located in the `tests` directory, integrated with Bun's built-in Jest for robust testing coverage.
- **Singleton Server Instance**: Server instantiated as a singleton for optimized resource management.
- **Environment Variables Handling**: Zod used for parsing and validating environment variables, with support for multiple environments (development, production, test, CI).
- **TypeScript Configuration**: Well-structured `tsconfig.json` ensuring TypeScript compiler options are optimized for the project's needs.
- **Build Process**: Build process handled using `Bun.build` for generating JavaScript output.
- **Declaration Files**: Declaration files (`*.d.ts`) are supported, create and use anywhere in the project.
- **Custom TypeScript Plugin**: Custom plugins for Bun's Build module, detailed in `plugins.ts`.

### Default Configurations

Default configurations can be found in these files, which you can adjust as you wish or according to your preferences.

```text
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierignore
├── .prettierrc
├── build.mjs
├── bunfig.toml
├── tsconfig.json
└── tsoa.json
```

### GitHub Actions

This template includes pre-configured GitHub Actions. It automatically runs linting and testing for your project whenever there's a push or pull request targeting the `main` and `issue-*` branches.

You have the flexibility to customize the CI script by editing the file [.github/workflows/ci.yml](./.github/workflows/ci.yml).

### Environments Explained

Most Node.js-based projects use this kind of structure to manage different configurations for different environments. Bun enables automatic application of different settings in scenarios such as development, production, testing, and CI.

Firstly, you can define default configurations by creating a `.env.example` file in the project root directory. Then, you can create files for each environment like `.env.development`, `.env.production`, `.env.test`, where you specify the specific settings required for each environment.

Additionally, you can configure your project to automatically pull settings from the `.env` folder if the `NODE_ENV` value is empty. This can be used to check environment variables at the start of the project and load the appropriate `.env` file.

For example, when creating a `start` script:

```json
"scripts": {
    "start": "export NODE_ENV=production && bun run ./out/index.js",
    "start:dev": "export NODE_ENV=development && bun index.ts",
    "start:watch": "export NODE_ENV=development && bun --watch index.ts",
    "test": "export NODE_ENV=test && bun test"
},
```

This assigns different `NODE_ENV` values for different scenarios and automatically loads the `.env` file.

In conclusion, by using this structure, you can seamlessly switch between different configurations when running your project in different environments (development, production, test), making it easier to manage.

## Writing Tests

If you wish to write a new test, you can create files with extensions `.test.ts`, `.spec.ts`, or `.t.ts` under the `tests` directory located at the root of the project. You can write tests following the syntax of the [Jest](https://jestjs.io/) library. However, optionally, you can also use [Chai.js](https://www.chaijs.com/) and [Mocha.js](https://mochajs.org/) to write your tests, but for this, you'll need to [install](https://mochajs.org/#getting-started) the libraries according to your customized setup beforehand.

To run tests, simply execute the command bun run test. If you want to generate test coverage, you should run `bun run coverage`.

When conducting tests, the template automatically sets the ***NODE_ENV*** value to ***"test"***, allowing the compiler to read values from the `.env.test` file. Please make sure to conduct your tests by modifying the ```.env.test``` file accordingly.

This template includes an example test file [./tests/foo.spec.ts](./tests/foo.spec.ts).

## Usage

Here is a list of the most commonly used commands.

### Build

Build the project:

```sh
$ bun run build
```

### Clean

Delete bun.lockb file, node_modules and build folder.

```sh
$ bun run clean
```

### Start Development

Start the project as development mode:

```sh
$ bun run start:dev
```
or for watch mode
```sh
$ bun run start:watch
```

### Coverage

Generate coverage report:

```sh
$ bun run coverage
```

### Format

Format the project files:

```sh
$ bun run format
```

### Lint

Lint the project:

```sh
$ bun run lint
```

### Test

Run the tests:

```sh
$ bun run test
```

Generate test coverage and its result:

```sh
$ bun run coverage
```

## License

This project is licensed under MIT.