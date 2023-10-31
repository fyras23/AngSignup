import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from '../model/class.model';
import { weapon } from '../model/weapon.model';
import { weaponService } from '../services/weapon.service';
import { Image } from '../model/Image.model';

@Component({
  selector: 'app-add-weapon',
  templateUrl: './add-weapon.component.html',
  
})
export class AddProductComponent implements OnInit {
  newweapon = new weapon();
  Classes! : Class[];
  newClass! : Class;
  newIdClass! :number;
  uploadedImage!: File;
imagePath: any;
  constructor(private weaponService: weaponService,
    private router :Router) { }

  ngOnInit(): void {
    this.weaponService.listClass().
subscribe(cats => {this.Classes = cats;
console.log(cats);
});
  }
 /* addweapon(){
    this.weaponService
    .uploadImage(this.uploadedImage, this.uploadedImage.name)
    .subscribe((img: Image) => {
    this.newweapon.image=img;
    this.newweapon.classe = this.Classes.find(cat => cat.idClass
    == this.newIdClass)!;
    this.weaponService
    .ajouterweapon(this.newweapon)
    .subscribe(() => {
    this.router.navigate(['weapons']);
    });
    });
    
;

    }*/

    addweapon(){
      this.newweapon.classe = this.Classes.find(cat => cat.idClass == this.newIdClass)!;
      this.weaponService.ajouterweapon(this.newweapon).subscribe((wp) => {
      this.weaponService.uploadImageWep(this.uploadedImage,
              this.uploadedImage.name, wp.idWp)
            .subscribe((response: any) => { }
            );
          this.router.navigate(['weapons']);
        });
    }

    onImageUpload(event: any) {
      this.uploadedImage = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = (_event) => { this.imagePath = reader.result; }
      }

      onAddImageWeapn() {
        this.weaponService
        .uploadImageWep(this.uploadedImage,
        this.uploadedImage.name,this.newweapon.idWp)
        .subscribe( (img : Image) => {
        this.newweapon.images.push(img);
        });
        }
    
}
