import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddVillainFormComponent } from './components/add-villain-form/add-villain-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VillainListComponent } from './villain-list/villain-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVillainFormComponent,
    VillainListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
