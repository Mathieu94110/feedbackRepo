import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatdate',
})
export class FormatDatePipe implements PipeTransform {
  formatedTime(time: number) {
    return time < 10 ? `0${time}` : time;
  }
  transform(value: Date): string {
    let normalizeHour =
      value.getHours() >= 13
        ? this.formatedTime(value.getHours() - 12)
        : this.formatedTime(value.getHours());
    let minute = value.getMinutes();
    return value.getHours() >= 13
      ? normalizeHour + ':' + this.formatedTime(minute) + ' PM'
      : normalizeHour + ':' + this.formatedTime(minute) + ' AM';
  }
}
