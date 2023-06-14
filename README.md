# Taller de fundamentos de Angular 16+

En este paso se desarolla el siguiente componente:

![Single Component](/docs/01.01-single-component-solved.gif)

## Standalone Components

El componente es un `building block` de Angular. Cada componente define una clase que contiene datos y lógica de la aplicación, y es asociado con un template HTML que define una vista a ser mostrada en un entorno objetivo.

Cada `Hero` está definido por los siguientes atributos:

```
export interface Hero {
  id: number;
  name: string;
  image: string;
  alignment: "good" | "bad";
  powerstats: PowerStats;
}

export interface PowerStats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export type PowerStat = keyof PowerStats;
```

# Ejercicios

Busca en el código fuente los siguientes ejercicios a desarrollar, si necesita ver la solución cambie a la rama con el sufijo `-solved`.

- TODO 100 (`app.component.html`) Incluir el elemento `<app-hero-item>`.
- TODO 101 (`hero-item.ts`): Crear `isHeroVillain` el cual comprueba si el `alignment` de un héroe es `"bad"`.
- TODO 102 (`hero-item.ts`)
  - Comprueba si la habilidad (`powerstat`) es menor que 100 y le añade una unidad.
  - Comprueba si la habilidad (`powerstat`) es mayor que 0 y le resta una unidad.
- TODO 103 (`hero-item.html`) Muestra el nombre del héroe.
- TODO 104 (`hero-item.html`) Muestra la inteligencia.
- TODO 105 (`hero-item.html`) Crea un button con el símbolo +/- e invoca a los métodos `decrementPowerStats` o `incrementPowerStat` de la habilidad `intelligence`. Los botones estarán deshabilitados para restar cuando la `intelligence` sea 0 y estarán deshabilitados para sumar cuando la `intelligence` sea 100.
- TODO 106 (`hero-item.html`) Igual que TODO 104 y TODO 105 pero para `speed`, `strength`, `durability`, `power`, `combat`.
