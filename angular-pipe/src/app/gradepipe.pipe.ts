import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradepipe'
})
export class GradepipePipe implements PipeTransform {

  transform(score: any): string {
    if(score>=90)
     return "A";
    else if(score>=70&&score<90)
      return "B";
    else
    return "C";
  }

}
