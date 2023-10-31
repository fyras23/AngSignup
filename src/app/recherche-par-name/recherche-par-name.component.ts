import { Component, OnInit } from '@angular/core';
import { weaponService } from './../services/weapon.service';
import { weapon } from './../model/weapon.model';
import { Class } from './../model/class.model';
import { Image } from '../model/Image.model';
@Component({
  selector: 'app-recherche-par-name',
  templateUrl: './recherche-par-name.component.html',
})
export class RechercheParNameComponent implements OnInit {
  
  classes! : Class[];
  weapons! : weapon[];
  allWeapons! : weapon[];
  searchTerm!: string;
  nomWp! :string;
  Weapons! : weapon[];
  constructor(private weaponService : weaponService) { }

  ngOnInit(): void {
    this.weaponService.listeWeapon().subscribe(prods => {
      console.log(prods);
      this.weapons = prods;
      });
      this.chargerWeapon();
  }
  /* rechercherProds(){
    this.weaponService.rechercherParNom(this.nomwp).subscribe(prods => {
    this.weapons = prods;
    console.log(prods)});
    } */

   /* onKeyUp(filterText : string){
      this.weapons = this.allWeapons.filter(item =>
      item.nomWp.toLowerCase().includes(filterText));
      }*/
      
      chargerWeapon(){
        this.weaponService.listeWeapon().subscribe(prods => {
          console.log(prods);
          this.Weapons = prods;
  
          this.Weapons.forEach((prod) => {
            prod.imageStr = 'data:' + prod.images[0].type + ';base64,' + prod.images[0].image;
  });
  });
        }
    
}
