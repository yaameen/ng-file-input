import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form: FormGroup
  title = 'ng-file-input-example';

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      state: new FormControl(null),
    })
  }

  check() {
    this.form.get('state').patchValue('u4pIJPtx7p')
  }
}
