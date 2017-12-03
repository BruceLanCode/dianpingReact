import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import OrderList from './subpage/OrderList';

class User extends PureComponent {
    render() {
        const userinfo = this.props.userinfo;
        return (
            <div>
                <Header title="用户主页" backRouter="/"/>
                <UserInfo username={userinfo.username} city={userinfo.cityName}/>
                <OrderList username={userinfo.username}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userinfo: state.userinfo
});

export default connect(mapStateToProps)(User);