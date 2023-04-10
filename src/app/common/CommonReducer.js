import { SET_COMMON_REDUCER, UPDATE_VALUES_FROM_SERVER } from "./ActionTypes";
import { isMobile, isMobileAndTabletCheck } from '../../utils/ReusableFunctions';
const INITIAL_STATE = {
  isMobile: isMobile(),
  isMobileAndTablet: isMobileAndTabletCheck(),
  token: null,
  showLogin: false,
  showVerifyOtp: false,
  showSignup: false,
  fromBooking: false,
  showUpdateProfile: false,
  bookingDetails: "",
};
const CommonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_VALUES_FROM_SERVER:
      return {
        ...state,
        isMobile: action.isMobile,
        token: action.token,
        isMobileAndTablet: action.isMobileAndTablet
      }
    case SET_COMMON_REDUCER:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
};
export default CommonReducer