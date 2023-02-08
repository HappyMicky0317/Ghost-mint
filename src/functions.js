const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octorber', 'November', 'December'
]
const Strings = {};

export const timeFormat1 = (time) => {
  try {
    let date = new Date(time + '');
    let month = MONTHS[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    return month + ', ' + day + ' ' + year;
  } catch (e) {
    return '---, -, ----'
  }
}

export const responseErrorHandler = error => {
  let errorRes;
  if (error.response) {
    if (error.response.data && typeof error.response.data === 'object') {
      errorRes = {error: error.response.data};
    } else {
      errorRes = {error: {error: error.response.statusText || error.message}};
    }
  } else if (error.request) {
    errorRes = {error: {status: false, error: 'Check Internet connectivity.'}};
  } else {
    errorRes = {error: {status: false, error: error.message}};
  }
  let errorMsg = 'Unknown Error';
  if (errorRes.error.error) {
    errorMsg = Strings[errorRes.error.error] || errorRes.error.error;
  }
  return {
    error: {
      ...errorRes.error,
      error: errorMsg,
    },
  };
};