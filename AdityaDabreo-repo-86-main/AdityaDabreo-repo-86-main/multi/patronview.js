const events = [
    {
        title: "Music Concert",
        date: "October 15, 2024",
        description: "A night of amazing live music performances from various artists. Come and enjoy different genres of music, from pop to classical."
    },
    {
        title: "Tech Conference",
        date: "November 5, 2024",
        description: "Join industry leaders as they discuss the latest trends in technology, including AI, VR, and blockchain advancements."
    },
    {
        title: "Art Exhibition",
        date: "December 10, 2024",
        description: "Explore incredible artwork from contemporary artists. The event features modern art, sculptures, and interactive installations."
    },
    {
        title: "Charity Marathon",
        date: "January 20, 2025",
        description: "Run for a cause! Participate in our annual charity marathon to support healthcare initiatives for the underprivileged."
    }
];

// Load and display events dynamically
function loadEvents() {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';

        const eventTitle = document.createElement('h3');
        eventTitle.innerText = event.title;

        const eventDate = document.createElement('p');
        eventDate.className = 'date';
        eventDate.innerText = `Date: ${event.date}`;

        const eventDescription = document.createElement('p');
        eventDescription.innerText = event.description;

        eventCard.appendChild(eventTitle);
        eventCard.appendChild(eventDate);
        eventCard.appendChild(eventDescription);
        eventList.appendChild(eventCard);
    });
}

window.onload = loadEvents;
