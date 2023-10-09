import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'textLimit' })
export class TextLimitPipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    if (value.length > maxLength) {
      return value.substr(0, maxLength) + '...';
    }
    return value;
  }
}
