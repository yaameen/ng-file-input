import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, DoCheck, ElementRef, Injector, Input, ViewChild } from '@angular/core';
import { Component, forwardRef, OnDestroy, OnInit, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FilePondOptions } from 'filepond';
import { FilePondComponent } from 'ngx-filepond/filepond.component';
import { BehaviorSubject, Subject } from 'rxjs';
import { NgFileInputConfig } from './ng-file-input.config';


@Component({
  selector: 'ng-file-input',
  templateUrl: './ng-file-input.template.html',
  styleUrls: [
    "./ng-file-input.style.scss",
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgFileInputComponent),
      multi: true,
    },
    {
      provide: MatFormFieldControl,
      useExisting: NgFileInputComponent,
    }
  ]
})
export class NgFileInputComponent implements OnInit, AfterViewInit, OnDestroy, DoCheck, ControlValueAccessor, MatFormFieldControl<NgFileInputComponent> {

  state: any

  defaultOptions: FilePondOptions = {
    maxFiles: 1,
    allowMultiple: true,
    labelIdle: 'Drop files here...',
    server: '/api/upload',
    name: 'attachment',
    //   @ts-ignore
    credits: '',
  }

  @ViewChild('myPond', { static: true }) myPond!: FilePondComponent

  
  @Input('options')
  _pondOptions?: FilePondOptions

  pondOptions: FilePondOptions

  propagateChange = (_: any) => { };
  onTouched!: () => void;
  files: BehaviorSubject<FilePondOptions["files"]>


  value: NgFileInputComponent;
  stateChanges = new Subject<void>();;
  
  @Input()
  id: string;
  
  @Input()
  placeholder: string;
  ngControl: NgControl;
  focused: boolean;
  empty: boolean;
  
  shouldLabelFloat: boolean = true;
  
  required: boolean;

  @Input()
  disabled: boolean;
  errorState: boolean;
  controlType?: string;
  
  @Input()
  autofilled?: boolean;
  userAriaDescribedBy?: string;


  constructor(
    public elRef: ElementRef, public injector: Injector, private fm: FocusMonitor,
    @Optional() private  config?: NgFileInputConfig,
  ) {

    this.files = new BehaviorSubject([])
    this.setConfigurations()

    fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.onTouched()
      this.stateChanges.next();
    });
  }

  ngAfterViewInit(): void {
    if (this.state) {
      setTimeout(() => {
        this.setFiles(this.state)
      }, 0)
    }
  }


  setConfigurations() {
    this.pondOptions = this.defaultOptions;

    this.required = this.elRef.nativeElement.attributes.required != undefined

    if (this.config.options) {
      this.pondOptions = { ...this.pondOptions, ...this.config.options }
    }
    
    if (this.config.serverEndpoint) {
      this.pondOptions.server = this.config.serverEndpoint;
    }

    if (this._pondOptions) {
      this.pondOptions = { ...this.pondOptions, ...this._pondOptions }
    }
  }

  setFiles(file: string[] | string) {

    if(!file) return

    if (!(file instanceof Array)) {
      file = [file]
    }
    
    this.files.next(file.map(i => ({
        source: i,
        options: {
          type: 'limbo'
        }
      }))
    )
  }


  ngDoCheck(): void {
    if (this.ngControl) {
      this.errorState = this.ngControl.invalid && (this.ngControl.touched || this.ngControl.dirty);
      this.stateChanges.next();
    }
  }

  setDescribedByIds(ids: string[]): void {
    // throw new Error('Method not implemented.');
  }
  onContainerClick(event: MouseEvent): void {
    // this.myPond.ngAfterViewInit()
  }

  ngOnDestroy(): void {
    this.fm.stopMonitoring(this.elRef.nativeElement);
    this.stateChanges.complete()
  }

  writeValue(obj: any): void {
    this.state = obj;
    if(this.state) {
      this.setFiles(this.state)
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);
    if (this.ngControl != null) { this.ngControl.valueAccessor = this; }
  }

  pondFileInit(e: any) {
    console.log('Haha', e);
  }

  pondHandleInit() {
  }

  pondHandleAddFile(event: any) {
    console.log(event, 'clicked...');

  }

  pondHandleActivateFile(event: any) {

  }

  pondUploaded(event: any) {
    if (event.file.serverId) {
      this.propagateChange(event.file.serverId)
    }
  }

  pondFileRemoved(event: any) {
    this.propagateChange(null);
  }

}
