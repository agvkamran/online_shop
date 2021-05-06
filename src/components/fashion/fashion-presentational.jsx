import './fashion.css';
import React from 'react';
import ProductsContainer from '../products-container/products-container-presentational';

class FashionPresentational extends React.Component {

    componentDidMount() {
        this.props.filterFashionProductsTC();
    }

    render() {
        return (
            <ProductsContainer products={this.props.productPage.fashionProducts} favoriteProducts={this.props.productPage.favoriteProducts} pageSize={this.props.productPage.pageSize} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
        )
    }
}

export default FashionPresentational;