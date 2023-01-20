import dayjs, { Dayjs } from 'dayjs';
import duration, { Duration } from 'dayjs/plugin/duration';
dayjs.extend(duration);

export default function useDay(dayToCompare: Dayjs): string {
  const dayDiffDuration: Duration = dayjs.duration(dayjs().diff(dayToCompare));
  const yearDiff: number = parseInt(dayDiffDuration.format('Y'));
  const monthDiff: number = parseInt(dayDiffDuration.format('M'));
  const dateDiff: number = parseInt(dayDiffDuration.format('D'));
  const hourDiff: number = parseInt(dayDiffDuration.format('H'));
  const minuteDiff: number = parseInt(dayDiffDuration.format('m'));
  const secondDiff: number = parseInt(dayDiffDuration.format('s'));

  if (yearDiff > 0) {
    return `${yearDiff}년 전`;
  } else if (monthDiff > 0) {
    return `${monthDiff}개월 전`;
  } else if (monthDiff == 0 && dateDiff >= 7) {
    return `${Math.floor(dateDiff / 7)}주 전`;
  } else if (dateDiff > 0) {
    return `${dateDiff}일 전`;
  } else if (hourDiff > 0) {
    return `${hourDiff}시간 전`;
  } else if (minuteDiff > 0) {
    return `${minuteDiff}분 전`;
  } else if (secondDiff > 0) {
    return `${secondDiff}초 전`;
  } else {
    return '';
  }
}
