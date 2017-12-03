import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './Home';
import * as userInfoActionsFromOtherFile from '../action/userInfo';
import LocalStore from '../util/localStore';
import { CITYNAME } from '../config/localStoreKey';
import City from './City';
import NotFound from '../container/404';
import Login from '../container/Login';
import User from '../container/User';

class App extends PureComponent {
    constructor(){
        super();
        this.state = {
            initDone: false
        };
    }

    componentDidMount() {
        let cityName = LocalStore.getItem(CITYNAME);
        if(cityName == null) {
            cityName = '北京';
        }
        this.props.userInfoAction.update({
            cityName
        });
        this.setState({
            initDone: true
        });
    }

    render(){
        const children = (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/city" component={City}/>
                <Route path="/login" component={Login}/>
                <Route path="/User" component={User}/>
                {/*<Route path="*" component={NotFound}/>*/}
            </div>
        );
        return (
            <div>
                {
                    this.state.initDone
                        ? children
                        : <div>正在加载...</div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    userInfoAction: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);