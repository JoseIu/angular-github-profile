import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysPassed',
})
export class daysPassedPipe implements PipeTransform {
  transform(value: string): number {
    const givenDateTime = new Date(value);
    const currentDate = new Date();

    // Calcula la diferencia en milisegundos
    const timeDifference = currentDate.getTime() - givenDateTime.getTime();

    // Calcula la diferencia en días y redondea hacia abajo
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }
}
