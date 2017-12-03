import React, {PureComponent} from 'react';

import {getOrderListData, postComment} from '../../../fetch/user/orderlist';
import OrderListComponent from '../../../components/OrderList';

import './style.less';

class OrderList extends PureComponent {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        const username = this.props.username;
        if(username){
            this.loadOrderList(username);
        }else{
            this.loadOrderList('huangxi');
        }
    }

    loadOrderList(username) {
        // const result = getOrderListData(username);
        // result.then(res => res.json)
        //     .then(json => {
        //         this.setState({
        //             data: json
        //         });
        //     }).catch(ex => {
        //         if(__DEVf__) {
        //             console.log(ex.message);
        //         }
        //     });
        const result = require('../../../../mock/orderlist/orderList');
        this.setState({
            data: result
        });
    }

    submitComment(id, value, star, callback) {
        const result = postComment(id, value, star);
        result.then(res => res.json)
            .then(json => {
                if(json.errno === 0) {
                    callback();
                }
            });
    }

    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                        ? <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)}/>
                        : <div>loading...</div>

                }
            </div>
        );
    }
}

export default OrderList;