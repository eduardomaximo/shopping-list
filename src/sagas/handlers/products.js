import { call, put } from "redux-saga/effects";
import { setProducts } from "../../store/ducks/products";
import { requestGetProducts } from "../requests/products";

export function* handleGetProducts() {
  try {
    const response = yield call(requestGetProducts);
    yield put(setProducts(response));
  } catch (error) {
    console.log(error);
  }
}
