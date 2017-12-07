import React, {PureComponent} from 'react';

import Header from '../../components/Header';
import Info from './subpage/Info';
import Buy from './subpage/buy';
import Comment from './subpage/Comment';

class Detail extends PureComponent {
    render() {
        const id = 46874486835424567;
        return (
            <div>
                <Header title="商户详情"/>
                <Info id={id}/>
                <Buy id={id}/>
                <Comment id={id}/>
                黄茜
            </div>
        );
    }
}

export default Detail;