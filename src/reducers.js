import { 
  CHANGE_TEXT_FIELD,
  REQUEST_API_PENDING,
  REQUEST_API_SUCCESS,
  REQUEST_API_FAILED
 } from "./constants"

const initialStateText = {
  textField: '',
}

export const textFieldReducer = (state = initialStateText, action = {}) => {
  switch(action.type) {
    case CHANGE_TEXT_FIELD: 
      return Object.assign({}, state, {textField: action.payload});
      //return { ...state, textField: action.payload };//with object spread operator   
    default:
      return state;  
  }
}

const initialStateAPI = {
  data: [],
  isPending: false,
  error: ''
}

export const requestAPIreducer = (state = initialStateAPI, action = {}) => {
  switch(action.type) {
    case REQUEST_API_PENDING:
      return { ...state, isPending: true }; 
      //creates an empty object, copies ...spread object into it, changes supplied fields
      //return Object.assign({}, state, { isPending: true });
    case REQUEST_API_SUCCESS:
      return { ...state, data: action.payload, isPending: false };
      //return Object.assign({}, state, { data: action.payload, isPending: false });
    case REQUEST_API_FAILED: 
      return { ...state, error: action.payload, isPending: false };
      //return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
}