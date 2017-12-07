import React, {PureComponent} from 'react';

import { getInfoData } from '../../../fetch/detail/detail';
import DetailInfo from '../../../components/DetailInfo';

class Info extends PureComponent {
    constructor() {
        super();
        this.state = {
            info: false
        };
    }

    componentDidMount() {
        this.getInfo();
    }

    getInfo() {
        const { id } = this.props;
        const result = getInfoData(id);
        result.then(res => res.json())
            .then(json => {
                this.setState({
                    info: json
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
                    this.state.info
                        ? <DetailInfo data={this.state.info}/>
                        :''
                }
            </div>
        );
    }
}

export default Info;