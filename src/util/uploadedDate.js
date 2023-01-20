import { register, format } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

export function uploadedDate(date, lang = 'ko') {
  return format(date, lang);
}
