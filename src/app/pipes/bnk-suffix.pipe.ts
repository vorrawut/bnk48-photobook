import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnkSuffix'
})
export class BnkSuffixPipe implements PipeTransform {

  transform(value: String, args?: any): any {
    return value.toUpperCase() + '/BNK48';
  }

}
