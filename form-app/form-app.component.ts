import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { from } from 'rxjs';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})
export class FormAppComponent{

  public ganado: Array<string> = [];
  public peso: string="";
  public altura: string="";
  public direccion: string="";
  public tel:string="";
  public sexo: string="";
  public rgN: string="";s
  public mensaje: string ="";
  public fechaNa: string="";

  FormGanado: FormGroup;
  
  
  constructor(
    public fb: FormBuilder
  ) {
    this.FormGanado = this.fb.group({
      
      cpeso: ['', [Validators.required,Validators.minLength(1)]],
      alt: ['', [Validators.required,Validators.minLength(1)]],
      dir: ['', [Validators.required,Validators.minLength(20)]],
    sexoG: ['', [Validators.required,Validators.minLength(5)]],
      fecha: ['', [Validators.required]],
      telefono: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      
    });
  }

  
  registrar(values){
    console.log(values);
  }




  onSubmit(){
    this.rgN =  this.peso +", "+ this.altura +", "+ this.direccion +", "+ 
    this.fechaNa+", "+ this.sexo+","+this.tel;
    this.ganado.push(this.rgN);
    console.log(this.ganado);
  }
}
