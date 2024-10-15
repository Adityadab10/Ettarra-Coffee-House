document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('create-event-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        const eventDescription = document.getElementById('event-description').value;
        const eventLocation = document.getElementById('event-location').value;
        const eventCapacity = document.getElementById('event-capacity').value;

        // Basic form validation
        if (eventName && eventDate && eventDescription && eventLocation && eventCapacity > 0) {
            alert('Event successfully created!\n' +
                `Name: ${eventName}\n` +
                `Date: ${eventDate}\n` +
                `Description: ${eventDescription}\n` +
                `Location: ${eventLocation}\n` +
                `Capacity: ${eventCapacity}`);

            // Simulate clearing form after submission
            form.reset();
        } else {
            alert('Please fill in all fields correctly.');
        }
    });
});
