import React from 'react';
import "./Subtotal.css";
import { CurrencyBitcoin } from '@mui/icons-material';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer'
import { useNavigate } from 'react-router-dom';

function Subtotal() {
    const navigate = useNavigate();
    const [{ cart}, dispatch] = useStateValue();

    return (
        <>
            <div className='subtotal'>
                <CurrencyFormat 
                    renderText={(value) => (
                        <>
                        <p>
                            Subtotal ({cart.length}): <strong>{value}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type='checkbox'/>This order contains a gift</small>
                        </>
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)} 
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />

                <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
            </div>
        </>
    )
}

export default Subtotal;