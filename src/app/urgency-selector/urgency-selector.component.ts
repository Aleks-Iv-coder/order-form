import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-urgency-selector',
  templateUrl: './urgency-selector.component.html',
  styleUrls: ['./urgency-selector.component.scss']
})
export class UrgencySelectorComponent implements OnInit {
  urgency = {
    "I got time": "our expert translator can take a reasonable amount of time perfecting your translation.",
    "average": "you will get the best translation.",
    "yesterday": "we will do our best to make translation as soon as possible."
  }

  points: {label: string, indent: number}[];
  chosen: {type: string, description: string}

  ngOnInit(): void {
    const step = 100 / (Object.keys(this.urgency).length - 1) ;
    this.points = Object.keys(this.urgency).map((label, i) => ({label, indent: i * step}))
  }

  select($event: MouseEvent) {
    document.querySelector('.circle.active')?.classList.remove('active');

    let element = $event.target as HTMLElement;
    if(element.classList.contains('label')) {
      element = element.parentElement;
    }
    element.classList.add('active');

    this.chosen = {type: element.innerText, description: this.urgency[element.textContent]};
  }
}
