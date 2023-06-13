# Taller de fundamentos de Angular 16+

En este paso se desarolla el siguiente componente:

![Single Component](/docs/02.01-communication-solved.gif)

## Communication between components

Un común patrón en Angular es compartir datos entre componentes padres y uno o más componentes hijos.

Este patrón es implementado con los decoradores `@Input()` y `@Output()`.

[@Input y @Output Documentación](https://angular.io/guide/inputs-outputs)

# Ejercicios

Busca en el código fuente los siguientes ejercicios a desarrollar, si necesita ver la solución cambie a la rama con el prefijo `-solved`.

- TODO 200 (`app.component.html`) Incluir el elemento `<app-hero-item>`
- TODO 201 (`hero-list.html`) Genere tantos componentes `app-hero-item` como `"heroes"` hay en el array `"heroes"`, enviar al componente `"app-hero-item"` cada objeto `hero` en
  el input denominado `"hero"`, además configurar el evento de output denominado `"powerstatsChange"` que invoque al método `onPowerstatsChange` que recibe el héroe emitido por el componente `app-hero-item`
- TODO 202 (`hero-item.ts`)
  - Crea un atributo `hero` del tipo `Hero`, que sea recibido por el componente padre a través del decorador `@Input`, y que este campo sea requerido.
  - Crea un evento de salida denominado `powerstatsChange` que emita objetos del tipo `HeroPowerstatsChange`
- TODO 203 (`hero-item.ts`) Emite un objeto del tipo `HeroPowerStatsChange` que esté compuesto por los siguientes datos:

```
{
    hero: this.hero,
    powerstat,
    value: -1,
}
```

- TODO 204 (`hero-item.ts`) Emite un objeto del tipo `HeroPowerStatsChange` que esté compuesto por los siguientes datos:

```
{
    hero: this.hero,
    powerstat,
    value: 1,
}
```
