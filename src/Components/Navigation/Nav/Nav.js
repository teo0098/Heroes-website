import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import NavStyles from './Nav.module.scss';

const Nav = () => {
    const links = [useRef(null), useRef(null)];

    const castShadow = (index) => {
        for (let i = 0; i < links.length; i++) {
            if (i !== index) {
                links[i].current.style.color = '#616161';  
                links[i].current.style.transition = 'all 0.2s ease-out'; 
            }
        }
    };

    const takeShadow = () => {
        links[0].current.style.color = '#cfd8dc';
        links[1].current.style.color = '#cfd8dc';
    };

    return (
        <React.Fragment>
            <nav className={NavStyles.Nav}>
                <ul className={NavStyles.Nav__ul}>
                    <li className={NavStyles.Nav__li}>
                        <Link ref={links[0]} onMouseEnter={() => castShadow(0)} onMouseLeave={takeShadow}
                        className={NavStyles.Nav__Link} to="/">
                            <i className="fas fa-home"></i>
                            <span className={NavStyles.Nav__span}>Home</span>
                        </Link>
                    </li>
                    <li className={NavStyles.Nav__li}>
                        <Link ref={links[1]} onMouseEnter={() => castShadow(1)} onMouseLeave={takeShadow}
                        className={NavStyles.Nav__Link} to="/heroes">
                            <i className="fas fa-user-alt"></i>
                            <span className={NavStyles.Nav__span}>Characters</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    ) 
};

export default Nav;