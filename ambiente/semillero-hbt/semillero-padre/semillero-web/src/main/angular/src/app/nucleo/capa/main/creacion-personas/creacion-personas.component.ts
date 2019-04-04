import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacion-personas',
  templateUrl: './creacion-personas.component.html',
  styleUrls: ['./creacion-personas.component.css']
})
export class CreacionPersonasComponent implements OnInit {
	
	public id : string = "1";
	public numeroId: String = "1094925368";
	public nombre : String = "Oscar";
	public apellido : String = "Ortiz";
	

  constructor() { }

  ngOnInit() {
  }

}
