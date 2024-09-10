let aTimeslots = new Array();

class Timeslot{
    constructor( tTimestamp, bIsFree ) {
        this.tTimestamp = tTimestamp;
        this.bIsFree = bIsFree;
    }

    generateTimeslots( d, t ){

    }

    insertTimeslot( ts, t){
        // Push an object with Timeslot and Technician into aTimeslots
        aTimeslots.push({ Timeslot: ts, Technician: t });
        console.log(aTimeslots[0]);
    }

    getTimestamp(){
        return this.tTimestamp;
    }

    getIsFree(){
        return this.bIsFree;
    }

    setTimeStamp( new_tTimestamp ){
        this.tTimestamp = new_tTimestamp;
    }

    setIsFree( new_bIsFree ){
        this.bIsFree = new_bIsFree;
    }

    setTimeSlot( new_tSlot ){
        aTimeslots = new_tSlot;
    }

}