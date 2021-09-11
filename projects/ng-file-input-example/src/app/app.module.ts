import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgFileInputModule } from 'projects/ng-file-input/src/public-api';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import PdfPreview from '@yaameen/filepond-plugin-pdf-preview'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFileInputModule.forRoot({
      plugins: [PdfPreview],
      serverEndpoint: 'http://localhost:4000/api/upload',
    }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
