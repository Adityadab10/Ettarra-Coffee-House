document.addEventListener('DOMContentLoaded', function () {
    // Sample bookings data
    const bookings = [
        { id: 1, event: "Cooking Workshop", attendee: "John Doe", status: "Pending" },
        { id: 2, event: "Art Expo", attendee: "Jane Smith", status: "Approved" },
        { id: 3, event: "Summer Festival", attendee: "Michael Johnson", status: "Pending" },
        { id: 4, event: "Tech Conference", attendee: "Alice Lee", status: "Rejected" }
    ];

    const bookingCardsContainer = document.getElementById('booking-cards');

    // Function to load bookings as cards
    function loadBookings() {
        bookingCardsContainer.innerHTML = ''; // Clear previous content

        bookings.forEach(booking => {
            const card = document.createElement('div');
            card.classList.add('booking-card');

            card.innerHTML = `
                <h3>${booking.event}</h3>
                <div class="booking-details">
                    <p><strong>Attendee:</strong> ${booking.attendee}</p>
                    <p><strong>Booking ID:</strong> ${booking.id}</p>
                    <span class="status ${booking.status.toLowerCase()}">${booking.status}</span>
                </div>
                ${booking.status === "Pending" ? `
                <div class="action-buttons">
                    <button class="approve" onclick="approveBooking(${booking.id})">
                        <i class="fas fa-check"></i> Approve
                    </button>
                    <button class="reject" onclick="rejectBooking(${booking.id})">
                        <i class="fas fa-times"></i> Reject
                    </button>
                </div>
                ` : ''}
            `;

            bookingCardsContainer.appendChild(card);
        });
    }

    // Function to approve a booking
    window.approveBooking = function (id) {
        const booking = bookings.find(b => b.id === id);
        booking.status = "Approved";
        loadBookings();
    };

    // Function to reject a booking
    window.rejectBooking = function (id) {
        const booking = bookings.find(b => b.id === id);
        booking.status = "Rejected";
        loadBookings();
    };

    // Load initial bookings
    loadBookings();
});
