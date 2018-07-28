import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    decrement = () => {
        var n = this.state.count;
        n--;
        this.setState(
            {
                count: n
            }
        )
    }
    render() {
        return (
            <div className='counter'>
                <h1>Counter using react</h1>
                <button onClick={this.decrement}>-</button>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}