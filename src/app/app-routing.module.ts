import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudienciaComponent } from './audiencia/audiencia.component';
import { DrawerComponent } from './drawer/drawer.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path:"", redirectTo:'inicio/registro', pathMatch:'full'},
  {path:"inicio",component: InicioComponent,children:[
    {path:"login", component: LoginComponent},
    {path:"registro", component: RegistrerComponent},
    {path:"usuario", component: UsuarioComponent},
    {path:"audiencia", component: AudienciaComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
