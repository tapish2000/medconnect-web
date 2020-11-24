import { put, takeLatest, all,call,take } from 'redux-saga/effects';
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';

function* fetchCartItemsAmount() {
    if(reactLocalStorage.get("isLoggedIn")=="true"){
    const id= reactLocalStorage.get("id");
    const json = yield fetch('https://glacial-caverns-39108.herokuapp.com/user/cart/amount/'+id)
            .then(response => response.json(), );    
     console.log(json.amount);
    yield put({ type: "CART_AMOUNT_RECEIVED", amount: json.amount, });
    }
    else{
        yield put({ type: "CART_AMOUNT_RECEIVED", amount: 0, });
    }
}
function* fetchCartItemsAmountWatcher() {
     yield takeLatest('GET_CART_AMOUNT', fetchCartItemsAmount)
}


function* AddItemToCart(data) {
    console.log(data);
    let itemsInCart=[];
    data.forEach((med)=>{
        itemsInCart.push({medicine:med._id,shop:med.shop_id,quantity:med.quantity,});
    })
    let lengthOfCart=0;
    const id= reactLocalStorage.get("id");
    yield axios.post("https://glacial-caverns-39108.herokuapp.com/user/cart/add/"+id,{medicineList:itemsInCart}).then((response)=>{
        console.log(response)
        lengthOfCart=response.data.amount;
         
    }).catch((err)=>{
        console.log(err);
    })

    yield put({ type: "ADD_ITEM_TO_CART_DONE", amount: lengthOfCart });
        
  }
function* AddItemToCartWatcher() {
    while(true){
    const { medicineList } = yield take('ADD_ITEM_TO_CART');
    console.log("DEBUG")
    yield call(AddItemToCart,medicineList);
    }

}

export default function* sagas() {
   yield all([
   fetchCartItemsAmountWatcher(),
   AddItemToCartWatcher(),
   ]);
}