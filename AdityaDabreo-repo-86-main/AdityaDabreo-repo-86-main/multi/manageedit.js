document.addEventListener('DOMContentLoaded', function () {
    const events = [
        {
            id: 1,
            name: "Cooking Workshop",
            date: "2024-10-15",
            description: "A hands-on cooking workshop.",
            location: "Downtown Kitchen"
        },
        {
            id: 2,
            name: "Art Expo",
            date: "2024-11-01",
            description: "Exhibition showcasing local artists.",
            location: "Art Gallery"
        },
        {
            id: 3,
            name: "Summer Festival",
            date: "2024-07-20",
            description: "Annual summer festival with food and music.",
            location: "Central Park"
        }
    ];

    const eventList = document.getElementById('event-list');
    const editForm = document.getElementById('edit-event-form');
    const eventNameInput = document.getElementById('event-name');
    const eventDateInput = document.getElementById('event-date');
    const eventDescriptionInput = document.getElementById('event-description');
    const eventLocationInput = document.getElementById('event-location');

    function loadEvents() {
        events.forEach(event => {
            const option = document.createElement('option');
            option.value = event.id;
            option.textContent = event.name;
            eventList.appendChild(option);
        });
    }

    eventList.addEventListener('change', function () {
        const selectedEventId = parseInt(eventList.value);

        if (selectedEventId) {
            const selectedEvent = events.find(event => event.id === selectedEventId);

            eventNameInput.value = selectedEvent.name;
            eventDateInput.value = selectedEvent.date;
            eventDescriptionInput.value = selectedEvent.description;
            eventLocationInput.value = selectedEvent.location;

            editForm.classList.remove('hidden');
        } else {
            editForm.classList.add('hidden');
        }
    });

    editForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const selectedEventId = parseInt(eventList.value);
        const selectedEvent = events.find(event => event.id === selectedEventId);

        selectedEvent.name = eventNameInput.value;
        selectedEvent.date = eventDateInput.value;
        selectedEvent.description = eventDescriptionInput.value;
        selectedEvent.location = eventLocationInput.value;

        alert('Event details updated successfully!');
    });

    loadEvents();
});
