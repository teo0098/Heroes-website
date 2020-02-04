import marvelPic from '../../../assets/marvel1.jpg';
import dcPic from '../../../assets/dc1.jpg';
import xmenPic from '../../../assets/xmen1.jpg';
import React from 'react';

const slides = [marvelPic, dcPic, xmenPic];
const headings = [
    "Discover heroes",
    "Get some details of specific hero",
    "Join us and assemble your powerful crew"
];

const icons = [<i class="fas fa-map-signs Slide__icon"></i>, <i class="fas fa-book Slide__icon"></i>, <i class="fas fa-users Slide__icon"></i>];

export default { slides, headings, icons };