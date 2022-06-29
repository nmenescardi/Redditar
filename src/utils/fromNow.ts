import moment from 'moment';

export default function fromNow(date: number): string {
  return moment.utc(moment.unix(date)).local().fromNow();
}
