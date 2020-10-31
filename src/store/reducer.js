const initialState={
    cartAmount:0,
    medicinesInCart:[]
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
        default:
            return state;
    }
}

export default reducer;