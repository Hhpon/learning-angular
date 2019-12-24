import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-profile-editor",
  templateUrl: "./profile-editor.component.html",
  styleUrls: ["./profile-editor.component.scss"]
})
export class ProfileEditorComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  // profileForm = new FormGroup({
  //   firstName: new FormControl(""),
  //   lastName: new FormControl(""),
  //   address: new FormGroup({
  //     street: new FormControl(""),
  //     city: new FormControl(""),
  //     state: new FormControl(""),
  //     zip: new FormControl("")
  //   })
  // });

  profileForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: [""],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""]
    }),
    aliases: this.fb.array([this.fb.control("")])
  });

  get aliases() {
    return this.profileForm.get("aliases") as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(""));
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  changeFirstName() {
    // this.profileForm.setValue({
    //   firstName: "test",
    //   lastName: "test",
    //   address: {
    //     street: "test",
    //     city: "test",
    //     state: "test",
    //     zip: "test"
    //   }
    // });
    this.profileForm.patchValue({
      firstName: "Nancy",
      address: {
        street: "123 Drew Street"
      }
    });
  }
}
