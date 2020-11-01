const initialState={
    cartAmount:0,
    medicinesInCart:[],
    loading:true
}


const reducer=(state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        case "ADD_TO_CART":
            const amount=state.cartAmount+action.medicineList.length;
          
            const finalList=state.medicinesInCart.concat(action.medicineList)
         
            return  {
                cartAmount:amount,
                medicinesInCart:finalList
            };
            case "MODIFY_CART":
             
                return  {
                    cartAmount:action.medicineList.length,
                    medicinesInCart:action.medicineList
                };
            case "GET_CART_AMOUNT":
                return  {
                    ...state,
                    loading:true,
                };
            case "CART_AMOUNT_RECEIVED":
                return  {
                    ...state,
                    cartAmount:action.amount,
                    loading:false,
                };
        default:
            return state;
    }
}

export default reducer;