import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.css']
})
export class AddAppComponent {

  public nombres: Array<string> = [];
  public id: string ="";
  public nombreLista: string ="";
  public genero: string ="";
  public fechanacimiento: string ="";
  public registrocompleto: string="";
  public bandera: boolean = true;
  public cadena: string ="";

  constructor() { }

    
  onButtonClick(){
    this.cadena="";
      if(this.id.length<=0){
      this.bandera= false;
      this.cadena+="Rellena el campo de Id, ";
      }else{
        this.bandera=true;
        this.cadena+="";
      }
      if(this.nombreLista.length<=0){
      this.bandera= false;
      this.cadena+="Rellena el campo de nombre, ";
      }else{
        this.cadena+="";
      }
      if(this.genero.length<=0){
      this.bandera= false;
      this.cadena+="Rellena el campo de genero, ";
      }else{
        this.cadena+="";
      }
      if(this.fechanacimiento.length<=0){
      this.bandera= false;
      this.cadena+=" Rellena el campo de fecha";
      
      }else{
        this.cadena+="";
      }

    if (this.bandera) {
    this.registrocompleto = this.id +", "+ this.nombreLista+", "+ this.genero+", "+this.fechanacimiento
    this.nombres.push(this.registrocompleto);
    this.id="";
    this.nombreLista="";
    this.genero="";
    this.fechanacimiento="";
    console.log(this.nombres);    
    }else{
      console.log(this.cadena);
      this.bandera=true;
      
    }
    
  }
}
