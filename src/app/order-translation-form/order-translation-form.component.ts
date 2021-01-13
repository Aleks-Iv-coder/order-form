import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

const urgencyListSource = {
  "I got time": "our expert translator can take a reasonable amount of time perfecting your translation.",
  "average": "you will get the best translation.",
  "yesterday": "we will do our best to make translation as soon as possible."
};

@Component({
  selector: 'app-order-translation-form',
  templateUrl: './order-translation-form.component.html',
  styleUrls: ['./order-translation-form.component.scss']
})
export class OrderTranslationFormComponent implements OnInit {
  form: FormGroup;
  uploadedFiles: File[] = [];

  urgencyList = urgencyListSource;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      files: [this.uploadedFiles, [Validators.required]],
      translateTone: [null, [Validators.required]],
      translateFrom: ['eng', [Validators.required]],
      translateTo: [null, [Validators.required]],
    });

    //   new FormGroup({
    //   file: new FormControl(),
    //   translateTone: new FormControl(),
    //   translateFrom: new FormControl('eng'),
    //   translateTo: new FormControl()
    // });

  }

  handleFileInput(event): void {
    const file = event.target.files[0];
    this.uploadedFiles.push(file);
    // console.log(this.fileToUpload);
  }

  orderSubmit(): void {
    // console.log('Form submitted', this.form)
    const formData = {...this.form.value};
    console.log('Form data:', formData);
  }

  removeFile(file: File): void {
    this.uploadedFiles.splice(this.uploadedFiles.findIndex(f => f === file), 1);
  }

  setUrgency($event: string): void {
    console.log($event);
  }
}
