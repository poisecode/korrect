/* STORE PROJECT LEVEL CONSTANT FILE SUCH AS ENUM OR COMMON STRING VALUES. */

export const API_LIMIT = 10
export const START_INDEX = 0
export const MAX_API_LIMIT = 10000
// export const API_BASE_URL = 'http://3.7.185.1/api/';
export const API_BASE_URL = process.env.REACT_APP_API_BASEURL
export const APP_BASE_URL = process.env.REACT_APP_BASEURL
export const REACT_ENV = process.env.REACT_ENV
export const MEDIA_BASE_URL = "https://d1r1yzhyzim0p1.cloudfront.net/"
export const GOOGLE_API_KEY = "AIzaSyAKncPaSejL7yv4F1Rm7jj9TdW57eF27Jg"

export const RewardType = {
  REFERRAL_SIGNUP: 10,
  REWARD_REFERRAL: 20,
  PAID_FOR_TRIP: 25,
  CANCEL_REFUND: 30,
  GIFT: 40,
  _presentable: {
    10: "Signup Referral Bonus",
    20: "Friend joined with referral",
    25: "Paid for Trip",
    30: "Order Cancel Refund",
    40: "Gift Points"
  },
  getText: function (value) {
    return this._presentable[value]
  }
}

export const OrderStatus = {
  INITIATED: 10,
  PLACED: 20,
  NOT_PLACED: 30,
  PICKED_UP: 40,
  RETURNED: 50,
  CANCELLED: 60,
  _presentable: {
    10: "",
    20: "Upcoming",
    30: "",
    40: "Ongoing",
    50: "",
    60: "Cancelled"
  },
  _class: {
    10: "",
    20: "upcoming",
    30: "",
    40: "ongoing",
    50: "",
    60: "cancelled"
  },
  getText: function (value) {
    return this._presentable[value]
  },
  getClass: function (value) {
    return this._class[value]
  }
}
