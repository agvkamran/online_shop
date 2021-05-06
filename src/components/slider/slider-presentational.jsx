import React from 'react';
import { NavLink } from 'react-router-dom';
import './slider.css';

class SliderPresentational extends React.Component {

    componentDidMount() {
        this.props.getSlides();
    }

    prevSlide = () => {
        if (this.props.sliderPage.current === 0) {
            this.props.setCurrent(this.props.sliderPage.length - 1)
            console.log(this.props);
        }
        else {
            this.props.setCurrent(this.props.sliderPage.current - 1)
        }
    }

    nextSlide = () => {
        if (this.props.sliderPage.current === this.props.sliderPage.length - 1) {
            this.props.setCurrent(0)
        }
        else {
            this.props.setCurrent(this.props.sliderPage.current + 1)
        }
    }

    render() {
        return (

            <section className='slider'>
                <div className='container'>
                    <div className='inner_slider'>
                        <i className="fas fa-chevron-circle-left left" onClick={this.prevSlide}></i>
                        {this.props.sliderPage.slides.map((slide, index) => {
                            return (
                                <NavLink to={'item/' + slide.id}>
                                    <div className={index === this.props.sliderPage.current ? 'slide active' : 'slide'} >
                                        {index === this.props.sliderPage.current && (
                                            <div className='slider_content'>
                                                <div className='slider_image'>
                                                    <img src={slide.image} className='image' alt={slide.brand}/>
                                                    <p className='slide_brand'>{slide.brand}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </NavLink>
                            )
                        })}
                        <i className="fas fa-chevron-circle-right right" onClick={this.nextSlide}></i>
                    </div>
                </div>
            </section>
        )
    }
}

export default SliderPresentational;