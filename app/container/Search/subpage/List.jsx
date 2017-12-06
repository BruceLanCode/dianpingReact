import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

import { getSearchData } from '../../../fetch/search/search';
import ListComponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';

const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
};

class SearchList extends PureComponent {
    constructor(){
        super();
        this.state = initialState;
    }

    componentDidMount() {
        this.loadFirstPageData();
    }

    componentDidUpdate(prevProps,prevState) {
        const { keyword,category } = this.props;
        if(keyword === prevProps.keyword && category === prevProps.category) {
            return false;
        }
        this.setState(initialState);
        this.loadFirstPageData();
    }

    loadFirstPageData() {
        const { userInfo:{cityName},keyword,category } = this.props;
        const result = getSearchData(0,cityName,category,keyword);
        this.resultHandle(result);
    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true
        });

        const { userInfo: { cityName },keyword,category } = this.props;
        const page = this.state.page;
        const result = getSearchData(page,cityName,category,keyword);
        this.resultHandle(result);
    }

    resultHandle(result) {
        const page = this.state.page;
        this.setState({
            page: page + 1
        });

        result.then(res => res.json())
            .then(json => {
                const hasMore = json.hasMore;
                const data = json.data;

                this.setState({
                    hasMore: hasMore,
                    data: this.state.data.concat(data),
                    isLoadingMore: false
                });
            }).catch(ex => {
                if(__DEV__) {
                    console.log(ex.message);
                }
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length
                        ? <ListComponent data={this.state.data}/>
                        : <div>加载中...</div>
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

const mapStateToProps = state => ({
    userInfo: state.userinfo
});

export default connect(mapStateToProps)(SearchList);