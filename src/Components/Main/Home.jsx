import { Carousel } from "react-bootstrap"
import slide1 from './../../assets/slide1.jpg'
import slide2 from './../../assets/slide2.jpg'
import slide3 from './../../assets/slide3.jpg'

export const Home = () => {
  return (
      <>
          <Carousel>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={slide1}
                      alt="First slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={slide2}
                      alt="Second slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={slide3}
                      alt="Third slide"
                  />
              </Carousel.Item>
          </Carousel>
      </>
  );
}