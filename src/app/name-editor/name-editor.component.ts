import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-name-editor",
  templateUrl: "./name-editor.component.html",
  styleUrls: ["./name-editor.component.scss"]
})
export class NameEditorComponent implements OnInit {
  name = new FormControl();
  age = new FormControl();

  constructor() {}

  ngOnInit() {}

  updateName() {
    console.log('修改名字');
    this.name.setValue("NancY");
  }
}
