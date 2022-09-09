import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './components/add/add.component'
import { ItemsComponent } from './components/items/items.component';

const routes: Routes = [
    { path: '', component: ItemsComponent },
    { path: 'add', component: AddComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
