import React, { Component } from 'react'

class ClassUseEffectCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.settingInterval = setInterval(this.tick, 1000)
    }
    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    componentWillUnmount(){
        clearInterval(this.settingInterval)
    }
    render() {
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}

export default ClassUseEffectCounter;