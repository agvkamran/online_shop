import { programmAPI } from '../api/api';

const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const FILTER_ELECTRONICS = 'FILTER_ELECTRONICS';
const FILTER_SPORT_PRODUCTS = 'FILTER_SPORT_PRODUCTS';
const FILTER_FASHION_PRODUCTS = 'FILTER_FASHION_PRODUCTS';
const FILTER_BEAUTY_PRODUCTS = 'FILTER_BEAUTY_PRODUCTS';
const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
const SET_CONCRET_PRODUCT = 'SET_CONCRET_PRODUCT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SEND_PRODUCT_TYPE = 'SEND_PRODUCT_TYPE';

const initialState = {
    concretProduct: [],
    products: [],
    electronics: [],
    sportProducts: [],
    fashionProducts: [],
    beautyProducts: [],
    favoriteProducts: [],
    pageSize: 8,
    currentPage: 0,
    productType: "Search..."
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state, products: action.product
            }
        case ADD_TO_CART: {
            return {
                ...state,
                favoriteProducts: [...state.favoriteProducts, action.product_id]
            }
        }
        case REMOVE_FROM_CART: {
            let newFavoriteProducts = state.favoriteProducts.filter((product_id) => {
                return product_id != action.product_id;
            });
            return {
                ...state,
                favoriteProducts: newFavoriteProducts
            }
        }
        case FILTER_ELECTRONICS: {
            return {
                ...state,
                electronics: [...state.products.filter((electronic) => {
                    if (electronic.type === 'electronics') {
                        return true;
                    }
                    else {
                        return false;
                    }
                })]
            }
        }
        case FILTER_SPORT_PRODUCTS: {
            return {
                ...state,
                sportProducts: [...state.products.filter((sportProduct) => {
                    if (sportProduct.type === 'sport') {
                        return true;
                    }
                    else {
                        return false;
                    }
                })]
            }
        }
        case FILTER_FASHION_PRODUCTS: {
            return {
                ...state,
                fashionProducts: [...state.products.filter((fashionProduct) => {
                    if (fashionProduct.type === 'fashion') {
                        return true;
                    }
                    else {
                        return false;
                    }
                })]
            }
        }
        case FILTER_BEAUTY_PRODUCTS: {
            return {
                ...state,
                beautyProducts: [...state.products.filter((beautyProduct) => {
                    if (beautyProduct.type === 'beauty') {
                        return true;
                    }
                    else {
                        return false;
                    }
                })]
            }
        }
        case FILTER_BY_TYPE:
            return {
                ...state, productType: action.productType
            }
        case SEND_PRODUCT_TYPE:
            let filteredProductType = state.products.filter((product) => product.type === action.productType);
            return {
                ...state, products: filteredProductType
            }
        case SET_CONCRET_PRODUCT:
            return {
                ...state, concretProduct: action.concretProduct
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.pageNumber
            }
        default:
            return state;
    }
}

export const setProductAC = (product) => ({ type: SET_PRODUCTS, product });
export const addToCartAC = (product_id) => ({ type: ADD_TO_CART, product_id });
export const removeFromCartAC = (product_id) => ({ type: REMOVE_FROM_CART, product_id });
export const filterElectronicsAC = (electronics) => ({ type: FILTER_ELECTRONICS, electronics });
export const filterSportProductsAC = (sportProduct) => ({ type: FILTER_SPORT_PRODUCTS, sportProduct });
export const filterFashionProductsAC = (fashionProduct) => ({ type: FILTER_FASHION_PRODUCTS, fashionProduct });
export const filterBeautyProductAC = (beautyProduct) => ({ type: FILTER_BEAUTY_PRODUCTS, beautyProduct });
export const setConcretProductAC = (concretProduct) => ({ type: SET_CONCRET_PRODUCT, concretProduct });
export const setCurrentPageAC = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber });
export const filterByTypeAC = (productType) => ({ type: FILTER_BY_TYPE, productType });
export const sendProductTypeAC = (productType) => ({type: SEND_PRODUCT_TYPE, productType});

export const setConcretProductThunkCreator = (productId) => {
    return (dispatch) => {
        programmAPI.getProducts()
            .then((response) => {
                dispatch(setConcretProductAC(response.data.products[productId]))
            })
    }
}

export const setProductsThunkCreator = (skip, take, filterFunction) => {
    return (dispatch) => {
        programmAPI.getProducts(skip, take)
            .then((response) => {
                dispatch(setProductAC(response.data.products));
                if (filterFunction != null) {
                    dispatch(filterFunction());
                }
            })
    }
}

export const filterElectronicsThunkCreator = (skip, take) => {
    // return (dispatch) => {
    //     programmAPI.getProducts()
    //         .then((response) => {
    //             dispatch(setProductAC(response.data.products));
    //             dispatch(filterElectronicsAC());
    //             dispatch(setTotalElectronicsCountAC());
    //         })
    // }
    return setProductsThunkCreator(skip, take, filterElectronicsAC);
}

export const filterSportProductsThunkCreator = (skip, take) => {
    // return (dispatch) => {
    //     programmAPI.getProducts()
    //         .then((response) => {
    //             dispatch(setProductAC(response.data.products));
    //             dispatch(filterSportProductsAC());
    //         })
    // }
    return setProductsThunkCreator(skip, take, filterSportProductsAC);
}

export const filterFashionProductsThunkCreator = (skip, take) => {
    // return (dispatch) => {
    //     programmAPI.getProducts()
    //         .then((response) => {
    //             dispatch(setProductAC(response.data.products));
    //             dispatch(filterFashionProductsAC());
    //         })
    // }
    return setProductsThunkCreator(skip, take, filterFashionProductsAC);
}

export const filterBeautyProductThunkCreator = (skip, take) => {
    // return (dispatch) => {
    //     programmAPI.getProducts()
    //         .then((response) => {
    //             dispatch(setProductAC(response.data.products));
    //             dispatch(filterBeautyProductAC());
    //         })
    // }
    return setProductsThunkCreator(skip, take, filterBeautyProductAC);
}

export default productReducer;