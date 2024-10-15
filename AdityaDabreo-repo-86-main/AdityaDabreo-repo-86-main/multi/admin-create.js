document.addEventListener('DOMContentLoaded', function() {
    const eventForm = document.getElementById('event-form');
    const confirmationDiv = document.getElementById('confirmation');

    eventForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate form
        if (!validateForm()) return;

        // Capture form data
        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        const eventTime = document.getElementById('event-time').value;
        const location = document.getElementById('location').value;
        const description = document.getElementById('description').value;
        const maxAttendees = document.getElementById('max-attendees').value;

        // Display confirmation message
        confirmationDiv.innerHTML = `
            <h2>Event Created Successfully!</h2>
            <p><strong>Event Name:</strong> ${eventName}</p>
            <p><strong>Date:</strong> ${eventDate}</p>
            <p><strong>Time:</strong> ${eventTime}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Max Attendees:</strong> ${maxAttendees}</p>
        `;

        confirmationDiv.classList.remove('hidden');

        // Reset the form
        eventForm.reset();
    });

    function validateForm() {
        let isValid = true;
        const inputs = document.querySelectorAll('#event-form input, #event-form textarea');

        inputs.forEach(input => {
            if (!input.value) {
                input.classList.add('error');
                input.focus();
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });

        return isValid;
    }
});
