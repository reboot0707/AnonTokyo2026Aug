import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'articleContent',
})
export class ArticleContentPipe implements PipeTransform {

  transform(value: string, myformat: string = '...'): string {
    return value.substring(0, 2) + myformat;
  }

}
