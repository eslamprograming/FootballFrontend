import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheardModule } from "../Sheard/Sheard.module";
import { LayoutComponent } from './Layout/Layout.component';
// import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
    declarations: [	
        AppComponent,
      LayoutComponent
   ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SheardModule,RouterModule,FormsModule
    ]
})
export class AppModule { }
