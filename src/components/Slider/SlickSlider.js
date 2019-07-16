import React from "react";
import Slider from "react-slick";
import './SlickSlider.scss';
import styled from "styled-components";

class SlickSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                { this.props.photos.map((photo, i) => (
                    <ProductImg key={i}>
                        <img src={photo} alt="slider"/>
                    </ProductImg>
                ))}
            </Slider>
        );
    }
}

const ProductImg = styled.div`
  text-align: center;
  max-width: 100%;
  height: 275px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
`;

export default SlickSlider;