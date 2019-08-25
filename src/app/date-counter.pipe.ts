import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCounter'
})
export class DateCounterPipe implements PipeTransform {

  transform(value:any): any{
    let currentDate : Date = new Date();
    let currentDateWNT : any = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate())
    var difference = Math.abs(value - currentDateWNT)
    const secondsInaDay = 86400;
    var differenceInSeconds = difference * 0.001;
    var daysAgo = differenceInSeconds / secondsInaDay;
    
    if (daysAgo >= 1 && value > currentDateWNT){
      return daysAgo;
      
    }else{
      let finalDay : any = daysAgo + " days ago";
      return finalDay;
    }
    return null;
  }

}
