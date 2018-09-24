import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaseperator'
})
export class CommaseperatorPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return `${value} `
  }

}
