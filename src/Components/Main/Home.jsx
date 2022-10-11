import { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { ContextoBackground } from "../../Contexto/ContextoBackground";
import Peliculas from "../Header/Peliculas";
import slide1 from "./../../assets/slide1.jpg";
import slide2 from "./../../assets/slide2.jpg";
import slide3 from "./../../assets/slide3.jpg";
import Imagenes from "./Imagenes";
import fondo from "./../../assets/fondo.png";
export const Home = () => {
  const ctx = useContext(ContextoBackground);
  ctx.setappTheme(fondo);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Imagenes direcion={slide1} />
        </Carousel.Item>
        <Carousel.Item>
          <Imagenes direcion={slide2} />
        </Carousel.Item>
        <Carousel.Item>
          <Imagenes direcion={slide3} />
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <Peliculas></Peliculas>
      </div>
    </>
  );
};
