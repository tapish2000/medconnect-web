const initialState={
    cartAmount:0,
    medicinesInCart:[]
}


const reducer=(state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        case "ADD_TO_CART":
            const amount=state.cartAmount+action.medicineList.length;
            const medicineListWithShopName=action.medicineList.map((medicine)=>{
                return {...medicine,shopName:action.shopName};
            })
            console.log(medicineListWithShopName)
            return  {
                cartAmount:amount,
                medicinesInCart:medicineListWithShopName
            };
        default:
            return state;
    }
}

export default reducer;