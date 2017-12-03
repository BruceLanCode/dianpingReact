import React, {PureComponent} from 'react';

import './style.less';
import { postComment } from '../../../fetch/user/orderlist';
import Star from '../../Star';

class Item extends PureComponent {
    constructor(){
        super();
        this.state = {
            commentState: 2,
            stars: {}
        };
    }

    componentDidMount() {
        this.setState({
            commentState: this.props.data.commentState
        });
    }

    showComment() {
        this.setState({
            commentState: 1
        });
    }

    submitComment() {
        const submitComment = this.props.submitComment;
        const id = this.props.data.id;
        const star = this.state.stars;
        const value = this.comment.value.trim();
        if(!value) {
            return;
        }

        submitComment(id,value,star,this.commentOk.bind(this));

    }

    commentOk() {
        this.setState({
            commentState: 2
        });
    }

    hideComment() {
        this.setState({
            commentState: 0
        });
    }

    starClickCallback(star) {
        this.setState({
            stars: star
        });
    }

    render() {
        const { data } = this.props;
        return (
            <div className="order-item-container">
                <div className="clear-fix">
                    <div className="order-item-img float-left">
                        <img src={data.img} />
                    </div>
                    <div className="order-item-comment float-right">
                        {
                            this.state.commentState === 0
                                ? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                                : this.state.commentState === 1
                                    ? ''
                                    : <button className="btn unselected-btn">已评价</button>
                        }
                    </div>
                    <div className="order-item-content">
                        <span>商品：{data.title}</span>
                        <span>数量：{data.count}</span>
                        <span>价格：￥{data.price}</span>
                    </div>
                </div>
                {
                    this.state.commentState ===1
                        ? <div className="comment-text-container">
                            <textarea style={{width: '100%',height: '80px'}}
                                className="comment-text" ref={comment => {this.comment = comment;}}></textarea>
                            <div style={{paddingTop: '10px',paddingBottom: '10px'}}>
                                <Star stat="0" clickCallback={this.starClickCallback.bind(this)}/>
                            </div>
                            <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
                            &nbsp;
                            <button className="btn unselected-btn" onClick={this.hideComment.bind(this)}>取消</button>
                        </div>
                        : ''
                }
            </div>
        );
    }
}

export default Item;