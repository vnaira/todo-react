import React from 'react';

class Description extends React.Component{

    render(){
        const {value} = this.props;

        return(
            <div>Description: {value}</div>
        );
    }
}

export default Description;