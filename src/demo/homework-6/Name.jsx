import React from 'react';

class Name extends React.Component{

    render(){
const {value} = this.props;

        return(
            <div>Name: {value}</div>
        );
    }
}

export default Name;