import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice',
})
export class SlicePipe implements PipeTransform {
  transform<T>(collection: Array<T>, start: number = 0, pageSize: number = 10): Array<T> {
    const startIndex = start * pageSize;
    return collection.slice(startIndex, startIndex + pageSize);
  }
}
