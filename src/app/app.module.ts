import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/item/item.component';
import { ItemsComponent } from './components/items/items.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ItemComponent,
        ItemsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
