import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-translation-form',
  templateUrl: './order-translation-form.component.html',
  styleUrls: ['./order-translation-form.component.scss']
})

export class OrderTranslationFormComponent implements OnInit {
  public radioGroupForm: FormGroup;
  form: FormGroup;
  uploadedFiles: File[] = [];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      file: new FormControl(),
      translateTone: new FormControl(),
      translateFrom: new FormControl('English'),
      translateTo: new FormControl()
    });

    this.radioGroupForm = this.formBuilder.group({
      translateTone: 1,
      translateFrom: 'English'
    });
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
}
