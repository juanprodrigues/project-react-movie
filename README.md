# Proyecto de React Movie
Proyecto integrador 
## Pre-requisitos
1. Tener instalado node.

     *node -v* para saber la version que se esta usando, en este caso para el desarrolo se usa es la *v16.17.0*.
2. Instalar las librerias que se listan el el package.json

    *npm install* o *npm i* Instala el paquete indicado en node_modules/.
3. Configurar variables de entorno, no es necesario, solo afecta al video de youtobe y el registro que usa Firebase.

```
REACT_APP_KEY=
REACT_APP_apiKey=
REACT_APP_authDomain=
REACT_APP_projectId=
REACT_APP_storageBucket=
REACT_APP_messagingSenderId=
REACT_APP_appId=
REACT_APP_measurementId=
```

Tener instalado node

## Funcionalidades 
#### Buscar por nombre de pelicula

Pantalla principal de la aplicación.

<img src="https://user-images.githubusercontent.com/85085962/211642195-4fcba1c8-0d99-496e-89e8-370ec8a776a7.png" width="900px"/>

Para esta barra de búsqueda se usa un useEffect que actualiza la búsqueda en función a la palabra que se ingresa

<img src="https://user-images.githubusercontent.com/85085962/211642461-60cfd95f-519c-41d8-bb04-710b32130542.png" width="900px"/>

En el caso de no hallar ninguna película con ese nombre se muestra la siguiente página.

<img src="https://user-images.githubusercontent.com/85085962/211642577-e6a26dba-496f-4b67-98ba-b058c6c0e0ca.png" width="900px"/>

#### Buscar por género
Se lista un Dropdown con géneros disponibles.

<img src="https://user-images.githubusercontent.com/85085962/211642748-89e9442e-b737-44ba-b82a-939c36d6df79.png" width="900px"/>

En la barra de dirección se observa el id del género que se seleccionó, luego en la aplicación se puede ver el nombre del género sumado a su contenido.

<img src="https://user-images.githubusercontent.com/85085962/211642937-a6236c6b-0fa8-4259-9dd9-a1b46100bd69.png" width="900px"/>

#### Añadir al carrito
Tenemos un elemento amarillo con el simbolo de una suma, el cual nos permite añadir la pelicula que se escoje, a un carrito para luego tener otras acciones.

<img src="https://user-images.githubusercontent.com/85085962/211643287-5e04f4a7-939c-4fe3-bbae-6fcc0f266350.png" width="900px"/>

Cuando se le da click, se puede observar que nos muestra una alerta indicando que esa película se añadió con éxito al carrito.

<img src="https://user-images.githubusercontent.com/85085962/211643957-dd51513a-9a00-4525-bf46-cb7a615cc2ca.png" width="900px"/>

#### Validación al añadir
Cuando se le da crick(1) se puede observar que nos muestra una advertencia indicando que esa pelicula ya esta en el carrito

<img src="https://user-images.githubusercontent.com/85085962/211643784-5aa5f331-e4a3-4095-b946-9d7f5c276bae.png" width="900px"/>

#### Logeo por medio de firebase
Puede ser más bonito
#### Consulta de video trailer en youtube 
En una versión ya desplegada, la api de películas sigue funcionando bien, pero para esta versión hay un inconveniente que no se reconoce provocando un problema en la búsqueda del titulo

