import React, { useState } from 'react';
import Logo from './Logo/Logo';
import NavigationStyles from './Navigation.module.scss';
import Nav from './Nav/Nav';
import Login from './Login/Login';
import Menu from './Menu/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import {Transition} from 'react-spring/renderprops';

const Navigation = () => {
    const [respNav, setRespNav] = useState(false);

    const closeRespMenu = event => {
        if (event.target.id !== 'respOptions') setRespNav(false);
    }

    const openRespMenu = () => {
        setRespNav(true);
    }

    return (
        <div>
            <header className={NavigationStyles.Navigation}>
                <Logo/>
                <Nav/>
                <Login/>
            </header>
            <header className={NavigationStyles.ResNavigation}>
                <Menu openRespMenu={openRespMenu}>
                    <Logo/>
                </Menu>
                <Transition
                    items={respNav}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ display: "none" }}
                    config={{ duration: 300 }}
                >
                    {respNav => respNav && (props => 
                        <div id="respOptions" onClick={closeRespMenu} style={props} className={NavigationStyles.ResNavigation__options}>
                            <CancelIcon style={{ color: '#cfd8dc', fontSize: '40px', position: 'absolute', right: '1.5vw', top: '2vh', cursor: 'pointer' }}/>
                            <Nav/>
                            <Login/>
                        </div>
                    )}
                </Transition>
            </header>
        </div>
    );
};

export default Navigation;