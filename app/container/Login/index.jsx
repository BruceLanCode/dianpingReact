import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/Header';
import LoginComponent from '../../components/Login';

import * as userInfoActionsFromOtherFile from '../../action/userInfo';

class Login extends PureComponent {
    constructor() {
        super();
        this.state = {
            checking: true
        };
    }

    loginHandle(username) {
        // const actions = this.props.userInfoActions;
        // const userinfo = this.props.userInfo;
        const { userInfoActions,userInfo,history,match } = this.props;
        userInfo.username = username;
        userInfoActions.update(userInfo);

        const router = match.params.router;
        if(router) {
            history.push(router);
        }else{
            this.goUserPage();
        }
    }

    goUserPage() {
        const { history } = this.props;
        history.push('/User');
    }

    render() {
        return (
            <div>
                <Header title="登录"/>
                <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userinfo
});
const mapDispatchToProps = (dispatch) => ({
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);