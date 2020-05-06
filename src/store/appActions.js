export default {
    setProductsAction: function(state){
      return {
        type: "STATE_SET_PRODUCTS",
        payload: state
      };
    },
    setUserAction: function(state){
      return {
        type: "STATE_SET_USER",
        payload: state
      };
    }
}