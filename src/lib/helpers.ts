import dayjs from 'dayjs';
import jwtDecode from 'jwt-decode';

const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  if (!string) {
    return '';
  }

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

export const stringAvatar = (name: string) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
};

export const formatDate = (
  date: string | number | Date | dayjs.Dayjs | null | undefined,
  format = 'MMM D, YYYY  hh:mm:ss A'
) => dayjs(date).format(format);

export const getFirstName = (name: string) => name.split(' ')[0];

export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('auth');
  return token ? token.replace(/^"(.*)"$/, '$1') : '';
};

export const validateToken = (): boolean => {
  const token: any = getTokenFromLocalStorage();

  if (token) {
    const decodedToken: any = jwtDecode(token);

    if (decodedToken.exp * 1000 < Date.now()) {
      return false;
    }

    return true;
  }

  return true;
};

export const isStartDateGreaterThanEndDate = (startDate: string, endDate: string) => {
  // Convert the date strings to Date objects
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  // Compare the dates
  if (startDateObj > endDateObj) {
    return true;
  } else {
    return false;
  }
};

export const checkIfActive = (date: string) => {
  const givenDate = new Date(date);

  const today = new Date();
  const todayWithoutTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  return givenDate > todayWithoutTime;
};

export const parseDataFromQuery = (
  payload: { data: any[]; count: number; page: number; total_pages: number; limit: number }[]
) => {
  if (!payload) {
    return [];
  }

  let data = [];

  for (let i = 0; i < payload.length; i++) {
    const newData: any = data.concat(payload[i].data);
    data = newData;
  }

  return data;
};
