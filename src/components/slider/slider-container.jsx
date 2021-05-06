import SliderPresentational from './slider-presentational';
import { connect } from 'react-redux';
import { setCurrentAC, setSlidesAC, setSlidesLengthAC, getSlidesThunkCreator } from '../../redux/slider-reducer';

const mapStateToProps = (state) => {
    return {
        sliderPage: state.sliderPage
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        setSlides: (slides) => {
            dispatch(setSlidesAC(slides))
        },
        setSlidesLength: (slidesLength) => {
            dispatch(setSlidesLengthAC(slidesLength))
        },
        setCurrent: (current) => {
            dispatch(setCurrentAC(current));
        },
        getSlides: () => {
            dispatch(getSlidesThunkCreator())
        }
    }
}

const SliderContainer = connect(mapStateToProps, mapDispatchToProps)(SliderPresentational);

export default SliderContainer;