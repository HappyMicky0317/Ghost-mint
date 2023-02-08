const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const getDate = (date) => {
  const month = date.getMonth();
  const day = date.getDate();
  return MONTHS[month] + ' ' + day;
}

export const getCoinType = (type) => {
  switch (type) {
    case 'bitcoin':
      return 'Bitcoin';
    case 'ethereum':
      return 'Ethereum';
    case 'ripple':
      return 'XRP';
    case 'litecoin':
      return 'Litecoin';
    case 'bitcoin-cash':
      return 'Bitcoin Cash';
    case 'chainlink':
      return 'Chainlink';
    case 'stellar':
      return 'Stellar Lumens';
    case 'usd-coin':
      return 'USD Coin';
    default:
      return 'Cash(USD)'
  }
}

export const getCoinAbbr = (type) => {
  switch (type) {
    case 'bitcoin':
      return 'BTC';
    case 'ethereum':
      return 'ETH';
    case 'ripple':
      return 'XRP';
    case 'litecoin':
      return 'LTC';
    case 'bitcoin-cash':
      return 'BCH';
    case 'chainlink':
      return 'LINK';
    case 'stellar':
      return 'XLM';
    case 'usd-coin':
      return 'USDC';
    default:
      return 'USD'
  }
}

export const handleError = (err) => {
  let error = ''
  if (err.response) {
    error = (err.response.data && err.response.data.error) ? err.response.data.error : 'Unknown Error';
  } else if (err.request) {
    error = 'Internet Connection Error'
  } else {
    error = 'Unknown Error'
  }
  if (error.message) {
    return error.message
  }
  if (error instanceof Object) {
    return JSON.stringify(error);
  } else {
    return error;
  }
}

export const getFormatTime = (data) => {
  let date = new Date(data + '');
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let min = date.getMinutes();
  return `${month}/${day}/${year} ${hour}:${min}`
}