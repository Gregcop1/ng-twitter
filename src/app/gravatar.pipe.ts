import { Pipe, PipeTransform } from '@angular/core';
import md5 from 'md5';

@Pipe({
  name: 'gravatar'
})
export class GravatarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `https://www.gravatar.com/avatar/${md5(value.trim().toLowerCase())}`;
  }

}
