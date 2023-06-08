import React, {Component} from "react";

class Canter extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            canter: props.startAt
        }

        this.countUp = this.countUp.bind(this)
        this.countUp = this.countDown.bind(this)
    }

    countUp (e) {
        this.setState({counter: this.state.counter + this.props.countBy})
    }
    
    countDown () {
        this.setState({counter: this.state.counter - this.props.countBy})
    }

    render () {
        return (
            <>
                <p>startAt:{this.props.startAt}</p>
                <p>countBy:{this.props.countBy}</p>
                <h4>{this.props.canter}</h4>
                <button id='primatyBtn' onClick={this.countUp()}>StartAt</button>
        <br/>
        <button id='secondaryBtn' onClick={this.countDown()}>EndAt</button>

            </>
        )
    }
    
    static defaultProps = {
        startAt: 0,
        countBy: 1
    }
}

export default Canter