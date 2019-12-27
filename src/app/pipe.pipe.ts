import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(dataList=[],key,searchTitle): any {
    return dataList.filter(
      x=>{
        if(x.hasOwnProperty(key) && searchTitle ){
    return RegExp('\\b' + searchTitle,'gi').test(x[key])
        }
        return true
      }
    )
  }

}
