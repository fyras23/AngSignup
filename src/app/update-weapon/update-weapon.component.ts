import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { weaponService } from '../services/weapon.service';
import { weapon } from '../model/weapon.model';
import { Class } from '../model/class.model';
import { Image } from '../model/Image.model';


@Component({
  selector: 'app-update-weapon',
  templateUrl: './update-weapon.component.html',
  
})
export class UpdateProductComponent implements OnInit {
  currentweapon = new weapon();
  Classes!: Class[];
  uppClassId? : number;
  myImage! : string;
  uploadedImage!: File;
  imagePath: any;
  isImageUpdated: Boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,

  private weaponService: weaponService) { }
  ngOnInit() {
    this.weaponService.listClass().
subscribe(cats => {this.Classes = cats;
console.log(cats);
});


    this.weaponService.consulterweapon(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentweapon = prod; 
                        this.uppClassId=this.currentweapon.classe?.idClass;





                       /*  this.weaponService
                        .loadImage(this.currentweapon.image.idImage)
                        .subscribe((img: Image) => {
                        this.myImage = 'data:' + img.type + ';base64,' + img.image;
                        });      */               
    } ) ;
  } 
  updateweapon()
{ 
  this.currentweapon.classe = this.Classes.
 find(cat => cat.idClass == this.uppClassId)!;
 if (this.isImageUpdated)
 {
 this.weaponService
 .uploadImage(this.uploadedImage, this.uploadedImage.name)
 .subscribe((img: Image) => {
 this.currentweapon.image = img;
 this.weaponService
 .updateweapon(this.currentweapon)
 .subscribe((prod) => {
 this.router.navigate(['weapons']);
 });
 });
 }
 


else{
  this.weaponService.updateweapon(this.currentweapon).subscribe(prod => {
    this.router.navigate(['weapons']); }
    );
  }
}
onImageUpload(event: any) {
  if(event.target.files && event.target.files.length) {
  this.uploadedImage = event.target.files[0];
  this.isImageUpdated =true;
  const reader = new FileReader();
  reader.readAsDataURL(this.uploadedImage);
  reader.onload = () => { this.myImage = reader.result as string; };
  }
}

onAddImageWeapn() {
  this.weaponService
  .uploadImageWep(this.uploadedImage,
  this.uploadedImage.name,this.currentweapon.idWp)
  .subscribe( (img : Image) => {
  this.currentweapon.images.push(img);
  });
  }

  supprimerImage(img: Image){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.weaponService.supprimerImage(img.idImage).subscribe(() => {
    //supprimer image du tableau currentProduit.images
    const index = this.currentweapon.images.indexOf(img, 0);
    if (index > -1) {
    this.currentweapon.images.splice(index, 1);
    }
    });
    }
  

  }
  

