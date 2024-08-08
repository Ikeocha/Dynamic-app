import { createStore } from 'redux';

const initialState = {
  sharedState: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SHARED_STATE':
      return { ...state, sharedState: { ...state.sharedState, ...action.payload } };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
