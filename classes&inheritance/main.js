// const car = { //all object syntaxs - have to give a value
    //     make: "Suzuki",
    //     model: "Swift",
    //     colour: "Silver",
    //     reg: "MW62WJY",
    //     engineSize: 1.2,
    //     year: "2013",
    //     transmission: "Manual",
    //     MOT: true,
    //     tax: true,
    // }
    
    // const Rosie = {
    //     _name: "Rosie",
    //     _hops: 0,
    
    //     get name() {
    //         return this._name;
    //     },
    
    //     get hops() {
    //         return this._hops;
    //     },
    
    // //     increaseHops() {
    // //         this._hops++;
    // //     }
    
    // // }
    // //if want to have loads of bunnies - use a class(template)
    
    // class Bunny {
    //     constructor(name) { //what do you need - get given a name from user to create instance
    //         this._name = name;
    //         this._hops = 0;
    //         // this._legs = legs;
    //     }
    //     get name() {
    //         return this._name; //will just say the value now
    //     }
    //     get hops() {
    //         return this._hops;
    //     }
    //     // get legs() {
    //     //     return this._legs;
       
    //     increaseHops() {
    //         this._hops++;
    //     }
    // }
    
    // const rosie = new Bunny("Rosie");
    // const stuart = new Bunny("Stuart");
    // // const lizzie = new Bunny(5);
    // const lizzie = new Bunny("lizzie",5,4);
    // rosie.increaseHops();
    // rosie.increaseHops();
    // rosie.increaseHops();
    // console.log(rosie.hops);
    
    //increase hops is still  a function as doesnt have get infront of it
    // console.log(rosie.name);
    // console.log(stuart);
    // console.log(lizzie);
    
    class car {
        constructor(name,make,model,colour,reg,engineSize,year,transmission,MOT,tax) {
            this._name = name;
            this._make = make;
            this._model = model;
            this._colour = colour;
            this._reg = reg;
            this._engineSize = engineSize;
            this._year = year;
            this._transmission = transmission;
            this._MOT = MOT;
            this._tax = tax;
        }
        get name() {
            return this._name;
        } 
        get make() {
            return this._make;
        }
        get model() {
            return this._model;
        }
        get colour() {
            return this._colour;
        }
        get reg() {
            return this._reg;
        }
        get engineSize() {
            return this._engineSize;
        }
        get year() {
            return this._year;
        }
        get transmission() {
            return this._transmission;
        }
        get MOT() {
            return this._MOT;
        }
        get tax() {
            return this._tax;
        }
    }
    const emma = new car("Ford","Fiesta");
    console.log(emma.name, emma.make);
    
    // // Let’s create a class called Cars for a car parking
    // // company.
    // This will allow you to store information of: car
    // registration number, number of hours parked and total
    // amount charged. (Say £1.50 per hour?)
    
    // The first car entered the car park, parked for 5 hours
    // and ready to pay. Display this information so the driver
    // can pay for his/her parking fee.
    
    // class CarPark {
    //     constructor(registrationNumber, hoursParked) { // don't need totalAmount in the constructor as its a set amount
    //         this._registrationNumber = registrationNumber;
    //         this._hoursParked = hoursParked;
    //         this.totalAmount = 1.50;
    //     }
    //     get registrationNumber() {
    //         return this._registrationNumber;
    //     }
    //     get hoursParked() {
    //         return this._hoursParked;
    //     }
    //     increaseAmount() {
    //         return this._hoursParked * this.totalAmount;
    //     }
    // }
    // const amountToPay = new CarPark("MW627GY", 5);
    // console.log(amountToPay.increaseAmount());
    
    
    class Animal {
        constructor(name) {
            this._name = name;
            this._hunger = 100;
            this._thirst = 100;
        }
        get name() {
            return this._name;
        }
        get hunger() {
            return this._hunger;
        }
        get thirst() {
            return this._thirst;
        }
        eat() {
            this._hunger--;
        }
        drink() {
            this.thirst--;
        }
    
    } // 1st OOP principle
    class Bunny extends Animal {
        constructor(name, lovesCarrot) {
            super(name);
            this._lovesCarrot = lovesCarrot;
        }
        get lovesCarrots() {
            return this._lovesCarrot;
        }
    }
    // const rosie = new Bunny("Nick", true); // return name rosise, hunger 100, thirst 100, lovecarrots true
    // console.log(rosie.name, rosie.lovesCarrots);
    
    class Cat extends Animal {
        constructor(name, lovesCatnip,favFood) {
            super(name);
            this._lovesCatnip = lovesCatnip;
            this._favFood = favFood;
    
        }
        get lovesCatnip() {
            return this._lovesCatnip;
        }
        get favFood() {
            return this._favFood;
        }
    }
    // const rosie = new Cat("winston", true);
    // console.log(rosie.name, rosie.lovesCatnip);
    const rosie = new Cat ("Winston", true, ["tuna", "chicken","biscuits"]);
    console.log(rosie.name, rosie.lovesCatnip ? 'Loves catnip' : 'Does not like catnip', rosie.favFood[0])
    
    
    class Codenation {
        constructor (name,age,course) {
            this._name = name;
            this._age = age;
            this._course = course;
        }
        get name() {
            return this._name;
        }
        get age() {
            return this._age;
        }
        get course() {
            return this._course;
        }
    }
    // const student = new student ("Nick", 32, "Master Coding");
    // console.log(student.name, student.age, student.course);
    
    class typeOfStudent extends Codenation { // add if else
        constructor(name, selffunded, language) {
            super(name);
            this._selffunded = selffunded;
            this._language = language;
        }
        get selffunded() {
            return this._selffunded;
        }
        get language() {
            return this._language;
        }
    }
    const student = new typeOfStudent("james", true, "javascript");
    console.log(student.name, student.age,student.selffunded, student.language); // want it to return all the info
    
    
    
    
    class CarPark {
        constructor(registrationNumber, hoursParked) { // don't need totalAmount in the constructor as its a set amount
            this._registrationNumber = registrationNumber;
            this._hoursParked = hoursParked;
            this.totalAmount = 1.50;
        }
        get registrationNumber() {
            return this._registrationNumber;
        }
        get hoursParked() {
            return this._hoursParked;
        }
        increaseAmount() {
            return this._hoursParked * this.totalAmount;
        }
    }
    const amountToPay = new CarPark("MW627GY", 5);
    console.log(amountToPay.increaseAmount());
    
    /*Add a subclass for staff, so that staff can provide their
    staff number, and credits they have left to pay for the
    car park fees.
    
    Given a staff member parked for 5 hours as before,
    show how much it will be charged and remaining balance
    e.g 1 credit = 1 hour */
    
    class Staff extends Carpark {
        constructor(staffNumber, credits) {
            super(hoursParked)
            this._staffNumber = staffNumber;
            this._credits = credits;
        }
        get staffNumber() {
            return this._staffNumber;
        }
        get credits() {
            return this._credits;
        }
        discount() {
            return this._hoursParked - this._credits * super.amountToPay
        }
    }
    
    const amountToPay = new Staff(250, 1);
    console.log(amountToPay.discount());//please create an object with your car details in
    
    // const car = { //all object syntaxs - have to give a value
    //     make: "Suzuki",
    //     model: "Swift",
    //     colour: "Silver",
    //     reg: "MW62WJY",
    //     engineSize: 1.2,
    //     year: "2013",
    //     transmission: "Manual",
    //     MOT: true,
    //     tax: true,
    // }
    
    // const Rosie = {
    //     _name: "Rosie",
    //     _hops: 0,
    
    //     get name() {
    //         return this._name;
    //     },
    
    //     get hops() {
    //         return this._hops;
    //     },
    
    // //     increaseHops() {
    // //         this._hops++;
    // //     }
    
    // // }
    // //if want to have loads of bunnies - use a class(template)
    
    // class Bunny {
    //     constructor(name) { //what do you need - get given a name from user to create instance
    //         this._name = name;
    //         this._hops = 0;
    //         // this._legs = legs;
    //     }
    //     get name() {
    //         return this._name; //will just say the value now
    //     }
    //     get hops() {
    //         return this._hops;
    //     }
    //     // get legs() {
    //     //     return this._legs;
       
    //     increaseHops() {
    //         this._hops++;
    //     }
    // }
    
    // const rosie = new Bunny("Rosie");
    // const stuart = new Bunny("Stuart");
    // // const lizzie = new Bunny(5);
    // const lizzie = new Bunny("lizzie",5,4);
    // rosie.increaseHops();
    // rosie.increaseHops();
    // rosie.increaseHops();
    // console.log(rosie.hops);
    
    //increase hops is still  a function as doesnt have get infront of it
    // console.log(rosie.name);
    // console.log(stuart);
    // console.log(lizzie);
    
    class car {
        constructor(name,make,model,colour,reg,engineSize,year,transmission,MOT,tax) {
            this._name = name;
            this._make = make;
            this._model = model;
            this._colour = colour;
            this._reg = reg;
            this._engineSize = engineSize;
            this._year = year;
            this._transmission = transmission;
            this._MOT = MOT;
            this._tax = tax;
        }
        get name() {
            return this._name;
        } 
        get make() {
            return this._make;
        }
        get model() {
            return this._model;
        }
        get colour() {
            return this._colour;
        }
        get reg() {
            return this._reg;
        }
        get engineSize() {
            return this._engineSize;
        }
        get year() {
            return this._year;
        }
        get transmission() {
            return this._transmission;
        }
        get MOT() {
            return this._MOT;
        }
        get tax() {
            return this._tax;
        }
    }
    const emma = new car("Ford","Fiesta");
    console.log(emma.name, emma.make);
    
    // // Let’s create a class called Cars for a car parking
    // // company.
    // This will allow you to store information of: car
    // registration number, number of hours parked and total
    // amount charged. (Say £1.50 per hour?)
    
    // The first car entered the car park, parked for 5 hours
    // and ready to pay. Display this information so the driver
    // can pay for his/her parking fee.
    
    // class CarPark {
    //     constructor(registrationNumber, hoursParked) { // don't need totalAmount in the constructor as its a set amount
    //         this._registrationNumber = registrationNumber;
    //         this._hoursParked = hoursParked;
    //         this.totalAmount = 1.50;
    //     }
    //     get registrationNumber() {
    //         return this._registrationNumber;
    //     }
    //     get hoursParked() {
    //         return this._hoursParked;
    //     }
    //     increaseAmount() {
    //         return this._hoursParked * this.totalAmount;
    //     }
    // }
    // const amountToPay = new CarPark("MW627GY", 5);
    // console.log(amountToPay.increaseAmount());
    
    
    class Animal {
        constructor(name) {
            this._name = name;
            this._hunger = 100;
            this._thirst = 100;
        }
        get name() {
            return this._name;
        }
        get hunger() {
            return this._hunger;
        }
        get thirst() {
            return this._thirst;
        }
        eat() {
            this._hunger--;
        }
        drink() {
            this.thirst--;
        }
    
    } // 1st OOP principle
    class Bunny extends Animal {
        constructor(name, lovesCarrot) {
            super(name);
            this._lovesCarrot = lovesCarrot;
        }
        get lovesCarrots() {
            return this._lovesCarrot;
        }
    }
    // const rosie = new Bunny("Nick", true); // return name rosise, hunger 100, thirst 100, lovecarrots true
    // console.log(rosie.name, rosie.lovesCarrots);
    
    class Cat extends Animal {
        constructor(name, lovesCatnip,favFood) {
            super(name);
            this._lovesCatnip = lovesCatnip;
            this._favFood = favFood;
    
        }
        get lovesCatnip() {
            return this._lovesCatnip;
        }
        get favFood() {
            return this._favFood;
        }
    }
    // const rosie = new Cat("winston", true);
    // console.log(rosie.name, rosie.lovesCatnip);
    const rosie = new Cat ("Winston", true, ["tuna", "chicken","biscuits"]);
    console.log(rosie.name, rosie.lovesCatnip, rosie.favFood[0])
    
    
    class Codenation {
        constructor (name,age,course) {
            this._name = name;
            this._age = age;
            this._course = course;
        }
        get name() {
            return this._name;
        }
        get age() {
            return this._age;
        }
        get course() {
            return this._course;
        }
    }
    // const student = new student ("Nick", 32, "Master Coding");
    // console.log(student.name, student.age, student.course);
    
    class typeOfStudent extends Codenation { // add if else
        constructor(name, selffunded, language) {
            super(name);
            this._selffunded = selffunded;
            this._language = language;
        }
        get selffunded() {
            return this._selffunded;
        }
        get language() {
            return this._language;
        }
    }
    const student = new typeOfStudent("james", true, "javascript");
    console.log(student.name, student.age,student.selffunded, student.language); // want it to return all the info
    
    
    
    
    class CarPark {
        constructor(registrationNumber, hoursParked) { // don't need totalAmount in the constructor as its a set amount
            this._registrationNumber = registrationNumber;
            this._hoursParked = hoursParked;
            this.hourlyPrice = 1.50;
        }
        get registrationNumber() {
            return this._registrationNumber;
        }
        get hoursParked() {
            return this._hoursParked;
        }
        get carParkCharge() {
            return this._hoursParked * this.hourlyPrice;
        }
    }

    const carPark = new CarPark("MW627GY", 5);
    console.log(carPark.carParkCharge);
    
    /*Add a subclass for staff, so that staff can provide their
    staff number, and credits they have left to pay for the
    car park fees.
    
    Given a staff member parked for 5 hours as before,
    show how much it will be charged and remaining balance
    e.g 1 credit = 1 hour */
    
    // class Staff extends Carpark {
    //     constructor(staffNumber, credits) {
    //         super(hoursParked)
    //         this._staffNumber = staffNumber;
    //         this._credits = credits;
    //     }
    //     get staffNumber() {
    //         return this._staffNumber;
    //     }
    //     get credits() {
    //         return this._credits;
    //     }
    //     discount() {
    //         return this._hoursParked - this._credits;
    //     }
    //     discountAmount() {
    //         super.increaseAmount()  
    //     }
    // }
    
    // const amountToPay = new Staff(250, 1);
    // console.log(amountToPay.discount());