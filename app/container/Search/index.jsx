import React, {PureComponent} from 'react';

import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage/List';

class Search extends PureComponent {
    render() {
        const params = this.props.match.params;
        return (
            <div>
                <SearchHeader keyword={params.keyword}/>
                <SearchList keyword={params.keyword} category={params.category}/>
                黄茜
            </div>
        );
    }
}

export default Search;