import { Injectable } from '@angular/core';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile:Profile[]=[];
  constructor() { }

  public getProfiles(){
    this.profile = [
      new Profile("John", "peter", 30),
      new Profile("Salman", "khan", 30),
      new Profile("Sachin", "Tendulkar", 30)
    ];
    return this.profile
  }
  
}
