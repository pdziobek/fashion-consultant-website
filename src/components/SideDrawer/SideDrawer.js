import React from "react";
import './SideDrawer.scss';


const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">O mnie</a></li>
                <li><a href="/">Oferta</a></li>
                <li><a href="/">Cennik</a></li>
                <li><a href="/">Kontakt</a></li>
                <li><a href="/">Zaufali mi</a></li>
            </ul>
        </nav>
    )
};

export default sideDrawer;