import { Component, OnInit } from "@angular/core";

import { HeroForm } from "../hero-form";

@Component({
  selector: "app-hero-form",
  templateUrl: "./hero-form.component.html",
  styleUrls: ["./hero-form.component.scss"]
})
export class HeroFormComponent implements OnInit {
  powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];

  model = new HeroForm(18, "Dr IQ", this.powers[0], "Chuck OverStreet");

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  constructor() {}

  ngOnInit() {}
}
