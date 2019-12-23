import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-parent',
  template: `
    <p>
      hero-parent works!
    </p>
  `,
  styleUrls: ['./hero-parent.component.scss']
})
export class HeroParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
