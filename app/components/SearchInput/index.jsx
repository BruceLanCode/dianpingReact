import React ,{ PureComponent } from 'react';

import './style.less';

class SearchInput extends PureComponent {
    constructor(){
        super();
        this.state = {
            value: ''
        };
    }

    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        });
    }

    ChangeHandle(e) {
        this.setState({
            value: e.target.value
        });
    }

    KeyUpHandle(e) {
        if(e.keyCode !== 13) {
            return;
        }
        this.props.enterHandle(e.target.value);
    }

    render() {
        return (
            <input type="text"
                className="search-input"
                placeholder="请输入关键字"
                value={this.state.value}
                onChange={this.ChangeHandle.bind(this)}
                onKeyUp={this.KeyUpHandle.bind(this)}/>
        );
    }
}

export default SearchInput;