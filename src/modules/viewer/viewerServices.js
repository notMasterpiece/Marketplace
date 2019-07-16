export const getRandomColor = (data) => {
  const letters = '0123456789ABCDEF';
  let background = '#';
  for (let i = 0; i < 6; i++) {
    background += letters[Math.floor(Math.random() * 16)];
  }

  if (data.hasOwnProperty('owner')) {
    return {
      ...data,
      owner: { ...data.owner, background },
    };
  }
  return {
    ...data,
    background,
  };
};
