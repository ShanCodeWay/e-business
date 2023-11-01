import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

const CartApp = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-12">
  <h1 style={{ color: ' #89317a', fontWeight: 'bold', alignItems: 'center', marginTop: '20px' }}>Buy your Ice-Cream</h1>
</div>

            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
                <small>
                   
                </small>
            </footer>
        </div>
    );
}

export default CartApp;
