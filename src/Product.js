import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue();

    console.log("This is the baset")

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }
    return (
        <div className="product-main-div">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                        <i>&#11088;</i>
                    ))}
                    {/* {Array.from({ length: rating }).map((_, i) => (
    <p key={i}>&#11088;</p>
))} */}

                </div>
            </div>

            {/* <img src="https://images-na.ssl-images-amazon.com/images/I/51Zympq7Unl._AC_SY400_.jpg"/> */}
            {/* <img src="https://m.media-amazon.com/images/I/41DA89Z1RIL.jpg" /> */}
            <img src={image} alt="image"/>

            
            {/* testing buttons */}
            {/* <button className="product_btns" onClick={addToCart}>Add to Cart</button> */}
            <button class="custom-btn btn-12" onClick={addToCart}><span>Add</span><span>Add to Cart</span></button>
        </div>
    )
}

export default Product;