import React, { Component } from 'react';

export default class Input extends Component {
state = {
    text: '',
    inputValue: ''
};

handleChange = (event)=>{
console.log('event', event);
this.setState({
    inputValue: event.target.value
});
};

handleClick = ()=>{
// console.log(this.state.inputValue);
this.setState({
    text: this.state.inputValue,
    inputValue: ''
});
};

    render() {
        return (<div>
            <input
            value={this.state.inputValue} 
            type="text" 
            onChange={this.handleChange}
            />
            <button
            onClick={this.handleClick}
            >
            Click me
            </button>
            <h2>{this.state.text}</h2>
        </div>

        )
    }
}