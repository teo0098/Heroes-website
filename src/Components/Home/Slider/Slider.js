import React, { useState, useEffect } from 'react';
import './Slider.scss'
import Slide from './Slide/Slide';
import SliderData from './SliderData';

const Slider = () => {
    let [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slider = setInterval(() => {
            setCurrentSlide(prevState => {
                if (prevState === 2) setCurrentSlide(0);
                else setCurrentSlide(++prevState);
            });
        }, 5000);
        return () => clearInterval(slider);
    }, []);

    return (
        <div className="Slider">
            <Slide img={SliderData.slides[currentSlide]}>
                {SliderData.icons[currentSlide]}
                {SliderData.headings[currentSlide]}
            </Slide>
        </div>
    );
};

export default Slider;