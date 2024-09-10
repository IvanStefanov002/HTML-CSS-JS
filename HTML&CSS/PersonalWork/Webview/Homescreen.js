document.addEventListener('DOMContentLoaded', function(){
    const button1 = document.getElementById('button_1');
    const button2 = document.getElementById('button_2');
    const button3 = document.getElementById('button_3');
    const button4 = document.getElementById('button_4');

    const optional_button1 = document.getElementById('optional_button_1');
    const optional_button2 = document.getElementById('optional_button_2');
    const optional_button3 = document.getElementById('optional_button_3');
    const optional_button4 = document.getElementById('optional_button_4');

    optional_button1.hidden = true;
    optional_button2.hidden = true;
    optional_button3.hidden = true;
    optional_button4.hidden = true;

    button1.addEventListener('click', function() {
        // window.location.href = "timeslotMenu.html";

        optional_button1.hidden = false;
        optional_button2.hidden = false;
        optional_button3.hidden = false;
        optional_button4.hidden = false;

        optional_button1.textContent = "Generate";
        optional_button2.textContent = "Reserve";
        optional_button3.textContent = "Show";
        optional_button4.textContent = "Reserve";

        optional_button1.removeEventListener('click', createTechnicianHandler);
        optional_button1.addEventListener('click', function() {
            // Example: Create a new Timeslot and use insertTimeslot
            let day = prompt(`Enter a day to create a new Timeslot:`);

            let date = new Date();
            let dayIndex = date.str
            
            console.log(date);

            let timestamp = new Timestamp(date);
            let newTimeslot = new Timeslot('2024-09-05 10:00:00', true);
            let technician = { name: 'unassigned' };
    
            // Call insertTimeslot from Timeslot.js
            newTimeslot.insertTimeslot(newTimeslot, technician);
        });
    });

    button2.addEventListener('click', function() {
        // window.location.href = 'technicianMenu.html';

        optional_button1.hidden = false;
        optional_button2.hidden = false;
        optional_button3.hidden = false;
        optional_button4.hidden = true;

        optional_button1.textContent = "Create";
        optional_button2.textContent = "Show";
        optional_button3.textContent = "Assign";
        //optional_button4.textContent = "Reserve slot";

        // Remove existing event listener (if any) before attaching a new one
        optional_button1.removeEventListener('click', createTechnicianHandler);
        optional_button1.addEventListener('click', createTechnicianHandler);

        optional_button2.removeEventListener('click', showTechniciansHandler);
        optional_button2.addEventListener('click', showTechniciansHandler);
    });

    function createTechnicianHandler() {
        let count = prompt(`How many technicians would you like to create?`);
        // Call the static method directly on the class
        Technician.createTechnician( parseInt(count) );
    }

    function showTechniciansHandler() {
        Technician.printListOfTechnicians(Technician.getTechniciansList())
    }

});