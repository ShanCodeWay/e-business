import  {React, useState} from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import PaymentIcon from 'react-payment-icons';
import UseAnimations from "react-useanimations";
import activity from "react-useanimations/lib/activity";
import ImageSlider from './ImageSlider';
import PaymentModal from './PaymentModal';

const Cart = ({ items, total, currency, removeFromCart, }) => {
    const currencySymbol = 'Rs ';
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

    const openPaymentModal = () => {
      setPaymentModalOpen(true);
    };
  
    const closePaymentModal = () => {
      setPaymentModalOpen(false);
    };
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total: {currencySymbol}{total} </div>

                        <div className="payement_btn">
                        <button type="button" class="btn btn-primary" onClick={openPaymentModal} data-toggle="button" aria-pressed="false" autocomplete="off" >
  Payment<PaymentIcon
    id="visa"
    style={{ margin: 10, width: 100 }}
    className="payment-icon"
    shake size="3x"
  />
  
</button>
<UseAnimations animation={activity} size={56} />
<ImageSlider />
 </div>
                    </div>
                </div>
            </div>
            <div> </div>
            <PaymentModal isOpen={isPaymentModalOpen} closeModal={closePaymentModal} />
        </div>

       
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
