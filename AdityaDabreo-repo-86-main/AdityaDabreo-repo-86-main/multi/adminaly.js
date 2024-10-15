document.addEventListener('DOMContentLoaded', function() {
    // Sample data
    const events = [
        { name: "Summer Festival", attendees: 150 },
        { name: "Cooking Workshop", attendees: 80 },
        { name: "Art Expo", attendees: 200 },
        { name: "Tech Conference", attendees: 120 },
    ];

    // Calculating totals and most popular event
    const totalEvents = events.length;
    const totalAttendees = events.reduce((total, event) => total + event.attendees, 0);
    const popularEvent = events.reduce((max, event) => event.attendees > max.attendees ? event : max, events[0]);

    // Update statistics in HTML
    document.getElementById('total-events').innerText = totalEvents;
    document.getElementById('total-attendees').innerText = totalAttendees;
    document.getElementById('popular-event').innerText = popularEvent.name;

    // Create a bar chart for attendees per event
    const ctx = document.getElementById('attendeesChart').getContext('2d');
    const attendeesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: events.map(event => event.name),
            datasets: [{
                label: 'Number of Attendees',
                data: events.map(event => event.attendees),
                backgroundColor: '#007bff',
                borderColor: '#0056b3',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
