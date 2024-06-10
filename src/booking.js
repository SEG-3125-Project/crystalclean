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

    // Populate time slots
    var timeSlotDropdown = document.getElementById('timeSlot');
    var timeSlots = [
        '09:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00',
        '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00',
        '17:00-18:00', '18:00-19:00'
    ];

    timeSlots.forEach(function(slot) {
        var option = document.createElement('option');
        option.value = slot;
        option.textContent = slot;
        timeSlotDropdown.appendChild(option);
    });

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