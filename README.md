# viteseed-react

Plant the seed of your project with ViteSeed, a fast and solid foundation for your development in React JS.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

**viteseed-react** is a starter template to kickstart your React project with Vite, TypeScript, and other essential tools. It provides a solid foundation to build modern web applications with ease and speed.

## Features

- **Vite**: Super fast build tool and dev server.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **Sass**: CSS pre-processor for better styling management.
- **Vite Plugin Checker**: For TypeScript and VLS error checking.
- **Vitest**: For unit testing and more.
- **Legacy Browser Support**: Compatibility with older browsers using `@vitejs/plugin-legacy`.

## Getting Started

To get started with **viteseed-react**, clone the repository and install the dependencies:

```bash
git clone https://github.com/gabrielpretel/viteseed-react.git
cd viteseed-react
npm install
```

### Running the Project

To start the development server, run:

```bash
npm run start
```

The application will be available at `http://localhost:1080`.

### Building the Project

To build the project for production, run:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Previewing the Build

To preview the production build, run:

```bash
npm run preview
```

The preview server will be available at `http://localhost:1081`.

### Type Checking

To perform type checking, run:

```bash
npm run type-check
```

## Scripts

- `start`: Starts the development server.
- `build`: Builds the project for production.
- `preview`: Previews the production build.
- `type-check`: Checks the TypeScript types.
- `prebuild`: Runs type-check before building.
- `test`: Init testing from vitest.

## Project Structure

```plaintext
viteseed-react/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.tsx
│   ├── index.tsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── vite.config.ts
```

## Dependencies

- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `vitest`: ^2.0.4

## DevDependencies

- `@types/node`: ^22.0.0
- `@types/react`: ^18.3.3
- `@types/react-dom`: ^18.3.0
- `sass`: ^1.77.8
- `typescript`: ^5.5.4
- `vite`: ^5.3.5
- `vite-plugin-checker`: ^0.7.2

## Broswser compatibility

To ensure compatibility with older browsers, ViteSeed uses the @vitejs/plugin-legacy plugin. This plugin adds support for legacy browsers by transpiling the necessary JavaScript code.

## Contributing

Contributions are welcome! If you find any bugs or have any suggestions, please open an issue on the [GitHub repository](https://github.com/gabrielpretel/viteseed-react/issues).

## License

This project is licensed under the ISC License.
