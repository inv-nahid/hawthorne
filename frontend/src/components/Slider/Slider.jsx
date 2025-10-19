import React from "react";
import "./slider.css";

import img1 from "../../assets/sliderImages/1.webp";
import img2 from "../../assets/sliderImages/2.webp";
import img3 from "../../assets/sliderImages/3.webp";
import img4 from "../../assets/sliderImages/4.avif";
import img5 from "../../assets/sliderImages/5.avif";
import img6 from "../../assets/sliderImages/6.avif";
import img7 from "../../assets/sliderImages/7.avif";
import img8 from "../../assets/sliderImages/8.webp";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Slider = () => {
    return (
        <div className="carousel">
            <div className="track">
                <div className="group">
                    {images.map((img, i) => (
                        <div className="card" key={i}>
                            <img src={img} alt={`Slide ${i + 1}`} />
                        </div>
                    ))}
                </div>

                <div className="group" aria-hidden="true">
                    {images.map((img, i) => (
                        <div className="card" key={`dup-${i}`}>
                            <img src={img} alt={`Slide ${i + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
