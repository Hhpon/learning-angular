import { Component, OnInit } from "@angular/core";
import { HeroTest } from "../hero-test";

@Component({
  selector: "app-hero-test",
  template: `
    <p>
      hero-test works!
    </p>
    <h1>{{ myHero.name }}</h1>
  `,
  styleUrls: ["./hero-test.component.scss"]
})
export class HeroTestComponent implements OnInit {
  heroes: Object[];
  myHero: Object;
  constructor() {
    this.heroes = [
      new HeroTest(1, "Windstormab"),
      new HeroTest(1, "Bombasto"),
      new HeroTest(1, "Magneta"),
      new HeroTest(1, "Tornado")
    ];
    this.myHero = this.heroes[0];
  }

  ngOnInit() {}
}
