import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'honorificPipe'
})
export class HonorificPipePipe implements PipeTransform {

  transform(name: string, gender: any): string {
    if(gender == "MALE"){
      return 'Mr. '+name;
    }
    return 'Miss. '+name;
  }
}
