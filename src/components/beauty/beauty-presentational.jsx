import React from 'react';
import './beauty.css';
import ProductsContainer from '../products-container/products-container-presentational';

class BeautyPresentational extends React.Component {
    componentDidMount() {
        this.props.filterBeautyProductTC();
    }

    render() {
        return (
            <ProductsContainer products={this.props.productPage.beautyProducts} favoriteProducts={this.props.productPage.favoriteProducts} pageSize={this.props.productPage.pageSize} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
        )
    }
}

export default BeautyPresentational;