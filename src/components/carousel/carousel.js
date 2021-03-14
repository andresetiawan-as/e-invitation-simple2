import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.scss'

const carousel = ({data}) => {
    let settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    }
    return (
        <div>
            <Slider {...settings}>
                {
                    data ? 
                        data.map((e) => {
                            return(
                                <div key={e.name} className="container-carousel">
                                    <img
                                        className="image-carousel"
                                        src={e.src}
                                        loading="lazy"
                                    />
                                </div>
                            )
                        })
                    : null
                }
                {/* <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                    <p>Hello</p>
                </div>
                <div>
                    <h3>3</h3>
                    <p>See ....</p>
                    <p>Height is adaptive</p>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div> */}
            </Slider>
        </div>
    )
}

export default carousel
