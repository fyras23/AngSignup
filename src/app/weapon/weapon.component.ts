import { Component, OnInit } from '@angular/core';
import { weapon } from '../model/weapon.model';
import { AuthService } from '../services/auth.service';
import { weaponService } from '../services/weapon.service';
import { Image } from '../model/Image.model';



@Component({
  selector: 'app-weapons',
  templateUrl: './weapon.html',
  
})
export class weaponComponent implements OnInit {
  Weapons! : weapon[];
   apiurl:string='http://localhost:9876/weapon/api';
  constructor(private weaponService: weaponService,
    public authService: AuthService ) {
     }
     
   
     

  ngOnInit(): void {
    
    this.chargerWeapon();
  }  
    chargerWeapon(){
      this.weaponService.listeWeapon().subscribe(prods => {
        console.log(prods);
        this.Weapons = prods;

        this.Weapons.forEach((prod) => {
          prod.imageStr = 'data:' + prod.images[0].type + ';base64,' + prod.images[0].image;
});
});
      }
      
      
  
  supprimerweapon(p: weapon)
  {
    let conf = confirm("Are u sure ?");
 if (conf)
    this.weaponService.supprimerweapon(p.idWp!).subscribe(() => {
      console.log("produit supprimé");
      this.chargerWeapon();
      });
      

  }

}