import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Villain } from 'src/app/app.component';
import { Version } from 'src/app/models';

@Component({
  selector: 'app-add-villain-form',
  templateUrl: './add-villain-form.component.html',
  styleUrls: ['./add-villain-form.component.css']
})
export class AddVillainFormComponent {

  @Output("addVillain") addVillain = new EventEmitter<Villain>();

  registerForm: FormGroup = new FormGroup({});

  nameControl = new FormControl('', [
    Validators.required,
  ]);
  phraseControl = new FormControl('', [
    Validators.minLength(10),
    Validators.required
  ]);
  objectiveControl = new FormControl('', [
    Validators.required,
    Validators.minLength(25),
    Validators.maxLength(100)
  ]);
  versionControl = new FormControl("",);

  selectedVersion: Version = new Version(1, "Bigger And Badder", "assets/img/BiggerandBadder.webp");

  versions: Version[] = [
    new Version(1, "Bigger And Badder", "assets/img/BiggerandBadder.webp"),
    new Version(2, "Despicable Plots", "assets/img/DespicablePlots.webp"),
    new Version(3, "Evil Comes Prepared", "assets/img/EvilComesPrepared.webp"),
    new Version(4, "Wicked to the Core", "assets/img/Wicked.webp"),
  ]

  constructor(public formBuilder: FormBuilder){
    this.registerForm = this.formBuilder.group({
      name: this.nameControl,
      phrase: this.phraseControl,
      objective: this.objectiveControl,
      version: this.versionControl
    })
  }

  onSubmit(): void {
    if(!this.registerForm.invalid && this.nameControl.value != "" && this.phraseControl.value != "" && this.objectiveControl.value != ""){
      this.addVillain.emit({
          id: 0,
          name:this.nameControl.value!,
          phrase: this.phraseControl.value!,
          objective: this.objectiveControl.value!,
          version: this.selectedVersion.name!
        });
        alert("Exito!");

    } else {
      alert("Formulario no valido. Por favor llenalo correctamente")
    }
  }

  onVersionChange(event:any): void {
    this.versionControl = event.target.value
    this.selectedVersion = this.versions.filter(version => version.name == event.target.value)[0];
    if(this.selectedVersion == null){
      this.selectedVersion = new Version(0,"","");
    }
  }

}
