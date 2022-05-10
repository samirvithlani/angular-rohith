import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConvert'
})
export class TempConvertPipe implements PipeTransform {

  transform(value:number,unit:string){

    
      if(unit === 'C'){
          var temprature = (value - 32) /1.8;
          return temprature;
      }
      else if(unit === 'F'){
        var temprature = (value * 1.8) + 32;
        return temprature;
      }
    
    
  }

}
