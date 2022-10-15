import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import banner1 from '../../img/banner.png';
import banner2 from '../../img/banner2.JPG';
import banner3 from '../../img/banner3.JPG';

function Imagenes() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Imagenes;