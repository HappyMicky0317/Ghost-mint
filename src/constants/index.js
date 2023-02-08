import Images from "src/theme/Images";

export const SERVER = 'https://flx-carbonite-cms.herokuapp.com';
export const USER = {
  "identifier" : "api-auth",
  "password" : "Password2020$$!"
};
export const Status = {
  NONE: 'NONE',
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

export const DURATIONS = [
  {
    label: '1H',
    id: 'hour'
  },
  {
    label: '24H',
    id: 'day'
  },
  {
    label: '1W',
    id: 'week'
  },
  {
    label: '1M',
    id: 'month'
  },
  {
    label: '1Y',
    id: 'year'
  },
  {
    label: 'ALL',
    id: 'all'
  }
]

export const COIN_TYPES = [
  'bitcoin',
  'bitcoin-cash',
  'usd-coin',
  'ethereum',
  'ripple',
  'litecoin',
  'chainlink',
  'stellar',
]
export const CASH_TYPES = [
  'cash'
]
export const BANK_TYPES = [
  'wells fargo'
]

export const CRYPTO_ACTIONS = [
  {
    icon: Images.cardIcon,
    title: 'Nomismata Card',
    description: 'Spend crypto, get rewards'
  },
  {
    icon: Images.billIcon,
    title: 'Borrow Cash',
    description: '1 year cash loans at just 8% APY'
  },
  {
    icon: Images.calendarIcon,
    title: 'Invest over time',
    description: 'Buy crypto every day, week, or month'
  }
]