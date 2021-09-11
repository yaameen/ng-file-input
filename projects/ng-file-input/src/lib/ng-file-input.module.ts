import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import { NgFileInputComponent } from './ng-file-input.component';
import { NgFileInputConfig } from './ng-file-input.config';

@NgModule({
  declarations: [
    NgFileInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FilePondModule,
  ],
  exports: [
    NgFileInputComponent,
    FilePondModule,
  ]
})
export class NgFileInputModule {
  static forRoot(config: NgFileInputConfig) : ModuleWithProviders<NgFileInputModule> {
    if( config.plugins.length ) {
      registerPlugin(...config.plugins)
    }

    return {
      ngModule: NgFileInputModule,
      providers: [
        { provide: NgFileInputConfig, useValue: config }
      ]
    }
  }
}
