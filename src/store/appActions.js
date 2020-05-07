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
    },
    setOverlay: function(state){
      return {
        type: "STATE_SET_OVERLAY",
        payload: state
      };
    },
    setRedeemPoints: function(state){
      return {
        type: "STATE_SET_REDEEM_POINTS",
        payload: state
      };
    }
}