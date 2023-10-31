import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Class } from '../model/class.model';
import { weapon } from '../model/weapon.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { Image } from '../model/Image.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class weaponService {

  apiURL: string = 'http://localhost:9876/weapon/api';
  apiURLCl: string = 'http://localhost:9876/weapon/api/class';
  Weapons! : weapon[];
  weapon! : weapon;
 // Classes! :Class[];
  constructor(private http : HttpClient,private authService :AuthService) { 
    /* this.Classes=[
      {idClass : 1,nomClass :"rifles"},
      {idClass : 2,nomClass :"pistol"}
      
    ]; */
    /*this.weapons = [
{idwp : 1, namewp : "Kalashnikov AK-47", pricewp : 8500.00, datewp : new Date("05/23/2002"),Class :{idClass : 1,nomClass :"rifles"}},
{idwp : 2, namewp : "Mannlicher M1895", pricewp : 5600.50, datewp : new Date("12/05/2008"),Class :{idClass : 1,nomClass :"rifles"}},
{idwp : 3, namewp :"SkS", pricewp : 6100.123, datewp : new Date("03/20/1956"),Class :{idClass : 1,nomClass :"rifles"}},
{idwp: 4, namewp :"Makarov pistol", pricewp : 2100.03, datewp : new Date("01/14/2011"),Class :{idClass : 2,nomClass :"pistol"}}
    ];*/
  }
  listeWeapon(): Observable<weapon[]> {
    
    return this.http.get<weapon[]>(this.apiURL+"/all");
}
ajouterweapon( weap: weapon):Observable<weapon>{
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt})
  return this.http.post<weapon>(apiURL+"/addwep", weap, {headers:httpHeaders});
}
supprimerweapon(id : number){
  const url = `${apiURL}/delwep/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.delete(url, {headers:httpHeaders});
  
  }
  consulterweapon(id:number):Observable<weapon>{
    const url = `${apiURL}/getbyid/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<weapon>(url,{headers:httpHeaders});
    }
  updateweapon(w:weapon):Observable<weapon>
{
  let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.put<weapon>(apiURL+"/updatewep", w, {headers:httpHeaders});


}
listClass():Observable<Class[]>{
  let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Class[]>(this.apiURLCl,{headers:httpHeaders}
);

  }
  /*conClass(id:number): Class{
    return this.Classes.find(cat => cat.idClass == id)!;
    }*/

    rechercherParClass(idCat: number):Observable< weapon[]> {
      const url = `${apiURL}/prodscat/${idCat}`;
      return this.http.get<weapon[]>(url);
      }


      rechercherParNom(nom: string):Observable< weapon[]> {
        const url = `${apiURL}/wpByName/${nom}`;
        return this.http.get<weapon[]>(url);
        }
        
        ajouterClass( cat: Class):Observable<Class[]>{
          return this.http.post<Class[]>(apiURL+"/class", cat, httpOptions);
          }

          uploadImage(file: File, filename: string): Observable<Image>{
            const imageFormData = new FormData();
            imageFormData.append('image', file, filename);
            const url = `${apiURL + '/image/upload'}`;
            return this.http.post<Image>(url, imageFormData);
            }
            loadImage(id: number): Observable<Image> {
            const url = `${this.apiURL + '/image/get/info'}/${id}`;
            return this.http.get<Image>(url);
            }

            uploadImageWep(file: File, filename: string, idWp:any): Observable<any>{
              const imageFormData = new FormData();
              imageFormData.append('image', file, filename);
              const url = `${this.apiURL + '/image/uplaodImageWep'}/${idWp}`;
              return this.http.post(url, imageFormData);
              }

              supprimerImage(id : number) {
                const url = `${this.apiURL}/image/delete/${id}`;
                return this.http.delete(url, httpOptions);
                }


                
                  
              


}



