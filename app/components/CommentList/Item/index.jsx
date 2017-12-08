import React, {PureComponent} from 'react';

import './style.less';
import Star from '../../Star';

class CommentItem extends PureComponent {
    render() {
        const item = this.props.data;
        return (
            <div className="comment-list">
                <h3>
                    <i className="icon-user-tie"></i>
                    &nbsp;
                    {item.username}
                </h3>
                <Star star={item.star}/>
                <p>{item.comment}</p>
            </div>
        );
    }
}

export default CommentItem;