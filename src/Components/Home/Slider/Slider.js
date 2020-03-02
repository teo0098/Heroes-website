import React, { useState, useEffect } from 'react';
import './Slider.scss'
import Slide from './Slide/Slide';
import SliderData from './SliderData';
import { Spring } from 'react-spring/renderprops';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Slider = () => {
    let [currentSlide, setCurrentSlide] = useState(0);

    const goForth = () => {
        setCurrentSlide(prevState => {
            if (prevState === 2) setCurrentSlide(0);
            else setCurrentSlide(++prevState);
        });
    };

    const goBack = () => {
        setCurrentSlide(prevState => {
            if (prevState === 0) setCurrentSlide(2);
            else setCurrentSlide(--prevState);
        });
    };

    useEffect(() => {
        const slider = setTimeout(() => {
            goForth();
        }, 4000);
        return () => clearTimeout(slider);
    }, [currentSlide]);

    return (
        <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 2000 }}
        >
            {props => (
                <div style={props}>
                    <div className="Slider">
                        <ArrowForwardIosIcon onClick={goBack} style={{ 
                            backgroundColor: '#cfd8dc',
                            color: '#212121', 
                            position: 'absolute', 
                            zIndex: '1000',
                            left: 0,
                            margin: '0 2vw',
                            cursor: 'pointer',
                            fontSize: '32px',
                            transform: 'rotateY(180deg)',
                            borderRadius: '0.4vh' }}/>
                        <ArrowForwardIosIcon onClick={goForth} style={{ 
                            backgroundColor: '#cfd8dc',
                            color: '#212121', 
                            position: 'absolute', 
                            zIndex: '1000',
                            right: 0,
                            margin: '0 2vw',
                            cursor: 'pointer',
                            fontSize: '32px',
                            borderRadius: '0.4vh' }}/>
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