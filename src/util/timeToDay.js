export const timeToDay = (time) => {
  let arr = time.slice(0, 10);
  arr = arr.split('-');
  let res = '';
  switch (parseInt(arr[1])) {
    case 1:
      res += 'Jan';
      break;
    case 2:
      res += 'Feb';
      break;
    case 3:
      res += 'Mar';
      break;
    case 4:
      res += 'Apr';
      break;
    case 5:
      res += 'May';
      break;
    case 6:
      res += 'Jun';
      break;
    case 7:
      res += 'Jul';
      break;
    case 8:
      res += 'Aug';
      break;
    case 9:
      res += 'Sep';
      break;
    case 10:
      res += 'Oct';
      break;
    case 11:
      res += 'Nov';
      break;
    case 12:
      res += 'Dec';
      break;
  }
  res += ' ' + arr[2] + ', ' + arr[0];
  return res;
};
