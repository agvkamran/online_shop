import React from 'react';
import './electronics.css';
import ProductsContainer from '../products-container/products-container-presentational';

class ElectronicsPresentational extends React.Component {

    componentDidMount() {
        this.props.filterElectronicsTC();
    }

    render() {
        return (
            <ProductsContainer products={this.props.productPage.electronics} favoriteProducts={this.props.productPage.favoriteProducts} pageSize={this.props.productPage.pageSize} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
        )
    }
}

export default ElectronicsPresentational;