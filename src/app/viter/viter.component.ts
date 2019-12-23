import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-viter",
  templateUrl: "./viter.component.html",
  styleUrls: ["./viter.component.scss"]
})
export class ViterComponent {
  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();

  didVote: boolean = false;

  vote(agreed: boolean) {
    console.log(agreed);
    this.voted.emit(agreed);
    this.didVote = agreed;
  }

  constructor() {}

  ngOnInit() {}
}
