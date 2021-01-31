import React, {Component} from 'react';
import B from './B';
import C from './C';


export default class A extends Component{
state = {
    text: ''
};

// handleChange = (event)=>{
//     this.setState({
//         text: event.target.value
//     });
// };

    render(){
        return(
            <div>
            <C 
            onSendValue = {(param)=> {
                this.setState({
                    text: param
                });
            // console.log('param', param)
            }}
            />
            

            
            <B value={this.state.text}/>
          
            </div>
        );
    }
}