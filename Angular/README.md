# Angular

### Comandos usados:

#### 1. HolaMundo
```shell
mpn install  # La primera vez
mpn start    # Lanzado dentro de la carpeta del proyecto (HolaMundo) compila, se queda en modo escucha y lanza el servidor en http://localhost:3000/
```

#### 2. SPA

##### Creación, configuración inicial y arranque del servidor
```shell
ng new SPA                                  # Crear el proyecto
ng serve                                    # Lanzado dentro de la carpeta del proyecto (SPA) compila, se queda en modo escucha y lanza el servidor en http://localhost:4200/
npm install bootstrap@4.0.0-alpha.6 --save  # Con el --save lo salvamos en las dependencias del proyecto, el package.json
npm install jquery --save
npm install tether --save
```

##### Components
```shell
ng g c components/shared/navbar   # Crea un component para la navbar y lo colocamos en components/shared
ng g c components/home            # Crea un component para la home y lo colocamos en components
ng g c components/about           # Crea un component para la página de about y lo colocamos en components
ng g c components/heroes -is      # Crea un component para la página heroes y lo colocamos en components (con *-is* evitamos que se creen los estilos)
```

>Para hacer las animaciones entre cambios de página más suaves añadiremos las clases `animated fadeIn` y para que se cargue más rápidamente, añadimos también `fast`

>En un component tenemos el `constructor` y el método que se crea por defecto `ngOnInit()`. El primero se lanza antes; el `ngOnInit()` cuando se renderiza la página

#### 3. Pipes

```shell
{{variable | uppercase}}            # Transforma en mayúsculas la variable
{{variable | lowercase}}            # Transforma en minúsculas la variable
{{variable | slice:3}}              # Recorta la variable desde la posición 3. Ej: Mario -> io
{{variable | slice:0:3}}            # Recorta la variable desde la posición 0 hasta la 3. Ej: Mario -> Mar
{{variable | slice:0:3 | lowercase} # Se pueden combinar. Ej: Mario -> mar
{{array | slice:1:5}}               # Aplicable para arrays. Ej: array = [1,2,3,4,5,6,7,8,9,10]; -> [2,3,4,5]. Se puede usar en variables HTML como <li *ngFor="let item of array | slice:5:20">{{item}}</li>
```
>El formato del slice es `array_or_string_expression | slice:start[:end]`

```shell
{{numero | number:'3.0-2'}}         # Se indica la cantidad de dígitos para parte entera, mínimo de dígitos para parte decimal y máximo. Ej: 3.1415926 -> 003.14
{{numero | number:'.1-1'}}          # Ej: 3.1415926 -> 3.1
{{numero | percent}}                # Ej: 0.234 -> 23.4%
{{numero | percent:'2.2-2'}}        # También se puede establecer un digitInfo Ej: 3.1415926 -> 3.1
```
>El formato del digitInfo es siempre un string formado por `'{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}'` y si no se indica toma su valor por defecto que es minIntegerDigits=1, minFractionDigits=0, maxFractionDigits=3

```shell
{{salario | currency}}                    # Ej: 1234.5 -> USD1,234.50
{{salario | currency:'EUR'}}              # Ej: 1234.5 -> EUR1,234.50
{{salario | currency:'EUR':true}}         # Ej: 1234.5 -> €1,234.50
{{salario | currency:'EUR':true:'4.0-0'}} # Ej: 1234.5 -> €1,235
```
>El formato del currency esta formado por `[:currencyCode[:symbolDisplay[:digitInfo]]]` y si no se indica toma su valor por defecto que es minIntegerDigits=1, minFractionDigits=0, maxFractionDigits=3

```shell
{{heroe | json}}  # Al pasar una variable de tipo JSON, si lo intentamos imprimir únicamente con {{heroe}} nos saldrá [object Object], pero si le pasamos el JsonPipe nos saldrá el contenido y además lo metemos entre etiquetas HTML <pre>, formateado:
{
  nombre: "Logan",
  clave:  "Wolverine",
  edad:   500,
  direccion: {
    calle: "Calle Falsa",
    numero: 123
  }
}
```
