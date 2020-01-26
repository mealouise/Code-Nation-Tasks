//const carPark = new CarPark("MW627GY", 5);
//console.log(`Amount to pay is £${carPark.carParkCharge}.`);

/*Add a subclass for staff, so that staff can provide their
staff number, and credits they have left to pay for the
car park fees.

Given a staff member parked for 5 hours as before,
show how much it will be charged and remaining balance
e.g 1 credit = 1 hour */

class Staff {
    constructor(staffNumber, credits) {
        this._staffNumber = staffNumber;
        this._credits = credits;
    }
    get staffNumber() {
        return this._staffNumber;
    }
    get credits() {
        return this._credits;
    }
    deductCredits(amount) {
        this._credits =- amount;
    }
}

class CarPark  extends Staff { // in class can put in functions, variables, update varies
    constructor(registrationNumber, staffNumber, credits) { // don't need totalAmount in the constructor as its a set amount
        super(staffNumber, credits);
        this._registrationNumber = registrationNumber;
        this._hoursParked = 0;
        this._hourlyPrice = 1.50;
        this._charge = 0;
        console.log(`Your registration number is ${this.registrationNumber}`);
        console.log(`Your staff credit balance is ${this.credits}`);
        console.log(`The hourly rate for Urmston is ${this.hourlyPrice}`);
    
    }
    get registrationNumber() {
        return this._registrationNumber;// can't access staffnumber from the constructor so have to declare them outside with the get and return
    }
    get hoursParked() {
        return this._hoursParked;
    }
    get hourlyPrice() {
        return this._hourlyPrice;
    }
    increaseHours(hours) { // updates how long user has stayed in carpark and their charge
        // this._hoursParked = hours + this._hoursParked;
        this._hoursParked += hours;
        this._charge = this._hourlyPrice - this._hoursParked;
        console.log(`You have parked for ${this.hoursParked} hours`);
    }
    get charge() {
        return this._charge;
    }
    pay() {
        
        console.log(`Your charge is ${this.charge} and you have ${super.credits} credits.`);
        if ( this._credits <= this._hoursParked) {
            console.log(`You don't have any credits left`)
        } else { 
            console.log(`You have been charged ${this.charge}`);
        }
    }
}


const urmstonCarPark = new CarPark("MW48GHY", "200", 100); //estansiating

urmstonCarPark.increaseHours(2);
urmstonCarPark.increaseHours(5);
urmstonCarPark.increaseHours(0.5);
urmstonCarPark.pay();







// const emma = new Staff(250434, 1, 'MW627GY'); // calling staff class to create new instance of that class(const staff1)

// // Get staffs discount
// console.log(`Your staff discount is ${emma.credits} credit`);

// // Get price with discount
// console.log(`Your price with discount is £${emma.carParkCharge}`);