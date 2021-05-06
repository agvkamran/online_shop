import { connect } from 'react-redux';
import { setProductsThunkCreator, filterBeautyProductThunkCreator, addToCartAC, removeFromCartAC } from '../../redux/product-reducer';
import BeautyPresentational from './beauty-presentational';

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
        filterBeautyProductTC: () => {
            dispatch(filterBeautyProductThunkCreator());
        },
        addToCart: (product_id) => {
            dispatch(addToCartAC(product_id));
        },
        removeFromCart: (product_id) => {
            dispatch(removeFromCartAC(product_id));
        }
    }
}

const BeautyContainer = connect(mapStateToProps, mapDispatchToProps)(BeautyPresentational);
export default BeautyContainer;