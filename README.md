# Proyecto de React Movie
Proyecto integrador realizado para la finalizacion del curso REACT JS FRONT END 2022 dictado por [Codo a Codo](https://www.buenosaires.gob.ar/educacion/codo-codo)

Link donde se encuentra en deploy del proyecto-> [https://proyecto-integrador-movie.netlify.app/](https://proyecto-integrador-movie.netlify.app/)
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
Cuando se le da click se puede observar que nos muestra una advertencia indicando que esa pelicula ya esta en el carrito.

<img src="https://user-images.githubusercontent.com/85085962/211691656-dfde6ad4-96e5-429e-944a-56b97dc148ee.png" width="900px"/>

#### Consulta de video trailer en youtube 
En una versión ya desplegada, la api de películas sigue funcionando bien, pero para esta versión hay un inconveniente que no se reconoce provocando un problema en la búsqueda del titulo

Link de la vercion anterior --> [movie-react-cac](https://movie-react-cac.netlify.app/)


#### No siempre estará funcional por tema de superación de consultas
Si bien no corresponde a la película selecciona como se menciono anteriormente, se puede observar que la api está funcionando.

<img src="https://user-images.githubusercontent.com/85085962/211644033-0662252d-c5d7-4f75-a55b-84de43b561d7.png" width="900px"/>

### Cambio de Fondo de la aplicación en función de la película seleccionada
Si se observa, hay una imagen relacionada la película que se seleccionó

<img src="https://user-images.githubusercontent.com/85085962/211644651-28a3c630-9a03-410e-9301-b485cfd4852d.png" width="900px"/>

### Carrito con peliculas que se añaden
En esta pagina se podemos ver las las pelicuas que se añadieron, con detalles importantes, sumado al total qui se tiene que pagar,
Como fucionalidad a futuro se planea hacer una secuencia de pasas para simular una compra exitosa.
<img src="https://user-images.githubusercontent.com/85085962/211691181-9b5aada9-6496-4227-92cd-27547c3e1be7.png" width="900px"/>

### Validaciones en el registro.

Campos de Contraseña vacios 

<img src="https://user-images.githubusercontent.com/85085962/212477468-cf2ddd05-4c70-4b4e-8eb8-f589d6ad5d43.png" width="400px"/>

Todos los campos vacios 

<img src="https://user-images.githubusercontent.com/85085962/212477469-b293aa9f-0bbd-455a-a8aa-150b55b56d75.png" width="400px"/>
Correo vacion

<img src="https://user-images.githubusercontent.com/85085962/212477470-cfc20421-a6ec-4449-95c8-4874d7ea433c.png" width="400px"/>

Si se usa un formato incorrecto

<img src="https://user-images.githubusercontent.com/85085962/212477471-efd0e1c7-c05d-4978-b513-8b2ee65fa441.png" width="400px"/>

Las contraseñas no coinciden

<img src="https://user-images.githubusercontent.com/85085962/212477472-dd50fef2-e460-4550-b5fc-e005a179ad38.png" width="400px"/>

El Correo ingresado ya esta registrado en la base de datos de firebase

<img src="https://user-images.githubusercontent.com/85085962/212477632-a059529a-eb24-438a-b6ef-08af6c5b66fa.png" width="400px"/>

Por defecto, al almacenar las contraseñas el Firebase tiene que ser mañor que 6 caracteres(en la imagen se usa 5 caracteres)

<img src="https://user-images.githubusercontent.com/85085962/212477634-be403424-5b87-49f3-94e2-c33feb6dd36e.png" width="400px"/>

Si se logea , podemos observar que el navbar vamos a ver el correo de nuestro usuario logeado.

NOTA: Si se hace F5 o recarga el dom, se deslogea , para restablecer el logeo se tiene que ingresar de nuevo para restablecer la seccion

![image](https://user-images.githubusercontent.com/85085962/212526613-56713762-9fdb-4e38-9654-ced3c3e4a276.png)

Session iniciada, se puede observar un historial que se encuentra en la base de Firebase.

Cada pelicula listaada esta linkeada a los detalles de la misma.

![image](https://user-images.githubusercontent.com/85085962/212526756-b0f20660-8adb-4ab6-934c-93e4efc5f24e.png)

Si tenemos datos guardados asociados al correo ya registrado,se llenara el carrito con los elementos ya guardados en una session anterior.

**TO DO**-> Falta implementar un **delete/update** para cada pelicula de la lista y se vea afectado la base de datos. 

![image](https://user-images.githubusercontent.com/85085962/212526835-158d497e-c2c5-482c-a287-54b62a4d710f.png)



### Tablas en Firebase.

Se crea una colecion por cada usuario registrado.

Cuando se añade una pelicula al carrito se crea un nuevo documento

<img src="https://user-images.githubusercontent.com/85085962/212526511-516f93b4-f0b0-45a2-a7d5-104753820ac6.png" width="900px"/>

## Herramientas que se usaron
### Hook
#### useEffect
 Se usó en su mayoría para cambiar estado de variables.
 
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
