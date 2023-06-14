# Taller de fundamentos de Angular 16+

En este paso se desarolla el siguiente componente:

![Servicios](/docs/04.01-services-solved.gif)

## Servicios en Angular

Los servicios son una categoría amplia de conceptos puesto que abarca cualquier valor, función o característica que necesita una aplicación. Un servicio es típicamente una clase con un propósito concreto y bien definido. Debe hacer algo específico y hacerlo bien.

Angular distingue los componentes de los servicios para aumentar la modularidad y la reutilización.

Idealmente, el trabajo de un componente es habilitar solo la experiencia del usuario. Un componente debe presentar propiedades y métodos que medien entre la vista y la lógica de la aplicación. La vista es lo que representa el template y la lógica de la aplicación es lo que incluye la lógica de un modelo.

Un componente debe usar servicios para tareas que no involucren la vista o la lógica de la aplicación. Los servicios son buenos para tareas como obtener datos del servidor, validar la entrada del usuario o iniciar sesión. Al definir tales tareas de procesamiento en una clase de servicio inyectable, hace que esas tareas estén disponibles para cualquier componente. También puede hacer que su aplicación sea más adaptable inyectando diferentes proveedores del mismo tipo de servicio, según corresponda en diferentes circunstancias.

[Documentación de Inyección de Dependencias y Servicios](https://angular.io/guide/architecture-services)

# Ejercicios

Busca en el código fuente los siguientes ejercicios a desarrollar, si necesita ver la solución cambie a la rama con el sufijo `-solved`.

- TODO 401 (`app.component.ts`) Injecta el servicio `HeroService` en una variable llamada `heroService` privada y de solo lectura.
- TODO 402 (`app.component.ts`) Almacena en la variable `heroes`, el resultado de la invocación del método `findAll()` del servicio `HeroService`
- TODO 403 (`app.component.ts`) Invoca al método `add` del servicio `HeroService`
