import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';

import App from '../container';

class RouteMap extends Component {
    render(){
        return (
            <Router>
                <Route path="/" component={App} />
            </Router>
        );
    }
}

export default RouteMap;
