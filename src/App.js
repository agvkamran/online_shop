import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import SliderContainer from './components/slider/slider-container';
import ProductCardContainer from './components/product-card/product-card-container';
import ElectronicsContainer from './components/electronics/electronics-container';
import FashionContainer from './components/fashion/fashion-container';
import SportContainer from './components/sport/sport-container';
import BeautyContainer from './components/beauty/beauty-container';
import CartContainer from './components/cart/cart-container';
import PurcshaseContainer from './components/purchase/purchase-container';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={SliderContainer}></Route>
      <Route exact path='/' component={ProductCardContainer}></Route>
      {/* <ProductCardContainer /> */}
      <Route path='/electronics' component={ElectronicsContainer}></Route>
      <Route path='/fashion' component={FashionContainer}></Route>
      <Route path='/sport' component={SportContainer}></Route>
      <Route path='/healthandbeauty' component={BeautyContainer}></Route>
      <Route path='/cart' component={CartContainer}></Route>
      <Route path='/product/:productId' component={PurcshaseContainer}></Route>
    </BrowserRouter>
  );
}

export default App;
