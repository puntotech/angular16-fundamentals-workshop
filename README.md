# Taller de fundamentos de Angular 16+

En este paso se desarolla el siguiente componente:

![HttpClient](/docs/06.01-http-solved.gif)

## HttpClient en Angular

La mayoría de las aplicaciones front-end necesitan comunicarse con un servidor a través del protocolo HTTP para descargar o cargar datos y acceder a otros servicios back-end. Angular proporciona una API HTTP de cliente para aplicaciones Angular, la clase de servicio `HttpClient` en `@angular/common/http`.

La clase `HttpClient` funciona con Observables. Por tanto, `HttpClient` de Angular retorna observables de llamadas de método `HTTP`. Por ejemplo, `http.get('/api')` retorna un observable. Esto proporciona varias ventajas sobre las API HTTP basadas en promesas:

- Los observables no mutan la respuesta del servidor (como puede ocurrir a través de llamadas .then() encadenadas en promesas). En su lugar, puede utilizar una serie de operadores para transformar los valores según sea necesario.
- Las solicitudes HTTP se pueden cancelar a través del método de cancelación de suscripción().
- Las solicitudes se pueden configurar para obtener actualizaciones de eventos de progreso.
- Las solicitudes fallidas se pueden volver a intentar fácilmente.

Considere crear un servicio Observable que procesará las solicitudes para el `store` de nuestra aplicación.
Los componentes/páginas se suscribirían al servicio para procesar solicitudes.
Para simplificar nuestra tarea de delegar al template los datos procesados disponemos de la pipe `AsyncPipe` la cual se suscribe a un observable y retorna el último valor que ha emitido el observable.

En esta rama, se crea un Observable simple que publica una lista de elementos (heroes) a los que está suscrito un Observador (componente).

Los observables son declarativos, es decir, se define una función para publicar valores, pero no se ejecuta hasta que un observador (consumidor) se suscribe a él (por eso es muy importante invocar al método `subscribe` del observable).
Por otro lado, el consumidor suscrito recibe notificaciones hasta que se completa la función o hasta que cancela la suscripción.

El observador tiene tres identificadores/callbacks para usar los datos que recibe (desde el observable):

- `next` - Obligatorio. Una función (`callback`) para cada valor emitido después de que comienza la ejecución.
- `error` - Opcional. Una función (`callback`) para una notificación de error. Un error detiene la ejecución del observable.
- `complete` - Opcional. Una función (`callback`) para la notificación de ejecución completa/terminada. Los valores retrasados (en el tiempo) pueden continuar entregándose a la función `next` después de que se complete la ejecución.

- [Documentación sobre http](https://angular.io/guide/http)

# Ejercicios

Busca en el código fuente los siguientes ejercicios a desarrollar, si necesita ver la solución cambie a la rama con el sufijo `-solved`.

- TODO 601 (`hero.service.ts`) Adaptar `hero.service` usando `httpClient`.
- TODO 602 (`hero-new.component.ts`) Agrega un nuevo hero, si todo va correcto navega a la página /home en caso contrario muestra el error.
- TODO 603 (`hero-update.component.ts`) Actualiza un nuevo hero, si todo va correcto navega a la página /home en caso contrario muestra el error.
