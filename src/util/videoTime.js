export const videoTime = (duration) => {
  let time = [duration.match(/[0-9]+H/) || '', duration.match(/[0-9]+M/) || '00', duration.match(/[0-9]+S/) || '00'];
  time = time.map((timeEl) => String(timeEl).replace(/[A-Z]/g, '').padStart(2, '0'));
  time = time.join(':').replace(/[A-Z]/g, '');
  time = time.split(':')[0] === '00' ? time.replace('00:', '') : time;
  return time;
};
