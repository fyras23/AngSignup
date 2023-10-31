import { weapon } from './../model/weapon.model';
import { Class } from './../model/class.model';
import { Component, OnInit } from '@angular/core';
import { weaponService } from './../services/weapon.service';

@Component({
  selector: 'app-recherche-par-class',
  templateUrl: './recherche-par-class.component.html',
})
export class RechercheParClassComponent implements OnInit {
  IdClass! : number;
  classes! : Class[];
  weapons! : weapon[];
  constructor(private weaponService : weaponService) { }

  ngOnInit(): void {
    this.weaponService.listClass().
subscribe(cats => {this.classes = cats;
console.log(cats);
});

  }
  onChange(){
    this.weaponService.rechercherParClass(this.IdClass).
subscribe(prods =>{this.weapons=prods});


  }
}
