import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnkSuffix'
})
export class BnkSuffixPipe implements PipeTransform {

  transform(value: String, letterCase: string): any {
    if (letterCase === 'lower') {
      return value.toLowerCase() + '/BNK48';
    } else {
      return value.toUpperCase() + '/BNK48';
    }
  }

}
