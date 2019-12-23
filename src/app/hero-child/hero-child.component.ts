import { Component, OnInit } from "@angular/core";

import { HEROES } from "../mock-heroes";

@Component({
  selector: "app-hero-child",
  template: `
    <h3>{{ mockHeroes[0].name }}says:</h3>
  `,
  styleUrls: ["./hero-child.component.scss"]
})
export class HeroChildComponent implements OnInit {
  mockHeroes: any[];
  constructor() {
    this.mockHeroes = HEROES;
  }

  ngOnInit() {}
}
