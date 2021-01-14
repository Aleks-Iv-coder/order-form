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
  urgency: Urgency = Urgency.average;

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
      fullName: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
      email: [null, [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)]],
      cardNumber: [null, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      expiryDate: [null, [Validators.required, Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{2}$/) ]],
      code: [null, [Validators.required, Validators.maxLength(3), Validators.pattern(/^[0-9]*$/)]],
      isTermsAgreed: [false, [Validators.required]]
    }, );
  }
  // { updateOn: 'submit'}

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
