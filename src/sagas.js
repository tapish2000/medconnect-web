import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchCartItemsAmount() {
  const json = yield fetch('http://localhost:5000/user/cart/amount/5f4a95114a72100017272afe')
        .then(response => response.json(), );    
  yield put({ type: "CART_AMOUNT_RECEIVED", amount: json.amount, });
}
function* fetchCartItemsAmountWatcher() {
     yield takeLatest('GET_CART_AMOUNT', fetchCartItemsAmount)
}
export default function* sagas() {
   yield all([
   fetchCartItemsAmountWatcher(),
   ]);
}