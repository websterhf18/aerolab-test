const initialProps = {
    products: 0,
    userName: null,
    userPoints: null,
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
        default:
        return state;
    }
}