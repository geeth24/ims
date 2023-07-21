import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
const routes: Routes = [
  // Define your routes here...
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TextFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    StepsModule,
    RouterModule.forRoot(routes), // Add this line to configure the router module
    ButtonModule,
    InputTextModule,
    SelectButtonModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
