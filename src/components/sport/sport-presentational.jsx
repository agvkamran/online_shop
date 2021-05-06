import React from 'react';
import './sport.css';
import ProductsContainer from '../products-container/products-container-presentational';

class SportPresentational extends React.Component {
    componentDidMount() {
        this.props.filterSportProductsTC();
    }

    render() {
        return (
            <ProductsContainer products={this.props.productPage.sportProducts} favoriteProducts={this.props.productPage.favoriteProducts} pageSize={this.props.productPage.pageSize} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
        )
    }
}

export default SportPresentational;