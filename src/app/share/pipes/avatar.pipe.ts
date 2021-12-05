import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  transform(value: any, users?: any): any {
    console.log( users.find(x =>  value === x._id ).avatar) ;
  }

}

