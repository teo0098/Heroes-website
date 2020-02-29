import React, { useState, useEffect } from 'react';
import './Slider.scss'
import Slide from './Slide/Slide';
import SliderData from './SliderData';
import { Spring } from 'react-spring/renderprops';

const Slider = () => {
    let [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slider = setInterval(() => {
            setCurrentSlide(prevState => {
                if (prevState === 2) setCurrentSlide(0);
                else setCurrentSlide(++prevState);
            });
        }, 4000);
        return () => clearInterval(slider);
    }, []);

    return (
        <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 2000 }}
        >
            {props => (
                <div className="Slider__Spring" style={props}>
                    <div className="Slider">
                        <Slide img={SliderData.slides[currentSlide]}>
                            {SliderData.icons[currentSlide]}
                            {SliderData.headings[currentSlide]}
                        </Slide>
                    </div>
                </div>
            )}
        </Spring>
    );
};

export default Slider;