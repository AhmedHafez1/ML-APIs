import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  transform(value: number | null): string {
    if (!value) return '';

    const minutes: number = Math.floor(value / 60);
    const seconds: number = value % 60;

    const formattedMinutes: string = String(minutes).padStart(2, '0');
    const formattedSeconds: string = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }
}
