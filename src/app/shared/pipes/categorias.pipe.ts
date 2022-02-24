import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorias'
})
export class CategoriasPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'front-end': return 'code'
      case 'back-end': return 'computer'
    }
    return 'code';
  }

}
