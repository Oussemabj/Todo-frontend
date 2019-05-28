import { Injectable } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }



authenticate(username,password){
  //console.log('before'+this.isUserLoggedIn());
    if(username==='oussema'&& password==='123'){
    sessionStorage.setItem('authenticaterUser', username);
    //console.log('after'+this.isUserLoggedIn());

    return true;
}
return false;
}
isUserLoggedIn(){
let user=  sessionStorage.getItem('authenticaterUser')
return  !(user===null)
}
logout(){
  sessionStorage.removeItem('authenticaterUser')
}
}
