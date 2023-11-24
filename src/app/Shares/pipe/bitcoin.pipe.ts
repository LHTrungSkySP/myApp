import { Injectable, Pipe, PipeTransform } from '@angular/core';
@Injectable({ providedIn: 'root' })
@Pipe({
  name: 'BitcoinPipe'
})
export class BitecoinRolePipe implements PipeTransform {
  bilion:number=1000000000;
  milion:number=1000000;
  thousand:number=1000;
  transform(value:number): string {
    if(value/this.bilion>1){
      return (value/this.bilion).toFixed(5) +'B';
    }
    if(value/this.milion>1){
      return (value/this.milion).toFixed(5)+'M';
    }
    if(value/this.thousand>1){
      return (value/this.thousand).toFixed(5) + 'T';
    }
    else return '';
  }
}
