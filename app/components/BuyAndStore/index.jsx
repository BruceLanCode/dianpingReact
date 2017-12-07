import React, {PureComponent} from 'react';

import './style.less';

class BuyAndStore extends PureComponent {
    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        this.props.isStore
                            ? <button className="selected">已收藏</button>
                            : <button>收藏</button>
                    }
                </div>
                <div className="item-container float-right">
                    <button>购买</button>
                </div>
            </div>
        );
    }
}

export default BuyAndStore;