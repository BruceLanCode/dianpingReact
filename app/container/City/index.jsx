import React ,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';

import * as userInfoActionsFromOtherFile from '../../action/userInfo';
import { CITYNAME } from '../../config/localStoreKey';
import localStore from '../../util/localStore';

class City extends PureComponent {
    changeCity(newCity) {
        if(newCity === null) {
            return;
        }

        // const userinfo = { ...this.props.userInfo,cityName: newCity};
        console.log(newCity);
    }

    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
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
)(City);