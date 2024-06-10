document.addEventListener('DOMContentLoaded', function() {

    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {

        themeSystem: 'custom',
        initialView: 'dayGridMonth',

        // Allow date selection
        selectable: true,

        // Only show dates after and including the present date
        validRange: function(nowDate) {

            var currentDate = new Date();

            currentDate.setHours(0, 0, 0, 0);
      

            return {
                start: currentDate,
            };
        },
    });

    // Render the calendar
    calendar.render();
});

document.addEventListener('DOMContentLoaded', function() {
    
    // Get the productid parameter from the URL
    var productId = new URLSearchParams(window.location.search).get('productid');

    var productString = "";

    switch (productId) {
        case '1':
            productString = 'Standard Package';
            break;
        case '2':
            productString = 'Deluxe Package';
            break;
        case '3':
            productString = 'Exterior Package';
            break;
        case '4':
            productString = 'Interior Package';
            break;
        case '5':
            productString = 'Standard Car Wash';
            break;
        case '6':
            productString = 'Paint Touch Up + Wax';
            break;
        case '7':
            productString = 'Standard Interior Clean';
            break;
        case '8':
            productString = 'Deep Interior Clean';
            break;
        case '9':
            productString = 'Ceramic Coating';
            break;
        case '10':
            productString = 'Engine Bay Detailing';
            break;
        default:
            productString = 'Unknown Product';
            break;
    }

    var element = document.querySelector('.hero-subtext2');
    if (element) {
        element.innerHTML = productString;
    }
});

// Function to generate time slots
function generateTimeSlots(startTime, endTime, interval) {
    let timeSlots = [];
    let currentTime = new Date(startTime);
    const endTimeObj = new Date(endTime);

    while (currentTime < endTimeObj) {
        let slotStartTime = new Date(currentTime);
        let slotEndTime = new Date(currentTime);
        slotEndTime.setHours(slotEndTime.getHours() + interval);
        let slot = `${slotStartTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - ${slotEndTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
        timeSlots.push(slot);
        currentTime.setHours(currentTime.getHours() + interval);
    }
    return timeSlots;
}

// Populate dropdown with time slots
function populateTimeSlots() {
    const timeSlotDropdown = document.getElementById("timeSlot");
    const timeSlots = generateTimeSlots("2024-06-09T09:00:00", "2024-06-09T18:00:00", 1); // Example time range and interval

    timeSlots.forEach(slot => {
        let option = document.createElement("option");
        option.text = slot;
        option.value = slot;
        timeSlotDropdown.add(option);
    });
}

// Call the function to populate the dropdown
populateTimeSlots();