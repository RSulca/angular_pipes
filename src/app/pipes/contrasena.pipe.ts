import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value:string, estado:boolean=true): any {
    if(estado){
      let salida:string="";
      for(let i:number=0;i<value.length;i++){
        salida=salida+"*";
      }
      return salida;
    }else{
      return value; 
    }
  }

}
