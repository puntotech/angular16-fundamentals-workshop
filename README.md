# Taller de fundamentos de Angular 16+

En este paso se desarolla el siguiente componente:

![Router Params](/docs/05.02-router-params-solved.gif)

## Router Params en Angular

Por el momento, cualquier usuario puede navegar en cualquier parte de la aplicación en cualquier momento, pero a veces necesita controlar el acceso a diferentes partes de su aplicación por varias razones, algunas de las cuales pueden incluir las siguientes:

- Quizás el usuario no esté autorizado para navegar hasta el componente de destino (se desarrollará más adelante - [07.03-guards](https://github.com/puntotech/angular16-fundamentals-workshop/tree/07.03-guards)).
- Tal vez el usuario debe iniciar sesión (autenticarse) primero (se desarrollará más adelante - [07.03-guards](https://github.com/puntotech/angular16-fundamentals-workshop/tree/07.03-guards)).
- **Tal vez debería obtener algunos datos antes de mostrar el componente de destino** (Este punto es el que trabajaremos)
- Es posible que desee guardar los cambios pendientes antes de abandonar un componente (se desarrollará más adelante - [07.03-guards](https://github.com/puntotech/angular16-fundamentals-workshop/tree/07.03-guards)).
- Puede preguntarle al usuario si está bien descartar los cambios pendientes en lugar de guardarlos (se desarrollará más adelante - [07.03-guards](https://github.com/puntotech/angular16-fundamentals-workshop/tree/07.03-guards)).

Todos los puntos anteriores se desarrollan en Angular haciendo uso de Guardas (y resolver) en cada punto de entrada del router.

## Guards en Angular

A continuación detallamos las guardas según la funcionalidad que desarrollan. Las guardas se trabajan en la rama [07.03-guards](https://github.com/puntotech/angular16-fundamentals-workshop/tree/07.03-guards)

| GUARD INTERFACES   | DETAILS                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------- |
| `canActivate`      | Navegar hacia una ruta                                                                      |
| `canActivateChild` | Navegar hacia una ruta hija                                                                 |
| `canDeactivate`    | Navegar fuera de la actual ruta (cambiar de página)                                         |
| `resolve`          | Para recuperar datos de la ruta antes de activar la ruta                                    |
| `canMatch`         | Para controlar si se debe usar una ruta, incluso si la ruta coincide con el segmento de URL |

- [Documentación sobre Guardas](https://angular.io/guide/router-tutorial-toh#milestone-5-route-guards)
- [Ejemplo de Resolve](https://angular.io/api/router/ResolveFn)
- [Ejemplo de Resolve en tour de los héroes](https://angular.io/guide/router-tutorial-toh#resolve-pre-fetching-component-data)

# Ejercicios

Busca en el código fuente los siguientes ejercicios a desarrollar, si necesita ver la solución cambie a la rama con el sufijo `-solved`.

- TODO 505 (`app.routes.ts`/`hero.resolver`) Crea y utiliza un `ResolveFn` para las rutas que hacen uso del `:id` del `hero`.
- TODO 506 (`hero-detail.component.ts`/`hero-update.component.ts`) Crea un observable (`hero$`) que obtenga el héroe del `ActivatedRoute`
