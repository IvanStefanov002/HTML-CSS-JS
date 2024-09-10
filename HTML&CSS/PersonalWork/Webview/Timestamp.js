class Timestamp {
    constructor(year, month, day, hour, minute) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
    }

    printTimestamp( bIsFree, t ) {
        console.log(
            "ID: " + this.hour + ", DATE: " + this.year
            + "-" + this.month + ", " + this.day + " "
            + this.hour + ":" + this.minute + "\nEMAIL: "
            + this.getEmail() + ", NAME: " + t.getName()
            + ", STATUS: " + bIsFree + "\n");
    }

    getHour(){
        return this.hour;
    }
}