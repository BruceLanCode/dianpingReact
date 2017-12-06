import React, {PureComponent} from 'react';
import { withRouter } from 'react-router-dom';

import SearchInput from '../SearchInput';

import './style.less';

class SearchHeader extends PureComponent {
    clickHandle() {
        this.props.history.goBack();
    }

    enterHandle(value){
        this.props.history.push(`/search/all/${encodeURIComponent(value)}`);
    }

    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-arrow-left"></i>
                </span>
                <div className="input-container">
                    <i className="input-container">
                        &nbsp;
                        <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
                    </i>
                </div>
            </div>
        );
    }
}

export default withRouter(SearchHeader);