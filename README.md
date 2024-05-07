# Angular_proyecto_Grupo3
Helio Energy

Una plataforma integral de energía solar desarrollada con Angular, que combina eficiencia energética con una interfaz intuitiva, ofreciendo información en tiempo real y herramientas de gestión para empoderar a los usuarios en su transición hacia una energía más sostenible.

![Captura de Pantalla 2024-04-24 a las 12 31 35](https://github.com/alexandragadeag/Angular_proyecto_Grupo3/assets/149069703/45282aec-13de-4a60-b06c-8f8b339502c0)



## REQUISITOS MÍNIMOS:

* 4-5 tablas: usuario, proyecto, tarea, categoría, etiqueta, comentario/valoracion/opinion
* Asociaciones:
    * Las tablas se crean desde interfaces typeScript con backend NestJS

* Asociaciones entre los modelos, se hace en las interfaces de TypeScript.
    * One to One
    * Many To One
    * Many to Many

* 3 componentes por cada modelo/tabla, se deben poder hacer las operaciones CRUD:
    * Listado / Grid (mostrar varios elementos)
    * Detalle (mostrar un elemento principal)
    * Formulario

* Página web responsive, se debe ver bien en ordenador principalmente y en móvil.

* budget list  con botón crear contrato
* Budget Controller que reciba la petición de crear contrato recibiendo el id del budget
    * extraer el budget, extraer el usuario por email crear un contract

* contract list con botón de crear factura



 COMANDOS UTILIZADOS:
 Comando angular para el problema de permisos
sudo chmod -R 777 *

Comando para hacerte usuario clase 1
sudo su 

Subir un nivel 
cd .. 

CREAR NUEVO PROYECTO DE ANGULAR CON ROUTING
ng new NOMBREdelPROYECTO --skip-git --style=css --routing=true --ssr=false

INSTALAR BOOTSTRAP
ng add @ng-bootstrap/ng-bootstrap

INSTALAR ICONOS DE BOOTSTRAP
### PASO 1:
Ejecutar el siguiente comando en el proyecto angular:

npm i bootstrap-icons

### PASO 2:
Agregar la librería de iconos en el archivo angular.json del proyecto:

El apartado styles debe quedar así:

"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "node_modules/bootstrap-icons/font/bootstrap-icons.min.css",
    "src/styles.css"
],

https://icons.getbootstrap.com/
Ejemplo de un icono:
<i class="bi bi-eye"></i>

ENTRAR AL PROYECTO
cd

EJECUTAR ANGULAR
ng serve

CREAR COMPONENTES
En el proyecto angular-006-servicios crear 2 componentes:

* product-list: ng generate component product-list
* product-detail: ng generate component product-detail


CREAR INTERFAZ PRODUCT
En una carpeta interfaces crear un product.model.ts con una interface Product que se adapte a la respuesta de fakestoreapi.


CREAR SERVICIO PRODUCTSERVICE
Crear un servicio llamado ProductService:

ng generate service services/product


JSON SERVER (BACKEND FICTICIO / DEMO)
Backend ficticio a partir de un archivo json.

https://www.npmjs.com/package/json-server

1. Instalar json server

npm install -g json-server

2. Crear archivo db.json con datos demo dentro

db.json en la carpeta angular-007-jsonserver, NO EN src NI EN app.

3. Ejecutar backend json server (imitación de backend)
json-server --watch db.json


INSTALAR Y DESINSTALAR ANGULAR
npm uninstall -g @angular/cli

npm install -g @angular/cli@17.2.0

AGREGAR ANGULAR MATERIAL A NUESTRO PROYECTO
ng add @angular/material

Comandos .gitignore para eliminar las carpetas no deseadas, aunque lo mejor es crear el archivo .gitignore antes de empezar todo el proyecto.
git rm -r --cached node_modules
git rm -r --cached .angular
git rm -r --cached .vscode

Comando para instalar nestJs
npm install -g @nestjs/cli

Comando para crear nuevo proyecto de nestJs
nest new backend01 --skip-git --package-manager npm




Arrancar nestJs
nest start --watch          http://localhost:3000/
npm run start:dev 

Arrancar nestJs sin tener que hacerlo siempre
nest start --watch  

Crear controlador
nest generate controller Book

 

Para ver ayuda y comandos 
nest --help

Base de datos con NestJs
npm install --save @nestjs/typeorm typeorm mysql2
(para permitir la conexión a base de datos)

Instalar Open API (sería como postman autogenerado)
npm install @nestjs/swagger


Seguridad en Nest.JS
npm install @nestjs/jwt @nestjs/passport passport passport-jwt bcrypt

ng generate guard authentication/user-logged-in


