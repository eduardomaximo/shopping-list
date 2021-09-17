import { takeLatest } from "redux-saga/effects";
import { handleGetProducts } from "./handlers/products";
import { GET_PRODUCTS } from "../store/ducks/products";

export function* watcherSaga() {
  yield takeLatest(GET_PRODUCTS, handleGetProducts);
}
