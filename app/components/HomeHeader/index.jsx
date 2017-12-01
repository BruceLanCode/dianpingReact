import React ,{ PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';

import SearchInput from '../SearchInput';
import './style.less';

class HomeHeader extends PureComponent {
    enterHandle(value) {
        let { history } = this.props;
        history.push('/search/all/' + encodeURIComponent(value));
    }

    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className={'icon-arrow-down2'}></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to={'/login'}>
                        <i className="icon-user-tie"></i>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        &nbsp;
                        <SearchInput enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(HomeHeader);