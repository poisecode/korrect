import { SET_COMMON_REDUCER, UPDATE_VALUES_FROM_SERVER } from "./ActionTypes";

// returning promise so that it can be used as a callback
export const setCommonReducer = payload => dispatch => {
  console.log('payload',payload);
  dispatch({
    type: SET_COMMON_REDUCER,
    payload
  })
  return Promise.resolve();
}

export const updateValuesFromServer = (isMobile, token, isMobileAndTablet) => ({
  type: UPDATE_VALUES_FROM_SERVER,
  isMobile,
  token,
  isMobileAndTablet
});
