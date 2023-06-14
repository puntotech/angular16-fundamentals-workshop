# Taller de fundamentos de Angular 16+

En este paso se desarolla el siguiente componente:

![Reactive Form](/docs/03.02-form-new-error-solved.gif)

## Angular Form Control State

Los estados de los controles de formularios de Angular describe el estado de un control de un formulario en los formularios de Angular.

| STATE     | DETAILS                                                                                              | CSS-Class       |
| --------- | ---------------------------------------------------------------------------------------------------- | --------------- |
| Pristine  | El usuario no ha modificado el control                                                               | `.ng-pristine`  |
| Dirty     | El usuario ha modificado el control                                                                  | `.ng-dirty`     |
| Touched   | El usuario ha interactuado con el control, e.g., `clicking` o `focusing`                             | `.ng-touched`   |
| Untouched | El usuario no ha interactuado con el control                                                         | `.ng-untouched` |
| Valid     | El valor del control del formulario encaja en las reglas de validación definidas en la aplicacion    | `.ng-valid`     |
| Invalid   | El valor del control del formulario no encaja en las reglas de validación definidas en la aplicación | `.ng-invalid`   |

[Documentación de Reactive Forms](https://angular.io/guide/form-validation#validator-functions)

# Ejercicios

Busca en el código fuente los siguientes ejercicios a desarrollar, si necesita ver la solución cambie a la rama con el prefijo `-solved`.

- TODO 311 (`hero.new.component.html`) Agrega el div con class `error` solo si el `formControlName` `name` ha sido `dirty` y es inválido.
- TODO 312 (`hero.new.component.html`) Agrega un div si el error del controlador `name` es requerido.
- TODO 313 (`hero.new.component.html`) Agrega un div si el error del controlador `name` es `heroNameValid`
- TODO 314 (`hero.new.component.html`) Agrega el div con class error solo si el `formControlName` name ha sido `dirty` y está inválido.
- TODO 315 (`hero.new.component.html`) Agrega un div si el error del controlador `name` es requerido
- TODO 316 (`hero.new.component.html`) Agrega un div si el error del controlador `name` es `heroNameValid`
- TODO 307 (`hero-item.html`) Ver la solución en la rama [03.03-form-new-ngForm-solved](https://github.com/puntotech/angular16-fundamentals-workshop/tree/03.03-form-new-ngFor-solved)
  - Itera usando `*ngFor` las habilidades (`powerstat`) de un héroe, al ser las habilidades un objeto transformalas a `key-value` usando la pipe “`keyvalue`”.
  - Utiliza la pipe `titlecase` para que el texto de la habilidad y que comience por mayúsculas
