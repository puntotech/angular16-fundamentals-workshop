# Taller de fundamentos de Angular 16+

En este paso se desarolla el siguiente componente:

![Reactive Form](/docs/03.01-form-new-solved.gif)

## Reactive Form

Angular proporciona dos diferentes aproximaciones para gestionar la entrada de usuarios a través de formularios:

- Reactivos.
- Dirigidos por plantilla.

Angular provides two different approaches to handling user input through forms: reactive and template-driven.
Both capture user input events from the view, validate the user input, create a form model and data model to update, and provide a way to track changes.

[Documentación de Reactive Forms](https://angular.io/guide/reactive-forms)

# Ejercicios

Busca en el código fuente los siguientes ejercicios a desarrollar, si necesita ver la solución cambie a la rama con el prefijo `-solved`.

- TODO 301 (`hero.new.component.ts`) Inyecta el servicio `FormBuilder` en un atributo llamado `formBuilder` que sea privado y de solo lectura
- TODO 302 (`hero.new.component.ts`) Crea un atributo denominado `heroForm` que sea del tipo `FormGroup` que inicialmente se cree usando `formBuilder`, con los controles descritos en el código.
- TODO 303 (`hero.new.component.html`) Agregar a la etiqueta form, que cuando sea enviado `(ngSubmit)` se invoque el método `addHero`, y que el `formGroup` asociado sea el atributo `heroForm`.
- TODO 304 (`hero.new.component.html`) Agregar el `formControlName` del input al controlador `name`
- TODO 305 (`hero.new.component.html`) Agregar el `formGroupName` `powerstats` al elemento DIV y los `formControlName` de las diferentes habilidades a los elementos `input`
- TODO 306 (`hero.new.component.html`) Agregar el `formControlName` a `image` y `alignment`
