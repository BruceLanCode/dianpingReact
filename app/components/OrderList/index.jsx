import React, {PureComponent} from 'react';
import Item from './Item';

class OrderList extends PureComponent {
    render() {
        const { data , submitComment } = this.props;
        return (
            <div>
                {
                    data.map((item, index) => (
                        <Item key={index} data={item} submitComment={submitComment}/>
                    ))
                }
            </div>
        );
    }
}

export default OrderList;