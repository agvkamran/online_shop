import React from 'react';
import './product-card.css';
import ProductsContainer from '../products-container/products-container-presentational';


class ProductCardPresentational extends React.Component {
    componentDidMount() {
        this.props.setProductsTC();    
    }

    onChangeType = (e) => {
        this.props.filterByType(e.target.value);
        console.log(this.props);
    }

    sendProductType = (e) => {
        this.props.sendProductType(e.target.value);
    }
    
    // addToCart = (product) => {
    //     this.props.addToCart(product.id);
    // }

    // removeFromCart = (product) => {
    //     this.props.removeFromCart(product.id);
    // }

    render() {
        // let pagesCount = Math.ceil(this.props.productPage.totalProductsCount / this.props.productPage.pageSize);

        // let productStart = this.props.productPage.pageSize * this.props.productPage.currentPage;
        // let productEnd = this.props.productPage.pageSize * (this.props.productPage.currentPage + 1);

        // let currentPageProducts = this.props.productPage.products.slice(productStart, productEnd);


        // console.log(this.props);
        // let pages = [];
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i);
        // }
        console.log(this.props);
        return (
            // <div className='products'>
            //     {pages.map((p) => {
            //         return (
            //             <span className={this.props.productPage.currentPage + 1 === p ? 'selected_page' : ''}
            //                 onClick={() => this.props.setCurrentPage(p - 1)}>
            //                 {p}
            //             </span>)
            //     })}
            //     <div className='container'>
            //         <div className='inner_products'>
            //             {currentPageProducts.map((product) => {
            //                 return <Product props={this.props} product={product} isFavorite={this.props.productPage.favoriteProducts.includes(product.id)} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />;
            //             })}
            //         </div>
            //     </div>
            // </div>
            <div>
                <div>
                    <input type="text" onChange={this.onChangeType} value={this.props.productPage.productType} />
                    <button onClick={this.sendProductType}>Search</button>
                </div>
                <ProductsContainer products={this.props.productPage.products} favoriteProducts={this.props.productPage.favoriteProducts} pageSize={this.props.productPage.pageSize} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} />
            </div>
        )
    }
}

export default ProductCardPresentational;

