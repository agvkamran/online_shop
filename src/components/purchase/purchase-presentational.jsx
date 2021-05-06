import React from 'react';
import Product from '../product/product';

class PurchasePresentational extends React.Component {
    componentDidMount() {
        let productId = this.props.match.params.productId;
        this.props.setConcretProductTC(productId);
    }


    render() {
        return (
            <div className='products'>
                <div className='container'>
                    <div className='inner_products'>    
                        <Product props={this.props} product={this.props.productPage.concretProduct} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
                    </div>
                </div>
            </div>
        )
    }
}

export default PurchasePresentational;