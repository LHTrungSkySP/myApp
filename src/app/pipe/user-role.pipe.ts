import { Injectable, Pipe, PipeTransform } from '@angular/core';
@Injectable({ providedIn: 'root' })
@Pipe({
  name: 'userRolePipe'
})
export class UserRolePipe implements PipeTransform {
  transform(
    role:number | boolean,
    typeReturn: string = "string",
    ): string |boolean | number| undefined {
      if(typeReturn === 'string'){
        return role===1?'Admin':'User';
      }
      if(typeReturn === 'boolean'){
        return role===1?true:false;
      }
      if(typeReturn === 'number'){
        return role===true?1:0;
      }
      else return undefined;
  }
}
