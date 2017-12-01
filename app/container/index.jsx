import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './Home';
import * as userInfoActionsFromOtherFile from '../action/userInfo';
import LocalStore from '../util/localStore';
import { CITYNAME } from '../config/localStoreKey';

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
            <Route exec path="/" component={Home} />
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