import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.scss';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><a href="/">LOGO</a></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">O mnie</a></li>
                    <li><a href="/">Oferta</a></li>
                    <li><a href="/">Cennik</a></li>
                    <li><a href="/">Kontakt</a></li>
                    <li><a href="/">Zaufali mi</a></li>
                </ul>
            </div>
        </nav>
    </header>

);

export default toolbar;