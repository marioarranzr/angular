# Angular

### Comandos usados:

#### 1. HolaMundo
```shell
mpn install  # La primera vez
mpn start    # Lanzado dentro de la carpeta del proyecto (HolaMundo) compila, se queda en modo escucha y lanza el servidor en http://localhost:3000/
```

#### 2. STS

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
