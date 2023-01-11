import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockTest } from "../../mock/mockTest";
import { mockGeneros } from "../../mock/mockGeneros";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./misEstilos.css";
import { ContextoBackground } from "../../Contexto/ContextoBackground";
import VideoTrailer from "../../APIYoutobe/components/VideoTrailer";
import dirSuma from "./../../assets/suma.png";
import { ContextoCarrito } from "../../Contexto/ContextoCarrito";
import { Alert } from "react-bootstrap";
import swal from "sweetalert";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=e89c54fdd607bf1bf15474118f3abb7b&with_genres=";
const API_URL_1 = "https://api.themoviedb.org/3/movie/";
const API_URL_2 = "?api_key=e89c54fdd607bf1bf15474118f3abb7b&language=en-US";

const Detalles = (props) => {
  //se usa  para indentificar la pelicula, se puede encontrar en el router
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  let url = API_URL_1 + id + API_URL_2;

  useEffect(() => {
    fetch(API_URL_1 + id + API_URL_2)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  // console.log("data-->", movies);

  if (movies.genres) {
    // console.log(movies.genres);
    for (let index = 0; index < movies.genres.length; index++) {
      // console.log(movies.genres[index].name);
    }
  }

  // const peliculaObjeto = mockTest.results.find((e) => e.id === Number(id));
  let peliculaObjeto = movies;
  // const ObjGenerosd = [];
  // for (let i = 0; i < peliculaObjeto.genre_ids.length; i++) {
  //   const generos = mockGeneros.genres.find(
  //     (e) => e.id === Number(peliculaObjeto.genre_ids[i])
  //   );
  //   ObjGenerosd.push(generos.name);
  // }
  const styles = {
    header: {
      backgroundColor: "rgb(8 15 40 / 68%)",
      padding: "0 0 15% 0",
      // Color de texto
      color: "white",
    },
  };

  // //construir cadena de generos...
  // let cadenaSting = "";
  // for (let index = 0; index < ObjGenerosd.length; index++) {
  //   if (ObjGenerosd[index]) {
  //     cadenaSting = cadenaSting + ObjGenerosd[index] + ",";
  //   } else {
  //     cadenaSting = cadenaSting + ".";
  //   }
  // }
  // const newStr = cadenaSting.slice(0, -1) + ".";

  //construir cadena de generos...
  //   let cadenaSting1 = "";
  //   for (let index = 0; index < movies.genres.length; index++) {
  //     if (movies.genres[index]) {
  //       cadenaSting1 = cadenaSting1 + movies.genres[index].name + ",";
  //     } else {
  //       cadenaSting1 = cadenaSting1 + ".";
  //     }
  //   }
  //   const newStr1 = cadenaSting1.slice(0, -1) + ".";

  // console.log("test cadena",newStr1)

  // -------------------------------------------------------Context------------------------------------------
  const ctx = useContext(ContextoBackground);
  const enviarFondo =
    "https://image.tmdb.org/t/p/w500/" + peliculaObjeto.backdrop_path;
  ctx.setappTheme(enviarFondo);
  // -------------------------------------------------------Context------------------------------------------
  const ctxCarrito = useContext(ContextoCarrito);

  function activateLasers() {
    console.log(ctxCarrito);
    // VALIDAR QUE NO SE INGRESE MAS DE UNA PELICULA

    const peliculaObjeto1 = ctxCarrito.appCarrito.find(
      (e) => e.id === Number(peliculaObjeto.id)
    );

    if (peliculaObjeto1) {
      alarma("error","La Pelicula " + peliculaObjeto.title + " ya se encuentra en la lista.","Error",3000);
    } else {
      ctxCarrito.appCarrito.push(peliculaObjeto);
      ctxCarrito.setappCarrito(ctxCarrito.appCarrito);
      alarma("success","La Pelicula " + peliculaObjeto.title + " se añadio al carrito con exito.","Añadido",2000);
    }
    // console.log("holi",peliculaObjeto1);
    // }
    // if (ctxCarrito.appCarrito.length !== 0) {
    //   // console.log("caqwrfr",ctxCarrito.appCarrito[2] )
    //   // console.log("carfr",ctxCarrito.appCarrito.length )
    //   for (let i = 0; i < ctxCarrito.appCarrito.length; i++) {
    //     console.log(ctxCarrito.appCarrito[i].id == peliculaObjeto.id); //falso
    //     console.log(peliculaObjeto.id); //falso
    //     console.log(ctxCarrito.appCarrito[i].id); //falso
    //     if (ctxCarrito.appCarrito[i].id === peliculaObjeto.id) {
    //       // console.log("obj",ctxCarrito.appCarrito[i].id)
    //       console.log("Se encontro un elemento ya añadiodo");
    //       alarma("error");
    //     }

    //     if (ctxCarrito.appCarrito[i].id !== peliculaObjeto.id) {
    //       ctxCarrito.appCarrito.push(peliculaObjeto);
    //       ctxCarrito.setappCarrito(ctxCarrito.appCarrito);
    //       // console.log(ctxCarrito);
    //       alarma("success");
    //       console.log("desde el for");
    //       console.log("bay");
    //       break;
    //     }
    //   }
    // }
  }

  function alarma(tipo,mensaje,titulo,tiempo) {
    swal({
      title: titulo,
      text: mensaje,
      icon: tipo,
      timer: tiempo,
      buttons: false,
    });
  }

  //   swal({
  //     title: 'Añadido',
  //     text: 'La Pelicula '+peliculaObjeto.title+" se añadio al carrito",
  //     icon: 'error',
  //     timer: 2000,
  //     buttons: false,
  // })

  // console.log(peliculaObjeto.title + "| Official Trailer")
  return (
    <div style={styles.header}>
      <div className="container">
        <br />
        <Row>
          <Col xs={6} md={6}>
            <VideoTrailer
              nombreYoutobe={peliculaObjeto.title + "| Official Trailer"}
            ></VideoTrailer>
          </Col>
          <Col style={{ paddingLeft: "0vw" }} xs={10} md={6}>
            <div className="container" style={{ color: "#8da0bc" }}>
              <Row>
                <img
                  src={
                    "https://image.tmdb.org/t/p/w500/" +
                    peliculaObjeto.poster_path
                  }
                  alt={peliculaObjeto.title}
                  style={{ width: "20%", height: "20%", minWidth: "150px" }}
                />
              </Row>
              <Row>
                <Col md={4}>
                  <h1 style={{ color: "white" }}> {peliculaObjeto.title}</h1>
                </Col>
                <Col md={3}>
                  {/* <button onClick={activateLasers}> */}
                  {/* Icono de + para añadir pelicual al carro */}
                  <img
                    onClick={activateLasers}
                    src={dirSuma}
                    alt={peliculaObjeto.title}
                    style={{ width: "80px", height: "80px" }}
                  />
                  {/* </button> */}
                </Col>
              </Row>
              <Row>
                Genero:
                {/* {newStr} */}
              </Row>
              <Row>Fecha de estreno: {peliculaObjeto.release_date}</Row>
              <Row>Sinopsis: {peliculaObjeto.overview}</Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Detalles;
