import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subpage/Ad';
import List from './subpage/List';

class Home extends PureComponent {
    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName} />
                <Category />
                <div style={{height: '15px'}}></div>
                <Ad/>
                <List cityName={this.props.userInfo.cityName} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userinfo
});

export default connect(mapStateToProps)(Home);