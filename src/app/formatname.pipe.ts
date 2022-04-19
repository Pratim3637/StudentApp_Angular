import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatname'
})
export class FormatnamePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  public transform(name:string):string{
  console.log('pipe "formatname called.');
  return name.toUpperCase();
}

}
