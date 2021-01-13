import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Urgency} from '../models/urgency';


@Component({
  selector: 'app-urgency-selector',
  templateUrl: './urgency-selector.component.html',
  styleUrls: ['./urgency-selector.component.scss']
})
export class UrgencySelectorComponent implements OnInit {
  @Input() urgencyList;
  @Input() default;
  @Output() setUrgency = new EventEmitter<string>();

  points: {label: string, indent: number}[];
  chosen: {type: string, description: string};

  ngOnInit(): void {
    const step = 100 / (Object.keys(this.urgencyList).length - 1) ;
    this.points = Object.keys(this.urgencyList).map((label, i) => ({label, indent: i * step}));
    this.chosen = {type: this.default, description: this.urgencyList[this.default]};
  }

  select($event: MouseEvent): void {
    document.querySelector('.circle.active')?.classList.remove('active');

    let element = $event.target as HTMLElement;
    if (element.classList.contains('label')) {
      element = element.parentElement;
    }
    element.classList.add('active');

    this.chosen = {type: element.innerText, description: this.urgencyList[element.textContent]};

    this.setUrgency.emit(element.textContent);
  }
}
