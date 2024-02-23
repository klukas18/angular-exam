import { Pipe, PipeTransform } from '@angular/core';
import { GameplayHistory } from './models';

@Pipe({
  name: 'timestampSort',
  standalone: true,
})
export class TimestampSortPipe implements PipeTransform {
  transform(
    value: GameplayHistory[],
    sortOrder: 'Newest first' | 'Oldest first'
  ): GameplayHistory[] {
    if (!sortOrder) {
      return value;
    }
    if (sortOrder === 'Oldest first') {
      return value
        .slice()
        .sort((a, b) => a.timeStamp.getTime() - b.timeStamp.getTime());
    } else {
      return value
        .slice()
        .sort((a, b) => b.timeStamp.getTime() - a.timeStamp.getTime());
    }
  }
}
