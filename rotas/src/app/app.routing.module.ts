import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

//import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosGuard } from './guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
    {path: 'cursos', 
        loadChildren: '../app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
},
    {path: 'alunos', 
        loadChildren: '../app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        //canActivateChild: [AlunosGuard]
        canLoad: [AuthGuard]
},
  //  {path: 'cursos', component: CursosComponent},
   // {path: 'curso/:id', component: CursoDetalheComponent},
    {path: 'login', component: LoginComponent},
    //{path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    {path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]    
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**' , component: PaginaNaoEncontradaComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class ApppRoutingModule{}
             
