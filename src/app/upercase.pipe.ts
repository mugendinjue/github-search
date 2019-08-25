import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upercase'
})
export class UpercasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
