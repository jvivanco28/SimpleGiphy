import React, { Component } from 'react';
import Routes from './components/Routes';
import Navigation from './components/Nav';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Routes />
            </div>
        );
    }
}

export default App;
