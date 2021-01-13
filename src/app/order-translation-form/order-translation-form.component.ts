import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Order} from '../models/order';
import urgencyList from '../urgencyList.json';
import {Urgency} from '../models/urgency';
import {Language} from '../models/language';
import {TranslationTone, translationToneDescription} from '../models/translationTone';



@Component({
  selector: 'app-order-translation-form',
  templateUrl: './order-translation-form.component.html',
  styleUrls: ['./order-translation-form.component.scss']
})
export class OrderTranslationFormComponent implements OnInit {
  form: FormGroup;
  uploadedFiles: File[] = [];
  order: Order;
  urgency: Urgency;

  urgencyList = urgencyList;
  languages = Language;
  translationTones = TranslationTone;
  translationToneDescription = translationToneDescription;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      files: [this.uploadedFiles, [Validators.required]],
      translateTone: [null, [Validators.required]],
      translateFrom: ['english', [Validators.required]],
      translateTo: [null, [Validators.required]],
      fullName: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      cardNumber: [null, [Validators.required]],
      expiryDate: [null, [Validators.required]],
      code: [null, [Validators.required]],
      isTermsAgreed: [false, [Validators.required]]
    }, { updateOn: 'submit'});
  }

  get controls() {
    return this.form.controls;
  }

  handleFileInput(event): void {
    const file = event.target.files[0];
    this.uploadedFiles.push(file);
  }

  removeFile(file: File): void {
    this.uploadedFiles.splice(this.uploadedFiles.findIndex(f => f === file), 1);
  }

  setUrgency($event: string): void {
    this.urgency = $event as unknown as Urgency;
  }

  orderSubmit(): void {
    this.order = {...this.form.value};
    this.order.files = this.uploadedFiles;
    this.order.urgency = this.urgency;

    console.log(this.order);
  }
}
