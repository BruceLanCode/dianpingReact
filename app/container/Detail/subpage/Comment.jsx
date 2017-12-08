import React, {PureComponent} from 'react';

import { getCommentData } from '../../../fetch/detail/detail';
import CommentList from '../../../components/CommentList';
import LoadMore from '../../../components/LoadMore';

import './style.less';

class Comment extends PureComponent {
    constructor() {
        super();
        this.state = {
            data: [],
            hasMore: false,
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
        this.resultHandle(result);
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true
        });

        const { id } = this.props;
        const { page } = this.state;
        const result = getCommentData(page,id);
        this.resultHandle(result);
    }

    resultHandle(result) {
        result.then(res => res.json())
            .then(json => {
                const page = this.state.page;
                this.setState({
                    page: page + 1
                });
                const hasMore = json.hasMore;
                const data = json.data;
                this.setState({
                    hasMore: hasMore,
                    data: this.state.data.concat(data),
                    isLoadingMore: false
                });
            }).catch(ex => {
                if(__DEV__) {
                    console.error(ex.message);
                }
            });
    }

    render() {
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data.length
                        ? <CommentList data={this.state.data}/>
                        : <div>加载中...</div>
                }
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore}
                            loadMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                }
            </div>
        );
    }
}

export default Comment;