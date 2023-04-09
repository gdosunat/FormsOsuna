import { Component } from '@angular/core';

export type Villain = {
  id: number,
  name: string,
  phrase: string,
  objective:string,
  version:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FormsOsuna';
  villainList: Villain[] = []

  addVillain(villain:Villain){
    console.log(villain.version)
    this.villainList.push({id: this.villainList.length + 1, name: villain.name, phrase: villain.phrase, objective: villain.objective, version: villain.version});
  }
}
