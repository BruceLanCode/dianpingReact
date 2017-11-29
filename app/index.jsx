import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RouteMap from './router/routeMap';

import './static/css/common.less';
import './static/css/font.less';

const store = configureStore();

render(
    <div>lantu!!!! <i className="icon-arrow-left"></i></div>,
    document.getElementById('root')
);