import moment from 'moment';
import 'moment/locale/ko';

export default function disableDate(current: object) {
   return current && current < moment().endOf('day');
}