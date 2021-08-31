export class Profile {
    //1st way of writing class members

    // private firstName:string="";
    // private lastName:string="";
    // private age:number=0;

    // firstName:string="";
    // lastName:string="";
    // age:number=0;

    // constructor(firstName:string, lastName:string, age:number){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    // }

    
    //2nd way of writing class members
    constructor(
        public firstName:string,
        public lastName:string,
        public age:number

    ){}

    getName(){
        return this.firstName + " " + this.lastName;
    }


}
