import React, {PureComponent} from 'react';

import { getCommentData } from '../../../fetch/detail/detail';
import LoadMore from '../../../components/LoadMore';

import './style.less';

class Comment extends PureComponent {
    constructor() {
        super();
        this.state = {
            data: [],
            hasMore: true,
            isLoadingMore: false,
            page: 0
        };
    }

    componentDidMount() {
        this.loadFirstPageData();
    }

    loadFirstPageData() {
        const { id } = this.props;
        const result = getCommentData(0,id);
    }

    render() {
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore}/>
                        : ''
                }
            </div>
        );
    }
}

export default Comment;