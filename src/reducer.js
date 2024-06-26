export const initialState = {
    cart: [],
    User: null,
};

// Selector
export const getCartTotal = (cart) => cart?.reduce((acc, cur) => cur.price + acc, 0);

const reducer = (state, action) => {
    console.log (action)
    switch(action.type) {
        case 'ADD_TO_CART':
        return {
            ...state, 
            cart: [...state.cart,  action.item]
        };

        case "EMPTY_CART":
            return {
                ...state,
                cart: []
            }

        case "REMOVE_FROM_CART":
            const index =  state.cart.findIndex((cartItem) => cartItem.id === action.id);
            let newCart = [...state.cart];

            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.is}) as its not in cart`
                )
            }

            return {
                ...state,
                cart: newCart
            }

            case "SET_USER":
                return {
                    ...state,
                    user:action.user
                }

        default: 
        return state;
    }
};

export default reducer;