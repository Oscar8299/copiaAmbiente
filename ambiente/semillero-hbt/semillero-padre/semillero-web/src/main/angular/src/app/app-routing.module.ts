import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




import { EncabezadoComponent } from './nucleo/capa/encabezado/encabezado.component';
import { MainComponent } from './nucleo/capa/main/main.component';
import { PiepaginaComponent } from './nucleo/capa/piepagina/piepagina.component';
import { CreacionPersonasComponent} from './nucleo/capa/main/creacion-personas/creacion-personas.component'


const routes: Routes = [

{path: 'Encabezado' , component: EncabezadoComponent },
{path: 'Main' , component: MainComponent },
{path: 'PiePagina' , component: PiepaginaComponent },
{path: 'CreacionPersonas' , component: CreacionPersonasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
