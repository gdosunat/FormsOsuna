import { Component, Input } from '@angular/core';
import { Villain } from '../app.component';

@Component({
  selector: 'app-villain-list',
  templateUrl: './villain-list.component.html',
  styleUrls: ['./villain-list.component.css']
})
export class VillainListComponent {

  @Input() villains: Villain[] = []
}
