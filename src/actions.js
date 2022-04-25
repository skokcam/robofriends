import { 
  CHANGE_TEXT_FIELD,
  REQUEST_API_PENDING,
  REQUEST_API_SUCCESS,
  REQUEST_API_FAILED
 } from "./constants"

//directly returning an object so its starting with brackets instead of curly brackets
export const setTextField = (text) => ({
  type: CHANGE_TEXT_FIELD,
  payload: text
})
//This also works
/*export const setTextField = (text) => {
  return {
    type: CHANGE_TEXT_FIELD,
    payload: text
  }
}*/

// if defined like: export const requestAPI = (dispatch) => {
// on mapDispatchToProps(dispatch) used as { onRequestRobots: () => requestAPI(dispatch) }
// or if defined as higher order fuction as below 
// on mapDispatchToProps(dispatch) used as { onRequestRobots: () => dispatch(requestAPI()) }
// higher order functions return a function 
// () no-param function return a function with (dispatch) parameter
// redux-thunk middleware will catch that we are returning a function instead
// of an object and act accordingly
export const requestAPI = (fetchURL = '', fetchOptions = {}) => (dispatch) => {
  dispatch({type: REQUEST_API_PENDING});
  fetch(fetchURL, fetchOptions)
  .then(respose => respose.json())
  .then( data => dispatch({ type: REQUEST_API_SUCCESS, payload: data }) )
  .catch( err => dispatch({ type: REQUEST_API_FAILED, payload: err}) );
}