import React, {PureComponent} from 'react';

import Header from '../../components/Header';
import Info from './subpage/Info';
import Buy from './subpage/buy';
import Comment from './subpage/Comment';

class Detail extends PureComponent {
    render() {
        const id = this.props.match.params.id;
        return (
            <div>
                <Header title="商户详情"/>
                <Info id={id}/>
                <Buy id={id}/>
                <Comment id={id}/>
            </div>
        );
    }
}

export default Detail;