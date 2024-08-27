const addZero = (num) => (num < 10 ? `0${num}` : num);

module.exports = (timestamp) => {
  const date = new Date(timestamp);
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  const year = date.getFullYear();
  const hour = addZero(date.getHours());
  const minute = addZero(date.getMinutes());
  const second = addZero(date.getSeconds());

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
