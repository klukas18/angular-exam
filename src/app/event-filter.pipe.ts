import { Pipe, PipeTransform } from '@angular/core';
import { GameplayHistory } from './models';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class EventFilterPipe implements PipeTransform {
  transform(
    values: Array<GameplayHistory>,
    action: string
  ): Array<GameplayHistory> {
    if (!action) {
      return values;
    }
    return values.filter((entry) => {
      return entry.action === action;
    });
  }
}
