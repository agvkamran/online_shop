import { connect } from "react-redux";
import { filterElectronicsThunkCreator, filterElectronicsAC, addToCartAC, removeFromCartAC, setTotalElectronicsCountAC, setProductAC } from '../../redux/product-reducer';
import ElectronicsPresentational from './electronics-presentational';

const mapStateToProps = (state) => {
    return {
        productPage: state.productPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProduct: (product) => {
            dispatch(setProductAC(product));
        },
        addToCart: (product_id) => {
            dispatch(addToCartAC(product_id));
        },
        filterElectronics: (electronics) => {
            dispatch(filterElectronicsAC(electronics))
        },
        filterElectronicsTC: () => {
            dispatch(filterElectronicsThunkCreator());
        },
        removeFromCart: (product_id) => {
            dispatch(removeFromCartAC(product_id));
        }
    }
}

const ElectronicsContainer = connect(mapStateToProps, mapDispatchToProps)(ElectronicsPresentational);

export default ElectronicsContainer;