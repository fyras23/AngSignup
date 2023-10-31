import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Class } from '../model/class.model';

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
 
})
export class UpdateClassComponent implements OnInit {
  @Input()
class! : Class;

@Output()
classUpdated = new EventEmitter<Class>();

@Input()
add!:boolean;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.class);
  }
  saveClass(){
    this.classUpdated.emit(this.class);

  }
}
