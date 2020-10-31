const initialState={
    cartAmount:0,
    medicinesInCart:[]
}


const reducer=(state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        case "ADD_TO_CART":
            const amount=state.cartAmount+action.medicineList.length;
            return  {
                cartAmount:amount,
                medicinesInCart:action.medicineList
            };
        default:
            return state;
    }
}

export default reducer;