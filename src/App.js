import React, {Component} from 'react';
import 'normalize.css';
// import logo from './logo.svg';
// import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './App.scss'

class App extends Component {
    state = {
        sideDrawerOpen: false
    };

    //MENU OPENING
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    //MENU CLOSING
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});

    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen){
            backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }
        return (
            <div className="App">
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                <main className="main">
                    <p>HThis is the page content!!!</p>
                </main>

            </div>
        );
    }
}

export default App;
