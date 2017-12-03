import React, {PureComponent} from 'react';

import './style.less';

class Login extends PureComponent {
    constructor() {
        super();
        this.state = {
            username: ''
        };
    }

    changeHandle(e) {
        this.setState({
            username: e.target.value
        });
    }

    clickHandle() {
        const username = this.state.username;
        const loginHandle = this.props.loginHandle;
        loginHandle(username);
    }

    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-mobile"></i>
                    <input type="text"
                        placeholder="输入手机号"
                        value={this.state.username}
                        onChange={this.changeHandle.bind(this)}/>
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>登陆</button>
            </div>
        );
    }
}

export default Login;