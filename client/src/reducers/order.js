const initialState = {
    order: {},
    products: []
}

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ORDER_CART':  // trae todos los productos
            return {
                ...state,
                order: action.payload,
                products: action.payload.product
       
            }
        case 'CART_CHANGE':
            return {
                ...state, 
            }
        case 'EMPTY_CART':
            return {
                ...state,
            }
        case 'DELETE_ITEM_CART':
            return {
                ...state,
                products: state.products.filter(e => e.id !== action.payload)
                //state.order.orderlines.filter(e => e.id === action.id)
            }
        default:
            return state;
    }
}