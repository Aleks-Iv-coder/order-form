export interface Order {
  files: File[];
  translateFrom: Language;
  translateTo: Language;
  translateTone: TranslateTone;
  urgency: Urgency;
  fullName: string;
  email: string;
  password: string;
  cardNumber: string;
  expiryDate: string;
  code: number;
}
