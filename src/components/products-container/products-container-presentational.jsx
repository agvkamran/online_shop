import React, { useState } from 'react';
import Product from '../product/product';

const ProductsContainer = (props) => {

    const [currentPage, setCurrentPage] = useState(0);
    let pagesCount = Math.ceil(props.products.length / props.pageSize);

    let productStart = props.pageSize * currentPage;
    let productEnd = props.pageSize * (currentPage + 1);

    let currentPageProducts = props.products.slice(productStart, productEnd);

    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div className='products'>
            {pages.map((p) => {
                return (
                    <span className={currentPage === p ? 'selected_page' : ''}
                        onClick={() => setCurrentPage(p)}>
                        {p + 1}
                    </span>)
            })}

            <div className='container'>
                <div className='inner_products'>
                    {currentPageProducts.map((product) => {
                        return <Product product={product} isFavorite={props.favoriteProducts.includes(product.id)} addToCart={props.addToCart} removeFromCart={props.removeFromCart} />;
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductsContainer;