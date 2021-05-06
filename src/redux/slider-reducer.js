import { programmAPI } from '../api/api';

const SET_SLIDES = 'SET-SLIDES';
const SET_SLIDES_LENGTH = 'SET_SLIDES_LENGTH';
const SET_CURRENT = 'SET_CURRENT';

const initialState = {
    current: 0,
    length: 0,
    slides: []
}

const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SLIDES:
            return {
                ...state, slides: action.slides
            }
        case SET_SLIDES_LENGTH:
            return {
                ...state, length: action.slidesLength
            }
        case SET_CURRENT:
            return {
                ...state, current: action.current
            }
        default:
            return state;
    }
}


export const setSlidesAC = (slides) => ({ type: SET_SLIDES, slides });
export const setSlidesLengthAC = (slidesLength) => ({ type: SET_SLIDES_LENGTH, slidesLength });
export const setCurrentAC = (current) => ({ type: SET_CURRENT, current });



export const getSlidesThunkCreator = () => {
    return (dispatch) => {
        programmAPI.getSlides()
            .then((response) => {
                dispatch(setSlidesAC(response.data.slide));
                dispatch(setSlidesLengthAC(response.data.slide.length));
            })
    }
};

export default sliderReducer;