import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import './style.less';

class Header extends PureComponent {
    clickHandle(){
        const { history,backRouter } = this.props;
        if(backRouter) {
            history.push(backRouter);
        }else{
            history.goBack();
        }
    }

    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-arrow-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default withRouter(Header);