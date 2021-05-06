import { connect } from 'react-redux';
import { filterSportProductsThunkCreator, setProductsThunkCreator, addToCartAC, removeFromCartAC } from '../../redux/product-reducer';
import SportPresentational from './sport-presentational';

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
        filterSportProductsTC: () => {
            dispatch(filterSportProductsThunkCreator());
        },
        addToCart: (product_id) => {
            dispatch(addToCartAC(product_id));
        },
        removeFromCart: (product_id) => {
            dispatch(removeFromCartAC(product_id));
        }
    }
}

const SportContainer = connect(mapStateToProps, mapDispatchToProps)(SportPresentational);
export default SportContainer;