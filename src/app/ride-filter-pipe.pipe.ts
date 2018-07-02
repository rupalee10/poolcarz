import { Pipe, PipeTransform } from '@angular/core';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';
@Pipe({
  name: 'rideFilterPipe'
})
export class RideFilterPipePipe implements PipeTransform {

    transform(value: any, args?: any): any {
    //console.log('the datais ',value);
    if(!value)return null;
    if(!args)return value;

  
    return value.filter(function(item){
      console.log(item);
     if(item.EndPoint=='Infosys' && args=='to')
         return JSON.stringify(item);
    else if(item.startPoint=='Infosys'&& args=='from'){
      return JSON.stringify(item);
    }
    });
  }
}
   


