import { weaponService } from './../services/weapon.service';
import { Component, OnInit } from '@angular/core';
import { Class } from '../model/class.model';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
})
export class ClassListComponent implements OnInit {
  Classes! : Class[];
  constructor(private weaponService : weaponService) { }

  ngOnInit(): void {
    /*this.weaponService.listClasses().
subscribe(cats => {this.Classes = cats._embedded.categories;
console.log(cats);
});*/

  }

}
