import dafaultPhoto from '../assets/img/default.png';
import userPhoto from '../assets/img/user.png';

export const renderPhoto = (photos) => {
  const photo = photos && photos[0];
  if (!photo) {
    return dafaultPhoto;
  }
  return photo;
};

export const renderUserPhoto = (photo) => {
  if (!photo) {
    return userPhoto;
  }
  return photo;
};

export const isANumber = (n) => {
  const numStr = /^-?(\d+\.?\d*)$|(\d*\.?\d+)$/;
  return numStr.test(n.toString());
};

export const setHame = (fullName) => {
  if (fullName) {
    const splitStr = fullName.toLowerCase().split(' ');
    let result = '';
    for (let i = 0; i < splitStr.length; i++) {
      result += splitStr[i].charAt(0).toLocaleUpperCase();
    }
    return result;
  }
  return null;
};

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
