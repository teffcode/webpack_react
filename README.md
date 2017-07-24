# REACT

## Introducción

* React es una librería de JS para construir interfaces visuales. La pudes revisar en su [documentación oficial](https://facebook.github.io/react/).

* Es la V en la arquitectura MVC.

## Requisitos

* Tener instalado [node js](https://nodejs.org/en/download/) y [npm](https://www.npmjs.com/).

## Webpack

* Webpack es el compilador de Módulos
* Para inicializar el proyecto se debe:
  1. Creas una carpeta con el nombre de tu proyecto. Yo la llamé React.
  2. Dentro de la carpeta escribes `npm init`. Aquí creas el archivo package.json (dependencias).
  3. Instalas webpack escribiendo ahí mismo `npm install -s webpack`
  4. Creas un archivo con el nombre webpack.config.js con la siguiente [configuración básica](https://gist.github.com/Jerolan/e87bb55f5a0a7232b88c5f5cc67912c6). Aquí solo debes configurar los archivos de entrada y salida para que sean propios del proyecto
  5. Creas una nueva carpeta dentro del proyecto llamada app en este caso. Tu la puedes llamar como quieras.
  6. Dentro de app creas otra carpeta llamada dist que tendrá los archivos index.js, modulo1.js y modulo2.js.
  7. Haces una pequeña modificación en el archivo webpack.config.js:
    * `entry: "./app/dist/index.js"` que es el archivo dónde se configuró el módulo.
    * `path: __dirname + "app/js"`
    * `filename: "index.min.js"`
  8. Ya podemos usar webpack en el proyecto !!! Para usar el comando `webpack` debes instalarlo de forma global con el siguiente comando: `npm install -g webpack`
  9. Luego de eso, se te crea una carpetita dentro de la carpeta app del proyecto llamada js.

## JSX

Es una sintaxis parecida a la de xml en ES6 para poder escribir componentes en React. Puedes revisar su especifiación [aquí](http://facebook.github.io/jsx/).

## Dependencias extra

Necesitamos:
* React
* React-DOM
* Webpack
* Webpack-dev-server

Escribe en consola `npm install` en la carpetita del proyecto. Notarás que se crea la carpeta node_modules.

Adicional, haces una pequeña modificación en el archivo webpack.config.js, que consta de un loader para los modulos.

Te debe quedar algo así:

## Componentes

Creas un archivo llamado index.html dentro de la carpeta app. Hacemos un pequeño div en donde se pondrá nuestro primer componentito.

Luego, en el archivo index.js escribimos nuestro primer componentito.

## Start !

* Digita en consola `webpack`seguido de `npm start`
* Ve al navegador y digita http://localhost:8080

yeiiiii... terminamos :3
