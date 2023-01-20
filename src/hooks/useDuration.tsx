export const getDuration = (text: string) => {
  let h = '';
  let m = '00:';
  let s = '00';

  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case 'H':
        if (parseInt(text[i - 2])) {
          h = text[i - 2] + text[i - 1] + ':';
        } else {
          h = text[i - 1] + ':';
        }
        break;
      case 'M':
        if (parseInt(text[i - 2])) {
          m = text[i - 2] + text[i - 1] + ':';
        } else {
          m = '0' + text[i - 1] + ':';
        }
        break;
      case 'S':
        if (parseInt(text[i - 2])) {
          s = text[i - 2] + text[i - 1];
        } else {
          s = '0' + text[i - 1];
        }
        break;
    }
  }
  return h + m + s;
};
