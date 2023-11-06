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


function updateVisibleEvents() {
    const eventElements = document.querySelectorAll('.list-group-item');
    eventElements.forEach((eventElement) => {
        const genreElements = eventElement.querySelectorAll('.genre');
        var genreVisible = false;
        if (selected.size == 0) {
            genreVisible = true;
        } else {
            genreElements.forEach((genreElement) => {
                const genreText = genreElement.textContent.trim();
                if (selected.has(genreText)) {
                    genreVisible = true;
                }
            });
        }
        if (!genreVisible) {
            eventElement.style.display = 'none';
        } else {
            eventElement.style.display = '';
        }
    });
}

selected = new Set();
document.addEventListener("DOMContentLoaded", function () {
    const selectableItems = document.querySelectorAll(".selectable");
    selectableItems.forEach((item) => {
        const onClick = function (ev) {
                              ev.preventDefault();
                              if (!item.classList.contains("text-decoration-underline")) {
                                  item.classList.add("text-decoration-underline");
                                  //item.classList.remove("text-info");
                                  selected.add(item.textContent);
                                  updateVisibleEvents();
                              } else {
                                  item.classList.remove("text-decoration-underline");
                                  selected.delete(item.textContent);
                                  updateVisibleEvents();
                              }
                          }
        item.addEventListener("touch", onClick);
        item.addEventListener("click", onClick);
    });
});