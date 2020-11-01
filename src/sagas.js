import { put, takeLatest, all,call,take } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCartItemsAmount() {
  const json = yield fetch('http://localhost:5000/user/cart/amount/5f4a95114a72100017272afe')
        .then(response => response.json(), );    
  yield put({ type: "CART_AMOUNT_RECEIVED", amount: json.amount, });
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
    let status=200;
    let lengthOfCart=0;
    yield axios.post("http://localhost:5000/user/cart/add/5f4a95114a72100017272afe",{medicineList:itemsInCart}).then((response)=>{
        console.log(response)
        lengthOfCart=response.data.amount;
         
    }).catch((err)=>{
        status=404;
        console.log(err);
    })

    yield put({ type: "ADD_ITEM_TO_CART_DONE", amount: lengthOfCart });
        
  }
function* AddItemToCartWatcher() {
    const { medicineList } = yield take('ADD_ITEM_TO_CART');
    yield call(AddItemToCart,medicineList);

}

export default function* sagas() {
   yield all([
   fetchCartItemsAmountWatcher(),
   AddItemToCartWatcher(),
   ]);
}