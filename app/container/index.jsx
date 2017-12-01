import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';

class App extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div>huangxi
                <Route exec path="/" component={Home}></Route>
            </div>
        );
    }
}

export default App;