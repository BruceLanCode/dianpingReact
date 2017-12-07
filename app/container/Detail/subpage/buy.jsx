import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as storeActionsFromFile from '../../../action/store';
import BuyAndStore from '../../../components/BuyAndStore';

class Buy extends PureComponent {
    constructor() {
        super();
        this.state = {
            isStore: false
        };
    }

    componentDidMount() {
        this.checkStoreState();
    }

    checkStoreState() {
        const { id,store } = this.props;
        store.forEach(item => {
            if(item.id === id) {
                this.setState({
                    isStore: true
                });
                return false;
            }
        });
    }

    render() {
        return (
            <BuyAndStore isStore={this.state.isStore}/>
        );
    }
}

const mapStateToProp = state => ({
    userInfo: state.userinfo,
    store: state.store
});

const mapDispatchToProps = dispatch => ({
    storeActions: bindActionCreators(storeActionsFromFile,dispatch)
});

export default connect(
    mapStateToProp,
    mapDispatchToProps
)(Buy);