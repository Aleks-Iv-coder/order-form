import {Language} from './language';
import {TranslationTone} from './translationTone';
import {Urgency} from './urgency';

export interface Order {
  files: File[];
  translateFrom: Language;
  translateTo: Language;
  translationTone: TranslationTone;
  urgency: Urgency;
  fullName: string;
  email: string;
  password: string;
  cardNumber: string;
  expiryDate: string;
  code: number;
}
