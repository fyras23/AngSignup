import { weapon } from './../model/weapon.model';
import { Component, OnInit } from '@angular/core';

import { weaponService } from '../services/weapon.service';
import { Class } from '../model/class.model';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',

})
export class ListClassComponent implements OnInit {
  weapons! :weapon[];
  Classes! : Class[];

  updatedCl:Class = {"idClass":0,"nomClass":""};
  add:boolean=true;
  constructor(private weaponService : weaponService) { }

  ngOnInit(): void {
    this.weaponService.listClass().
subscribe(cats => {this.Classes = cats;
console.log(cats);
});

  }

  classUpdated(cat :Class){
    this.weaponService.ajouterClass(cat).
 subscribe( ()=> this.chargerClass());

  }

  chargerClass(){
    this.weaponService.listClass().
    subscribe(cats => {this.Classes = cats;
    console.log(cats);
    });
    }
    updateClass(cat :Class){
      this.updatedCl=cat;
      this.add=false;

    }
}
