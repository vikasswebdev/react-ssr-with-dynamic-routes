import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchAPI, fetchAPI2 } from "./api";

export const initializeSession = () => ({
  type: "INITIALIZE_SESSION",
});

const storeData = (data) => ({
  type: "STORE_DATA",
  data,
});

export const fetchData = () => (dispatch) =>
  fetchAPI().then((data) => dispatch(storeData(data)));

export const fetchDataAbout = () => (dispatch) =>
  fetchAPI2().then((data) => dispatch(storeData(data)));

const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case "INITIALIZE_SESSION":
      return true;
    default:
      return state;
  }
};

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case "STORE_DATA":
      return action.data;
    default:
      return state;
  }
};

const reducer = combineReducers({
  loggedIn: sessionReducer,
  data: dataReducer,
});

export default (initialState) =>
  createStore(reducer, initialState, applyMiddleware(thunk));
