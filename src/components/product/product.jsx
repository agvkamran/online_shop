import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Product = (props) => {

    const addToCart = (product) => {
        props.addToCart(product.id);
    }

    const removeFromCart = (product) => {
        props.removeFromCart(product.id);
    }

    const [isFavorite, setFavorite] = useState(props.isFavorite);
    let favoriteIconClass = isFavorite ? "far fas fa-heart" : "far fa-heart";

    return (
        <div className='product_box'>
            <div className='img_box'>
                <i className={favoriteIconClass} onClick={() => {
                    isFavorite
                        ? removeFromCart(props.product)
                        : addToCart(props.product)
                    setFavorite(!isFavorite);
                }}></i>
                <img className='product_image' src={props.product.image} alt="" />
            </div>
            <div className='content_box'>
                <h3 className='product_name'>Product name</h3>
                <h2 className='product_price'>{props.product.price}$</h2>
                <NavLink to={'/product/' + props.product.id} className='buy'>Buy now</NavLink>
            </div>
        </div>
    );
}

export default Product;