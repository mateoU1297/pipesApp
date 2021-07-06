import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
    
    transform(valor: string, esMayusculas: boolean): string {

        return (esMayusculas) ? valor.toUpperCase() : valor.toLowerCase();
    }
}
