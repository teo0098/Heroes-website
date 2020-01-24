import React from 'react';
import LogoStyles from './Logo.module.scss';

const Logo = () => {
    const iconName = `fas fa-mask ${LogoStyles.Logo__i}`;
    return (
        <div className={LogoStyles.Logo}>
            <i className={iconName}></i>
            <h2 className={LogoStyles.Logo__h2}>Heroes</h2>
        </div>
    )
};

export default Logo;