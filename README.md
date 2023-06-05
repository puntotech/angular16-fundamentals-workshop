# Taller de fundamentos de Angular 16+

En este taller se desarrolla una aplicación desde cero en el cual se presentan los conceptos fundamentales de desarrollo en Angular 16+ para aquellos desarrolladores que nunca han desarrollado en Angular previamente.

## Instalación

## Instalar Angular

Revisar la [documentación oficial de instalación de Angular](https://docs.angular.lat/guide/setup-local#instalar-la-cli-de-angular)

A modo de resumen para instalar Angular CLI se debe ejecutar el siguiente comando:

`npm install -g @angular/cli`

## Instalar el taller de Angular Fundamentals

1. `git clone git@github.com:puntotech/workshop-angular-fundamentals.git`
2. `npm i` 
3. `npm serve`

## Cómo realizar el taller

El repositorio está organizado por ramas numeradas en incremento `01`, `02`, `03`,..., que representan los pasos a seguir en el taller. Siendo el primer paso la rama denominada `01`, a continuación la `02`, y así sucesivamente.

A continuación cada rama tiene un nombre específico que define el concepto a presentar en dicha rama. En el reaadme de estas ramas se encuentra la descripción del concepto de Angular que se quiere presentar, y el reto a superar para afianzar el concepto.

Finalmente, las ramas con la solución del reto a superar se encuentran en las ramas con el sufijo `solved`. 

Por ejemplo, la rama con el primer concepto se encuentra en la rama `01-single-component`, y la solución del mismo se encuentra en la rama `01-single-component-solved`.

## API

Para el seguimiento de este taller se ha facilitado un backend desarrollado en node.js el cual se encuentra en el directorio `api`, la API no es persistente en base de datos sino en memoria RAM. Por tanto, cada vez que se reinicie el backend se reiniciarán los datos del mismo.

Para hacer funcionar la API debe seguir los siguientes pasos:

1. `cd api`
2. `npm i`
3. `npm start:dev`

## Ramas

Las ramas disponibles son las siguientes.

| Nombre de rama | Concepto  |  |   |   |
|---|---|---|---|---|
|  01.01-single-component  |  Creación de un componente  |   |   |   |
|  01.01-single-component-solved|   |   |   |   |
|  02.01-communication |   |   |   |   |
|  02.01-communication-solved |   |   |   |   |
|  03.01-form-new |   |   |   |   |
|  03.01-form-new-solved |   |   |   |   |
|  03.02-form-new-error |   |   |   |   |
|  03.02-form-new-error-solved |   |   |   |   |
|  03.03-form-new-ngFor |   |   |   |   |
|  03.03-form-new-ngFor-solved |   |   |   |   |
|  04.01-services |   |   |   |   |
|  04.01-services-solved |   |   |   |   |
|  05.01-router |   |   |   |   |
|  05.01-router-solved |   |   |   |   |
|  05.02-router-params |   |   |   |   |
|  05.02-router-params-solved |   |   |   |   |
|  06.01-http |   |   |   |   |
|  06.01-http-solved |   |   |   |   |
|  07.01-features |   |   |   |   |
|  07.01-features-solved |   |   |   |   |
|  07.02-login-register |   |   |   |   |
|  07.02-login-register-solved |   |   |   |   |
|  07.03-guards |   |   |   |   |
|  07.03-guards-solved |   |   |   |   |
|  07.04-interceptors |   |   |   |   |
|  07.04-interceptors-solved |   |   |   |   |
|  08.01-ngrx-configuration |   |   |   |   |
|  08.01-ngrx-configurationn-solved |   |   |   |   |
|  08.02-ngrx-auth-login |   |   |   |   |
|  08.02-ngrx-auth-login-solved |   |   |   |   |
|  08.03-ngrx-auth-register |   |   |   |   |
|  08.03-ngrx-auth-register-solved |   |   |   |   |
|  08.04-ngrx-auth-logout |   |   |   |   |
|  08.04-ngrx-auth-logout-solved |   |   |   |   |
|  08.05-ngrx-heroes-load |   |   |   |   |
|  08.05-ngrx-heroes-load-solved |   |   |   |   |
|  08.06-ngrx-heroes-create |   |   |   |   |
|  08.06-ngrx-hereoes-create-solved |   |   |   |   |
|  08.07-ngrx-heroes-delete |   |   |   |   |
|  08.07-ngrx-hereoes-delete-solved |   |   |   |   |
|  08.08-ngrx-hereoes-update |   |   |   |   |
|  08.08-ngrx-hereoes-update-solved |   |   |   |   |
