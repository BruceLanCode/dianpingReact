import React, {PureComponent} from 'react';

class Star extends PureComponent {
    constructor() {
        super();
        this.state = {
            star: 0
        };
    }

    componentDidMount() {
        this.setState({
            star: this.props.star
        });
    }

    clickHandle(star) {
        const clickCallback= this.props.clickCallback;
        if(!clickCallback) return;
        this.setState({
            star
        });

        clickCallback(star);
    }

    render() {
        let star = this.state.star || 0;
        if(star > 5) {
            star = star % 5;
        }
        return (
            <div className="star-container">
                {
                    [1,2,3,4,5].map((item,index) => {
                        const lightClass = star >= item ? 'full' : 'empty';
                        return <i key={index} className={`icon-star-${lightClass}`} onClick={this.clickHandle.bind(this,item)}></i>
                    })
                }
            </div>
        );
    }
}

export default Star;