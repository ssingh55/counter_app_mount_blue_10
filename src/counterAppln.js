import React, { Component } from 'react';
import { connect } from 'react-redux';
class Counter extends Component {
    constructor(props) {
        super(props)
        
    }
    increment = () => {
        this.props.dispatch({type: "INCREMENT"})
    }
    decrement = () => {
        this.props.dispatch({type: "DECREMENT"})
    }
    render() {
        return (
            <div className='counter'>
                <h1>Counter using react</h1>
                <button onClick={this.decrement}>-</button>
                <p>{this.props.count}</p>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    count: state.count
})

export default connect(mapStateToProps)(Counter);