import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtername'
})
export class FilternamePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  
  transform(items:any[], searchItem:any,searchBy:string){
    if(!searchItem){
      return items;
    }
    return items.filter(item=>{
      const currentItem=item[searchBy];
      return currentItem.tostring().toLowerCase()
      .includes(searchItem.trim).toLowerCase();
    })
  }

}
