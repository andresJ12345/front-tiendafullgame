import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { ListGameComponent } from './components/list-game/list-game.component';
import { CreateTecnologyGameComponent } from './components/create-tecnology-game/create-tecnology-game.component';
import { ListTecnologyGameComponent } from './components/list-tecnology-game/list-tecnology-game.component';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ListAlquilerComponent } from './components/list-alquiler/list-alquiler.component';
import { CreateAlquilerComponent } from './components/create-alquiler/create-alquiler.component';

const routes: Routes =[
    { path: '', component: ComponentsComponent },
    { path: 'home', component: ComponentsComponent },
    { path: 'create-game', component: CreateGameComponent },
    { path: 'edit-game/:id', component: EditGameComponent},
    { path: 'list-game', component: ListGameComponent},
    { path: 'create-tecnology-game', component: CreateTecnologyGameComponent},
    { path: 'create-tecnology-game/:id', component: CreateTecnologyGameComponent},
    { path: 'list-tecnology-game', component: ListTecnologyGameComponent},
    { path: 'register-client', component: RegisterClientComponent},
    { path: 'list-clients', component: ListClientsComponent},
    { path: 'edit-client/:id', component: EditClientComponent},
    { path: 'list-alquiler', component: ListAlquilerComponent},
    { path: 'create-alquiler', component: CreateAlquilerComponent},
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
    useHash: false,
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
