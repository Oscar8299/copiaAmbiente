import { Component, OnInit } from '@angular/core';
import { personaDTO} from './modelo/personaDTO';


@Component({
  selector: 'app-creacion-personas',
  templateUrl: './creacion-personas.component.html'
})
export class CreacionPersonasComponent implements OnInit {

  
persona : personaDTO;
   personas : personaDTO[];
  public mostrarFormulario : boolean;
  public header : string = 'Crear Personas';
  
  constructor() { }

  ngOnInit() {
    this.persona = {

    id : '0',
    nombre : '',
    apellido: '',
    tipoIdentificacion : '',
    numeroIdentificacion : '',
    mayorEdad : false,
    sexo : '',
    fechaNacimiento : null


  };

  this.personas = [];
  this.mostrarFormulario = true;

  }
  public guardarPersona(){
    this.personas.push(this.persona);
    this.persona = {

    id : '0',
    nombre : '',
    apellido: '',
    tipoIdentificacion : '',
    numeroIdentificacion : '',
    mayorEdad : false,
    sexo : '',
    fechaNacimiento : null

  }
  }

}
