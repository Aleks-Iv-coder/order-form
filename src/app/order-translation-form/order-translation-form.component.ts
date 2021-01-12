import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-translation-form',
  templateUrl: './order-translation-form.component.html',
  styleUrls: ['./order-translation-form.component.scss']
})

export class OrderTranslationFormComponent implements OnInit {
  public radioGroupForm: FormGroup;
  form: FormGroup
  fileToUpload: File[] = [];
  model = 1;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      file: new FormControl(),
      translateTone: new FormControl(),
      translateFrom: new FormControl(),
      translateTo: new FormControl
    })

    this.radioGroupForm = this.formBuilder.group({
      'translateTone': 1,
      'translateFrom': 'English'
    });
  }

  handleFileInput(event) {
    const file = event.target.files[0];
    this.fileToUpload.push(file);
    // console.log(this.fileToUpload);
  }

  orderSubmit() {
    // console.log('Form submited', this.form)
    const formData= {...this.form.value}
    console.log('Form data:', formData)
  }
}
