let TechniciansList = [];

class Technician {
    constructor(){}

    setEmail(new_email){
        this.email = new_email;
    }

    setName(new_name){
        this.name = new_name;
    }

    setPhone(new_phone){
        this.phone = new_phone;
    }

    setReservationCount(new_reservationCount){
        this.reservationCount = new_reservationCount;
    }

    static setTechnicianList(new_technicianList){
        TechniciansList = new_technicianList;
    }

    getEmail(){
        return this.email;
    }

    getName(){
        return this.name;
    }

    getPhone(){
        return  this.phone;
    }

    getReservationCount(){
        return this.reservationCount;
    }

    static getTechniciansList(){
        return TechniciansList || []; // Return an empty array if undefined
    }

    static validateParameters(sEmail) {
        const temp = this.getTechniciansList(); // `this` refers to the class in static methods
        for (let element of temp) {
            if (element.getEmail() === sEmail) {
                return false;
            }
        }
        return true;
    }


    static printInfo(t) {
        console.log(`Technician Name: ${t.getName()}`);
        console.log(`Technician Email: ${t.getEmail()}`);
        console.log(`Technician Phone: ${t.getPhone()}`);
        console.log(`Technician Reservation Count: ${t.getReservationCount()}`);
    }

    static createTechnician(count) {
        let sEmail;
        let sName;
        let sPhone;
        let nReservationCount;
        let isNew;

        do {
            sEmail = prompt(`Enter technician's email: `);
        } while (!this.validateParameters(sEmail)); // Now `this` refers to the class
        
        sName = prompt(`Enter technician's name: `);
        sPhone = prompt(`Enter technician's phone number: `);
        
        isNew = prompt(`Is the technician new or old member? (new/old)`);
        if( isNew == "old" ){
            nReservationCount = prompt(`Enter technician's reservation count: `);
        }else{
            nReservationCount = 0;
        }
        
        // Example: pushing a new technician object into the list
        const newTech = new Technician();
        newTech.setEmail(sEmail);
        newTech.setName(sName);
        newTech.setPhone(sPhone);
        newTech.setReservationCount(nReservationCount);
        
        // Add the new technician to the list
        TechniciansList.push(newTech);

        console.log(`Technician created!`);
        Technician.printInfo(newTech);
    }

    static printListOfTechnicians(list) {
        if (!list || list.length === 0) {
            console.log('No technicians found.');
            return;
        }

        list.forEach((tech, index) => {
            console.log(`Technician ${index + 1}:`);
            console.log(`Name: ${tech.getName()}`);
            console.log(`Email: ${tech.getEmail()}`);
            console.log(`Phone: ${tech.getPhone()}`);
            console.log(`Reservation Count: ${tech.getReservationCount()}`);
            console.log('--------------------------');
        });
    }
}