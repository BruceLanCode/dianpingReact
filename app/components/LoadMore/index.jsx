import React ,{ PureComponent } from 'react';

import './style.less';

class LoadMore extends PureComponent {
    loadMoreHandle(){
        this.props.loadMoreFn();
    }

    componentDidMount(){
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.wrapper;
        let timeoutId;
        const callback = () => {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if(top && top < windowHeight) {
                loadMoreFn();
            }
        };

        window.addEventListener('scroll',() => {
            if(this.props.isLoadingMore) return;
            if(timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(callback,50);
        },false);
    }

    render() {
        return (
            <div className="load-more" ref={(wrapper) => {this.wrapper = wrapper;}}>
                {
                    this.props.isLoadingMore
                        ? <span>加载中...</span>
                        : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        );
    }
}

export default LoadMore;