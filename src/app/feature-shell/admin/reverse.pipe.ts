import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, length: any): any {
    var newStr = "";
    if (value != undefined) {
      for (var i = value.length - 1; i >= 0; i--) {
        newStr += value.charAt(i);
      }
    }
    return newStr;
  }

}
