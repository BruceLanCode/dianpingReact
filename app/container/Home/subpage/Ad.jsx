import React, { PureComponent } from 'react';
import { getAdData } from '../../../fetch/home/home';
import HomeAd from '../../../components/HomeAd';

class Ad extends PureComponent {
    constructor(){
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        const result = getAdData();
        result.then(res => res.json())
            .then(json => {
                const data = json;
                if(data.length){
                    this.setState({
                        data: data
                    });
                }
            }).catch(ex => {
                if(__DEV__) {
                    console.log('首页广告模块获取数据报错');
                }
            });
    }

    render(){
        return (
            <div>
                {
                    this.state.data.length
                        ? <HomeAd data={this.state.data} />
                        : <div>加载中...</div>
                }
            </div>
        );
    }
}

export default Ad;