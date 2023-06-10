# Taller de fundamentos de Angular 16+

En este taller se desarrolla una aplicación desde cero de Angular 16+, en el cual se presentan los conceptos fundamentales de desarrollo en Angular 16+ enfocado en desarrolladores que nunca han desarrollado aplicaciones web en Angular previamente.

## Instalación

### Instalar Angular

Revisar la [documentación oficial de instalación de Angular](https://docs.angular.lat/guide/setup-local#instalar-la-cli-de-angular)

A modo de resumen para instalar Angular CLI se debe ejecutar el siguiente comando:

`npm install -g @angular/cli`

### Instalar el taller de Angular Fundamentals

1. `git clone git@github.com:puntotech/workshop-angular-fundamentals.git`
2. `cd workshop-angular-fundamentals`
3. `npm i` 
4. `npm serve`

## Cómo realizar el taller

El repositorio está organizado por ramas numeradas en incremento `01`, `02`, `03`,..., que representan los pasos a seguir en el taller. Siendo el primer paso la rama denominada `01`, a continuación la `02`, y así sucesivamente.

A continuación cada rama tiene un nombre específico que define el concepto a presentar en dicha rama. En el reaadme de estas ramas se encuentra la descripción del concepto de Angular que se quiere presentar, y el reto a superar para afianzar el concepto.

Finalmente, las ramas con la solución del reto a superar se encuentran en las ramas con el sufijo `solved`. 

Por ejemplo, la rama con el primer concepto se encuentra en la rama `01-single-component`, y la solución del mismo se encuentra en la rama `01-single-component-solved`.

## API

En el taller es necesario disponer de un backend que nutre a nuestra aplicación frontend, para el seguimiento de este taller se ha facilitado un backend desarrollado en node.js el cual se encuentra en el directorio `api`, la API no es persistente en base de datos sino en memoria RAM. Por tanto, cada vez que se reinicie el backend se reiniciarán los datos del mismo.

Para hacer funcionar la API debe seguir los siguientes pasos:

1. `cd api`
2. `npm i`
3. `npm start:dev`

## Ramas

Las ramas disponibles son las siguientes.

| Nombre de rama | Concepto  |  
|---|---|
|  [main](https://github.com/puntotech/workshop-angular-fundamentals) | Rama inicial | | 
|  [01.01-single-component](https://github.com/puntotech/workshop-angular-fundamentals/tree/01.01-single-component)  |  Creación de un componente  |  
|  [01.01-single-component-solved](https://github.com/puntotech/workshop-angular-fundamentals/tree/01.01-single-component-solved) | Solución de Creación de un componente  |  
|  [02.01-communication](https://github.com/puntotech/workshop-angular-fundamentals/tree/02.01-communication)) | Comunicación entre componentes (@Input/@Output)  |  
|  [02.01-communication-solved](https://github.com/puntotech/workshop-angular-fundamentals/tree/02.01-communication-solved) |   |   
|  [03.01-form-new](https://github.com/puntotech/workshop-angular-fundamentals/tree/03.01-form-new) | Formularios Reactivos  |  
|  [03.01-form-new-solved](https://github.com/puntotech/workshop-angular-fundamentals/tree/03.01-form-new-solved) |   |  
|  [03.02-form-new-error](https://github.com/puntotech/workshop-angular-fundamentals/tree/03.02-form-new-error) | Gestión de errores en Formularios Reactivos  | 
|  [03.02-form-new-error-solved](https://github.com/puntotech/workshop-angular-fundamentals/tree/03.03-form-new-error-solved) |   |  
|  [03.03-form-new-ngFor](https://github.com/puntotech/workshop-angular-fundamentals/tree/03.03-form-new-ngFor) | Optimización de formularios reactivos  |  
|  [03.03-form-new-ngFor-solved](https://github.com/puntotech/workshop-angular-fundamentals/tree/03.03-form-new-ngFor) |   |  
|  [04.01-services](https://github.com/puntotech/workshop-angular-fundamentals/tree/04.01-services) | Creación de servicios  |  
|  [04.01-services-solved](https://github.com/puntotech/workshop-angular-fundamentals/tree/04.01-services-solved) |   | 
|  [05.01-router](https://github.com/puntotech/workshop-angular-fundamentals/tree/05.01-router) | Introducción al Router  |  
|  [05.01-router-solved](https://github.com/puntotech/workshop-angular-fundamentals/tree/05.01-router-solved) |   |  
|  [05.02-router-params](https://github.com/puntotech/workshop-angular-fundamentals/tree/05.02-router-params) | Router: Paso de parámetros  |
|  [05.02-router-params-solved](https://github.com/puntotech/workshop-angular-fundamentals/tree/05.02-router-params-solved) |   |
|  [06.01-http](https://github.com/puntotech/workshop-angular-fundamentals/tree/61.01-http) | Comunicación con el backend  |
|  [06.01-http-solved](https://github.com/puntotech/workshop-angular-fundamentals/tree/06.01-http-solved) |   |
|  07.01-features | Arquitectura de la app en features   |
|  07.01-features-solved |   | 
|  07.02-login-register | Páginas de Login/Register  | 
|  07.02-login-register-solved |   | 
|  07.03-guards | Creación de Guardas  | 
|  07.03-guards-solved |   |
|  07.04-interceptors | Interceptores (Token y Loader)  |
|  07.04-interceptors-solved |   |
|  08.01-ngrx-configuration | NgRX: Configuración  | 
|  08.01-ngrx-configurationn-solved |   | 
|  08.02-ngrx-auth-login | NgRX: Login   | 
|  08.02-ngrx-auth-login-solved |   | 
|  08.03-ngrx-auth-register | NgrX: Register  |  
|  08.03-ngrx-auth-register-solved |   | 
|  08.04-ngrx-auth-logout | NgRX: Logout  | 
|  08.04-ngrx-auth-logout-solved |   | 
|  08.05-ngrx-heroes-load | NgRX: Load Heroes |  
|  08.05-ngrx-heroes-load-solved |   | 
|  08.06-ngrx-heroes-create |NgRX: Create Heroes |  
|  08.06-ngrx-heroes-create-solved |   |
|  08.07-ngrx-heroes-delete | NgRX: Delete Heroes |   
|  08.07-ngrx-heroes-delete-solved |   |  
|  08.08-ngrx-heroes-update | NgRX: Update Heroes | 
|  08.08-ngrx-heroes-update-solved |   |  
