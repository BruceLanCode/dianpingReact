import React,{ PureComponent } from 'react';
import { getListData } from '../../../fetch/home/home';

import './style.less';
import ListComponent from '../../../components/List';
import LoadMore from "../../../components/LoadMore/index";

class List extends PureComponent {
    constructor(){
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
        const cityName = this.props.cityName;
        const result = getListData(cityName,0);
        this.resultHandle(result);
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true
        });

        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName,page);
        this.resultHandle(result);
    }

    resultHandle(result){
        result.then(res => res.json())
            .then(json => {
                const hasMore = json.hasMore;
                const data = json.data;

                this.setState({
                    hasMore,
                    data: this.state.data.concat(data),
                    isLoadingMore: false,
                    page: this.state.page + 1
                });
            }).catch(ex => {
                if(__DEV__) {
                    console.error(ex.message);
                }
            });
    }

    render(){
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                        ? <ListComponent data={this.state.data}/>
                        : ''
                }
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                }
            </div>
        );
    }
}

export default List;
