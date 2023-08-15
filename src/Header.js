import React from "react";
import '../src/Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
// import Icon from '@mui/material/Icon';
// import SearchIcon from '@mui/icons-material/Search';

{/* <Icon>star</Icon>; */}
// example


function Header() {
    const [{ cart, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img 
            className="header_logo"
            src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png" 
            />
            </Link>

            <div className="header_address">
            {/* <span id="basket-symbol" class="material-symbols-outlined">shopping_basket</span> */}
            <span className="header_span_addressLineOne">Hello</span>
            <div className="sub-span-div-for-lineTwo">
            <span id="id-address-span" class="material-symbols-outlined">location_on</span>
            <span>Select Your address</span>
            </div>
            
            </div>

            <div className="header_search">
                <input 
                className="header_searchInput"
                type="text" />
                {/* <SearchIcon className="header_searchIcon" /> */}
                {/* <i>star</i> */}
                <span class="material-symbols-outlined">search</span>
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_span_optionsLineOne">Hello {!user ? 'Guest' : user.email}</span>
                    <span className="header_span_optionsLineTwo">{user ? 'Sign out' : 'Sign In'}</span>
                </div>
                </Link>

                <div className="header_option">
                <span className="header_span_optionsLineOne">Returns</span>
                    <span className="header_span_optionsLineTwo">& Orders</span>
                </div>

                <div className="header_option">
                <span className="header_span_optionsLineOne">Your</span>
                    <span className="header_span_optionsLineTwo">Prime</span>
                </div>

                {/* <div className="header_option">
                <span className="header_span_optionsFour">Orders</span>
                </div>

                <div className="header_option">
                <span className="header_span_optionsFive">Your</span>
                </div>

                <div className="header_option">
                <span className="header_span_optionsSix">Prime</span>
                </div> */}
            </div>

        <Link to="/Checkout">
            <div className="header_optionBasket">
            {/* <span id="basket-symbol" class="material-symbols-outlined">shopping_basket</span> */}
            <span id="shopping-cart-symbol" class="material-symbols-outlined">shopping_cart</span>
            <span className="header_optionLineTwo header_basketCount">{cart?.length}</span>
            </div>
        </Link>
        </div>
    )
}

export default Header