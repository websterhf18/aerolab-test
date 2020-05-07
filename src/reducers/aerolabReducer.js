const initialProps = {
    products: 0,
    userName: null,
    userPoints: null,
    idOverlay: 0,
    userId: null
};
  
export default function(state = initialProps, action) {
    switch (action.type) {
        case "STATE_SET_PRODUCTS":
        return {
            ...state,
            products: action.payload
        };
        case "STATE_SET_USER":
        return {
            ...state,
            userName: action.payload.userName,
            userPoints: action.payload.userPoints,
            userId: action.payload.userId
        };
        case "STATE_SET_OVERLAY":
        return {
            ...state,
            idOverlay: action.payload
        };
        case "STATE_SET_REDEEM_POINTS":
        return {
            ...state,
            userPoints: state.userPoints - action.payload
        };
        default:
        return state;
    }
}