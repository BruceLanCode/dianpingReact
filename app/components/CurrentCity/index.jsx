import React, { PureComponent } from 'react';

import './style.less';

class CurrentCity extends PureComponent {
    render() {
        return (
            <div className="current-city">
                <h2>{this.props.cityName}</h2>
            </div>
        );
    }
}

export default CurrentCity;