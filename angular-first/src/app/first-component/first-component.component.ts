import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { Computer } from '../computer';
import { ComputerType } from '../computer-type';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {


  fullName:string='';
  profile:Profile = new Profile("Salman","khan",30);//single class object
  profileList:Profile[]=[];
  computer:Computer[]=[];
  computerList:Computer[]=[];
  computerTypes: Array<string> = Object.keys(ComputerType).filter(key => isNaN(+key));
 
  
  constructor(private profileSevice:ProfileService) { 
   
  }

  ngOnInit(): void {    
    //create single class object    
    this.fullName = this.profile.getName();

     //Array of Class Objects
     this.profileList = [
      new Profile("John", "peter", 30),
      new Profile("Salman", "khan", 30),
      new Profile("Sachin", "Tendulkar", 30)
    ];  

    //data fetched from ProfileService
    this.profileList = this.profileSevice.getProfiles();   

    //Interface
    this.computer =[
      {"brand":"Dell", "ram":"12 GB", "type":"Desktop", version:2.0},
      {"brand":"HP", "ram":"12 GB", "type":"Desktop", version:1.0},
      {"brand":"ASUS", "ram":"16 GB", "type":"Laptop", version:4.0}
    ];
    
    //Interface using Enum
    this.computerList =[
      {"brand":"Dell", "ram":"12 GB", "type":ComputerType.Desktop, version:2.0},
      {"brand":"HP", "ram":"12 GB", "type":ComputerType.Laptop, version:1.0},
      {"brand":"ASUS", "ram":"16 GB", "type":ComputerType.Palmtop, version:4.0}
    ];
  }

}
