import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
const Car =()=> {
    return (
          <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 ImagenBanner"
                src="../public/images/Computomas4.png   "
                alt=""
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 ImagenBanner"
                src="../public/images/Elect2.png"
                alt=""
                />

                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
               className="d-block w-100 ImagenBanner"
               src="../public/images/Carpinteria2.png"
               alt=""
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
               className="d-block w-100 ImagenBanner"
               src="../public/images/Mecanica.png"
               alt=""
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            
    );
}
export default Car;
