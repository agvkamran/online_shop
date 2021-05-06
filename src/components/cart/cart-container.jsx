import CartPresentational from "./cart-presentational";
import { connect } from 'react-redux';
import { setProductsThunkCreator, addToCartAC, removeFromCartAC } from '../../redux/product-reducer';

const mapStateToProps = (state) => {
    return {
        productPage: state.productPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProductsTC: () => {
            dispatch(setProductsThunkCreator());
        },
        addToCart: (product_id) => {
            dispatch(addToCartAC(product_id));
        },
        removeFromCart: (product_id) => {
            dispatch(removeFromCartAC(product_id));
        }
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(CartPresentational);
export default CartContainer;