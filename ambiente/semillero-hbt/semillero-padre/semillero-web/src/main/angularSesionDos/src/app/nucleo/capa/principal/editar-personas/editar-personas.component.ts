import { Component, OnInit } from '@angular/core';
import { personaDTO} from './modelo/personaDTO';


@Component({
  selector: 'app-editar-personas',
  templateUrl: './editar-personas.component.html'
})
export class EditarPersonasComponent implements OnInit {

  
persona : personaDTO;
   personas : personaDTO[];
  public mostrarFormulario : boolean;
  public header : string = 'Editar Personas';
  
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
  public editarPersona(){
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
