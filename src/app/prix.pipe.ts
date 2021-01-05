import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prix'
})
export class PrixPipe implements PipeTransform {

  transform(value: string, currency : string): any {
    return value + currency;
  }

}
