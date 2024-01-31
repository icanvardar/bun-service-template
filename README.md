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

This template includes pre-configured GitHub Actions. It automatically runs linting and testing for your contracts whenever there's a push or pull request targeting the `main` and `issue-*` branches.

You have the flexibility to customize the CI script by editing the file [.github/workflows/ci.yml](./.github/workflows/ci.yml).

## License

This project is licensed under MIT.