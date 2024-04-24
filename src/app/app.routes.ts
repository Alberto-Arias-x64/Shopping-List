import { Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { FormComponent } from './views/form/form.component';

export const routes: Routes = [
    { path: 'add', component: FormComponent },
    { path: '**', component: MainComponent },
];
