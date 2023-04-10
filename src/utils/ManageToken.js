import { REACT_ENV } from "./Constant";

export const deleteToken = () => {
  if (typeof window !== 'undefined') {
    deleteCookie();
    deleteCookie("korrect_user_details");
    deleteCookie("korrect_account_id");
    deleteCookie("korrect_token");
  }
};


export const getToken = () => {
  const cookieToken = getCookieValue();
  return cookieToken ? cookieToken : null
};

export const setToken = data => {
  setCookie('korrect_token', data.user_details.token);
  setCookie('korrect_user_details', JSON.stringify(data.user_details));
  if(data.user_details.accounts && data.user_details.accounts.length > 0){
    setCookie('korrect_account_id', JSON.stringify(data.user_details.accounts[0].id));
  }
  // localStorage.setItem('korrect_token', data.user_details.token);
  // localStorage.setItem('korrect_user_details', JSON.stringify(data.user_details));
};



export const getCookieValue = (name = "korrect_token") => {
  if (typeof window !== 'undefined') {
    if (document.cookie.split(';').some((item) => item.trim().startsWith(`${name}=`))) {
      return document.cookie
        .split('; ')
        .find(row => row.startsWith(`${name}`))
        .split('=')[1];
    }
  }
  return null;
}

export const deleteCookie = (name = "korrect_token") => {
  // setCookie(name, "", { expires: -1 }); One of the way to delete is by
  // setting it empty and expire previous day
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export const setCookie = (name, value, options = {}) => {
  options = {
    path: '/',
    // add other defaults here if necessary
    ...options
  };
  if (REACT_ENV !== "DEV"){
    options = {
      domain:"getkorrect.com",
      ...options
    }
  }

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  if (typeof options.expires === 'number') {
    options.expires = new Date(Date.now() + options.expires * 864e5)
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  // console.log("Inside cookie", updatedCookie);
  document.cookie = updatedCookie;
}


export const getUserType = () => {
  // return localStorage.getItem('user_type');
  return getCookieValue("user_type");
}

export const getUserDetails = () => {
  // return JSON.parse(localStorage.getItem('korrect_user_details'));
  return JSON.parse(decodeURIComponent(getCookieValue("korrect_user_details"))) || null;
}

export const getSelectedAccountId = () => {
  // return JSON.parse(localStorage.getItem('korrect_user_details'));
  return JSON.parse(decodeURIComponent(getCookieValue("korrect_account_id"))) || null;

}