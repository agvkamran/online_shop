import { connect } from 'react-redux';
import { setProductsThunkCreator, addToCartAC, removeFromCartAC, setConcretProductThunkCreator, setCurrentPageAC, filterByTypeAC, sendProductTypeAC } from '../../redux/product-reducer';
import ProductCardPresentational from './product-card-presentational';

const mapStateToProps = (state) => {
    return {
        productPage: state.productPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProductsTC: (skip, take) => {
            dispatch(setProductsThunkCreator(skip, take));
        },
        addToCart: (product_id) => {
            dispatch(addToCartAC(product_id));
        },
        removeFromCart: (product_id) => {
            dispatch(removeFromCartAC(product_id));
        },
        setConcretProductTC: (productId) => {
            dispatch(setConcretProductThunkCreator(productId))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        }
        // filterByType: (productType) => {
        //     dispatch(filterByTypeAC(productType));
        // },
        // sendProductType: (productType) => {
        //     dispatch(sendProductTypeAC(productType));
        // }
    }
}

const ProductCardContainer = connect(mapStateToProps, mapDispatchToProps)(ProductCardPresentational);

export default ProductCardContainer;