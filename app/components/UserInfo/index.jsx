import React, {PureComponent} from 'react';
import './style.less';

class UserInfo extends PureComponent {
    render() {
        return (
            <div className="userinfo-container">
                <p>
                    <i className="icon-user-tie"></i>
                    &nbsp;
                    <span>{this.props.username}</span>
                </p>
                <p>
                    <i className="icon-location"></i>
                    &nbsp;
                    <span>{this.props.city}</span>
                </p>
            </div>
        );
    }
}

export default UserInfo;