import React, {Component} from 'react';


class Counter extends Component{
    constructor(props){
        super(props);
        // console.log('props', props)
        // this.value = 0;
        // this.handleClickPlus = this.handleClickPlus.bind(this);
        this.state = {
            value: props.defaultValue,
            text: ''
        };
    }



    handleClickPlus = ()=>{

        this.setState((state)=>{
            return {
                value: state.value + 1,
            };
        }, 
        ()=>{
            console.log(this.state.value);
        });
       
let isUser= true;



        this.setState(()=>{
           return {
                text: isUser? "It works": 'Other'
            }
        });

       
        
    }

    handleClickMinus = ()=> {
        this.setState({
            value: this.state.value - 1
        });
    }

    render(){

        // console.log(this.props);
        return(
            <div>
            <h4>{this.props.title}</h4>

            <h3>{this.state.value}</h3>
            <button
            onClick= {this.handleClickMinus}
            >
            count -
            </button>
            <button
            onClick= {this.handleClickPlus}
            >
            count +
            </button>

            <p>{this.state.text}</p>
            
            <input type="email"/>
            </div>
        );
    }
}

export  {Counter};


