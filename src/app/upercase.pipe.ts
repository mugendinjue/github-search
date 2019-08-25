import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upercase'
})
export class UpercasePipe implements PipeTransform {

  transform(value: any): string {
    let newStr = value;
    var upStr = newStr.toUpperCase()
    return upStr;
  }

}
