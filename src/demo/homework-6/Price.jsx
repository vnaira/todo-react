import React from 'react';

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: props.value
        };

    }

    changeCurrency = () => {
        let { price } = this.state;
        let realPrice = parseFloat(price);

        // if (price.includes('$')) {
        //     price = realPrice * 500 + "֏";
        // }
        // else {
        //     price = realPrice / 500 + "$";
        // }

        price = price.includes('$') ? realPrice * 500 + "֏" : realPrice / 500 + "$";

        this.setState({
            price: price
        });

    }

    render() {
        const { price } = this.state;

        return (
            <div>
                <span>Price: {price} </span>
                <button onClick={this.changeCurrency}>Change</button>
            </div>
        );
    }
}

export default Price;