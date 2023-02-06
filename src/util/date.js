import { format } from 'timeago.js';

export function timeFormat(date, lang = 'en_US') {
  return format(date, lang);
}
