import { Component, OnInit } from '@angular/core';
import { personaDTO} from './modelo/personaDTO';

@Component({
  selector: 'app-apoyo',
  templateUrl: './apoyo.component.html',  
})
export class ApoyoComponent implements OnInit {

	 persona : personaDTO;
	 personas : personaDTO[];
	public mostrarFormulario : boolean;

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

  public mostrar(){

  }
  public ocultar(){

  }
  public guardar(){
  	this.personas.push(this.persona);
  	console.log('guardar' + this.persona.nombre);

  }
  private borrar(){

  }

}
