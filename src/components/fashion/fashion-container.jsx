import { connect } from 'react-redux';
import FashionPresentational from './fashion-presentational';
import { filterFashionProductsThunkCreator, setProductsThunkCreator, addToCartAC, removeFromCartAC  } from '../../redux/product-reducer';

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
        filterFashionProductsTC: () => {
            dispatch(filterFashionProductsThunkCreator());
        },
        addToCart: (product_id) => {
            dispatch(addToCartAC(product_id));
        },
        removeFromCart: (product_id) => {
            dispatch(removeFromCartAC(product_id));
        }
    }
}

const FashionContainer = connect(mapStateToProps, mapDispatchToProps)(FashionPresentational);
export default FashionContainer;