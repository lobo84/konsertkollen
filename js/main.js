// Get the current date
const currentDate = new Date();
currentDate.setUTCHours(00,00,00,00);

// Get all the event elements (assuming they are in a list with a class name 'list-group')
const eventElements = document.querySelectorAll('.list-group-item');

// Iterate through the event elements
eventElements.forEach((eventElement) => {
    // Extract the date from the event element
    const dateElement = eventElement.querySelector('.date');
    const dateText = dateElement.textContent.trim();
    const eventDate = new Date(dateText);

    if (eventDate < currentDate) {
        // The event has passed, so you can hide it (for example, using CSS)
        eventElement.style.display = 'none';
    }

});