Link de la vercion anterior --> [movie-react-cac](https://movie-react-cac.netlify.app/)


#### No siempre estará funcional por tema de superación de consultas
Si bien no corresponde a la película selecciona como se menciono anteriormente, se puede observar que la api está funcionando.

<img src="https://user-images.githubusercontent.com/85085962/211644033-0662252d-c5d7-4f75-a55b-84de43b561d7.png" width="900px"/>

### Cambio de Fondo de la aplicación en función de la película seleccionada
Si se observa, hay una imagen relacionada la película que se seleccionó

<img src="https://user-images.githubusercontent.com/85085962/211644651-28a3c630-9a03-410e-9301-b485cfd4852d.png" width="900px"/>

## Herramientas que se usaron
### Hook
#### useEffect
 Se usó en su mayoría para cambiar estado de variables.
 por ejemplo en el siguiente caso
 
#### useContext
Su principal uso es para poder usarlo como puente que lleva cambios entre componente padres e hijos mediante un useState, gracias a esto se puede cambiar el fondo en función de la película que se selecciona
#### useState
Es uno de los Hook más usados por su función y alcance.
#### Router
Las rutas que se usan, se pueden encontrar en el siguiente directorio


```
project-react-movie/src/Routes/RoutesApp.jsx 
```
Componente 
```
const RoutesApp = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/peliculas"
            caseSensitive={false}
            element={<Peliculas />}
          />
          <Route
            path="/ingresar"
            caseSensitive={false}
            element={<AppFirebase />}
          />
          <Route path="/carrito" caseSensitive={false} element={<Carrito />} />
          <Route
            path="/registrate"
            caseSensitive={false}
            element={<Registrate />}
          />

          <Route
            path="/"
            // caseSensitive={false}
            element={<Home />}
          />
          <Route path="detalles/:id" element={<Detalles />}></Route>
          <Route path="genero/:id" element={<Generos />}></Route>

          <Route path="search/" element={<SearchComponent />}></Route>

          {/* en elcaso que no se encuentre redireciona a un 404 */}
          <Route
            path="*"
            // caseSensitive={false}
            element={<Error />}
          />
        </Routes>
      </Router>
    </div>
  );
};

```


## Funcionalidades 
#### Buscar por nombre de pelicula
Pantalla principal

<img src="https://user-images.githubusercontent.com/85085962/211642195-4fcba1c8-0d99-496e-89e8-370ec8a776a7.png" width="900px"/>

use un useeffect que actualiza la busqueda 

<img src="https://user-images.githubusercontent.com/85085962/211642461-60cfd95f-519c-41d8-bb04-710b32130542.png" width="900px"/>

en el caso de no hallar ninguna pelicula con ese nombre

<img src="https://user-images.githubusercontent.com/85085962/211642577-e6a26dba-496f-4b67-98ba-b058c6c0e0ca.png" width="900px"/>

#### Buscar Por genero
se Lista in Dropdown con generos

<img src="https://user-images.githubusercontent.com/85085962/211642748-89e9442e-b737-44ba-b82a-939c36d6df79.png" width="900px"/>

En la barra de direcion se observa el id del genero que se selecion, luego en la aplicaion se puede ver el nombre del genero sumado a su contenido

<img src="https://user-images.githubusercontent.com/85085962/211642937-a6236c6b-0fa8-4259-9dd9-a1b46100bd69.png" width="900px"/>

#### Añadir al carrito
Tenomos un elemento amarillo con el simbolo de una suma, el cual nos permite añadir la pelicula que se escoje , a un carrito para luego tener otros acciones.

<img src="https://user-images.githubusercontent.com/85085962/211643287-5e04f4a7-939c-4fe3-bbae-6fcc0f266350.png" width="900px"/>

Cuando se le se puede observar que nos muestra una alerta indicando que esa pelicula se añadio con exito al carrito

<img src="https://user-images.githubusercontent.com/85085962/211643957-dd51513a-9a00-4525-bf46-cb7a615cc2ca.png" width="900px"/>

#### validacion al añadir
Cuando se le da crick(1) se puede observar que nos muestra una advertencia indicando que esa pelicula ya esta en el carrito

<img src="https://user-images.githubusercontent.com/85085962/211643784-5aa5f331-e4a3-4095-b946-9d7f5c276bae.png" width="900px"/>

#### Logeo por medio de firebase
#### Consulta de video trailer en youtobe 


#### No siempre estara fucional por tema de superacion de consultas
Si bien no corresponde ala pelicula seleciona , se puede observar que la api esta fuincionando.

<img src="https://user-images.githubusercontent.com/85085962/211644033-0662252d-c5d7-4f75-a55b-84de43b561d7.png" width="900px"/>

### Cambio de Fondo de la aplicacion en fucnion de la pelicula seleccionada
Si se observa, hay una imagen relacina a al pelicula seleciona

<img src="https://user-images.githubusercontent.com/85085962/211644651-28a3c630-9a03-410e-9301-b485cfd4852d.png" width="900px"/>

## Herramientas que se usaron
### Hook
#### useEffect
 Se uso en su mayoria para cambiar estado de variales.
 por ejemplo en el siquiente caso
 
 Documentacion: [Use Effect](https://es.reactjs.org/docs/hooks-effect.html)

#### useContext
#### useState
#### Router

![carbon](https://user-images.githubusercontent.com/85085962/211648358-71bc4beb-b15e-4f29-9cfb-ffd43b0d623d.png)


#### Bootstrap
### 
###

>>>>>>> bd3e09f58164c6756c84bccaef585ad11783b4b9
