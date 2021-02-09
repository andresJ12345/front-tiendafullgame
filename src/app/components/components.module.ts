import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { ListGameComponent } from './list-game/list-game.component';
import { CreateTecnologyGameComponent } from './create-tecnology-game/create-tecnology-game.component';
import { ListTecnologyGameComponent } from './list-tecnology-game/list-tecnology-game.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ListAlquilerComponent } from './list-alquiler/list-alquiler.component';
import { CreateAlquilerComponent } from './create-alquiler/create-alquiler.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        CreateGameComponent,
        EditGameComponent,
        ListGameComponent,
        CreateTecnologyGameComponent,
        ListTecnologyGameComponent,
        RegisterClientComponent,
        ListClientsComponent,
        EditClientComponent,
        ListAlquilerComponent,
        CreateAlquilerComponent,
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
