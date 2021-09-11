# Ng File Input

A wrapper around [FilePond](https://www.npmjs.com/package/ngx-filepond) that simplifies usage by encapsulating several configuration otherwise required.


- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)



## Installation

```bash
npm i --save @yaameen/ng-file-input
```

## Setup

Simply import **NgFileInputModule** from the library to your **app.module.ts** and specify the global configurations as shown in the example below.

FilePond supports multiple [plugins](https://pqina.nl/filepond/plugins). To use a plugin, first install it as necessary.

### Install PDF preview
```bash
npm i --save https://github.com/yaameen/filepond-plugin-pdf-preview
```

```typescript

import { NgFileInputModule } from 'ng-file-input';
// Import the plugin(s)
import PdfPreview from '@yaameen/filepond-plugin-pdf-preview'

@NgModule({
  imports: [
    NgFileInputModule.forRoot({
    // Specify the plugins you want to use
      plugins: [PdfPreview],
    // set the upload handler globally   
      serverEndpoint: 'http://localhost:8000/api/upload',
    }),
  ],
  providers: []
})
export class AppModule {
}
```

## Usage

Use with angular reactive forms

```html
<form [formGroup]='form'>
    <mat-form-field>
      <mat-label>File</mat-label>
      <ng-file-input required formControlName='state'></ng-file-input>
      <mat-hint>Choose a PDF</mat-hint>
    </mat-form-field>
  </form>
```

## License 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
