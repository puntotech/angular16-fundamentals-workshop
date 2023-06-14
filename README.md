# Taller de fundamentos de Angular 16+

En este paso se desarolla el siguiente componente:

![Servicios](/docs/05.01-router-solved.gif)

## Router en Angular

En una SPA (_Single Page Application_) se cambia lo que ve el usuario mostrando u ocultando partes de la pantalla que corresponden a componentes particulares, en lugar de ir al servidor para obtener una nueva página.

A medida que los usuarios realizan tareas de aplicación, necesitan moverse entre las diferentes vistas que se hna definido.

El router permite la navegación al interpretar una URL del navegador como una instrucción para cambiar la vista.

La estructura de componentes y páginas en esta rama es la mostrada en la siguiente imagen. Observe que tenemos los siguientes elementos:

- Páginas: Las páginas serán los componentes que se enruten a través del router.
  - auth: Las páginas relativas al módulo de Autenticación
    - Login - Página de autenticación (se desarrolla más adelante).
    - Register - Página de registro (se desarrolla más adelante).
  - hero: Las páginas relativas a los héroes
    - Hero-detail - Página para mostrar la información de un héroe.
    - Hero-new - Página para crear un nuevo héroe, se hará uso del component hero-form.
    - Hero-update - Página para actualizar un nuevo héroe, se hará uso del componente hero-form.
- Componentes: Las piezas por las que se construirán las páginas de la aplicación web.
  - hero-form - Formulario para crear o actualizar un héroe, el formulario es el mismo. En esta rama aún no se enviará por parámetro el objeto heroe a modificar (se desarrolla más adelante).
  - hero-list - Componente que muestra una lista de hero-item.
  - hero-item - Componente que muestra la información de un héroe.
- Shared: Elementos que son compartidos para toda la aplicación.
  - Componentes: Componentes utilizados en toda la aplicación.
    - header - Cabecera donde aparece el menú de navegación.
    - footer - Pie de página donde aparece el copyright.
  - Interfaces: Definición de los interfaces compartidos en toda la aplicación
  - Services: Servicios compartidos en toda la aplicación.
  - Validators: Validadores para los formularios.

![Pages-Components](/docs/pages-components.png)

- [Documentación de Router](https://angular.io/guide/router)
- [Documentación de loadComponents usando Standalone Components](https://angular.io/guide/standalone-components#lazy-loading-a-standalone-component)

# Ejercicios

Busca en el código fuente los siguientes ejercicios a desarrollar, si necesita ver la solución cambie a la rama con el sufijo `-solved`.

- TODO 501 (`app.config.ts`) Configura el router
- TODO 502 (`app.router.ts`) Configurar rutas de heroes
- TODO 503 (`hero-new.component.ts`) Navega hasta la página `/home`
- TODO 504 (`header.component.ts`) Configura la navegación entre páginas y activa el `routerLinkActive` con la clase `text-blue-700`