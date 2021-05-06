import PurchasePresentational from './purchase-presentational';
import { connect } from 'react-redux';
import { setProductsThunkCreator, addToCartAC, removeFromCartAC, setConcretProductThunkCreator } from '../../redux/product-reducer';

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
        },
        setConcretProductTC: (productId) => {
            dispatch(setConcretProductThunkCreator(productId))
        }
    }
}

const PurcshaseContainer = connect(mapStateToProps, mapDispatchToProps)(PurchasePresentational);

export default PurcshaseContainer;