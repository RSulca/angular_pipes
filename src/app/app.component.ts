import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre:string = "Raúl";
  nombreCompleto:string = "raUl SulCa PalACIos";
  frase:string = "Murciélago";
  arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];
  pi:number = Math.PI;
  numero:number = 0.234345;
  sueldo:number = 2500.5345;  
  contra:string = "contrasena";
  estado:boolean=true;    
  heroe:any = {
    ide:1,
    nombre: "AntMan",
    bio: "Capacidad de cambiar de tamaño y tener control sobre todo tipo de insecto.",
    img: "assets/img/antman.jpg",
    aparicion: "1939-05-01",
    casa:"DC"
  };
  fecha:Date = new Date();
}
