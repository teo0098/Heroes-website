import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Menu.scss';

const Menu = props => (
    <div className="Menu">
        {props.children}
        <MenuIcon onClick={props.openRespMenu} style={{ margin: '0 2vw', color: '#cfd8dc', fontSize: '32px', cursor: 'pointer' }}/>
    </div>
);

export default Menu;