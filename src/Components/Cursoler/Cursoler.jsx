import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Cursoler.css'; // Your custom styles if needed

const Cursoler = () => {
    return (
        <Carousel className='custom-cursoler'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://viaveda-images.s3.ap-south-1.amazonaws.com/banner-images/1742883948902.webp"
                    alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://viaveda-images.s3.ap-south-1.amazonaws.com/banner-images/1734599216407.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://viaveda-images.s3.ap-south-1.amazonaws.com/banner-images/1730273067682.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Cursoler;