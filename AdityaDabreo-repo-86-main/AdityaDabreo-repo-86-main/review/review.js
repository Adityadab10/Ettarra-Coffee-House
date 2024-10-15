function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                new Notification("Notifications permission granted.");
            } else {
                console.log("Notifications permission denied.");
            }
        });
    }
}

// Display a notification
function showNotification(review) {
    if (Notification.permission === "granted") {
        new Notification('New Review Submitted', {
            body: `Review by ${review.name}: Rating ${review.rating}`,
        });
    }
}

// Form submission and review handling
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from reloading the page

    // Get form values
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Create a review object
    const review = {
        name: name,
        rating: rating,
        comments: comments
    };

    // Save the review in local storage
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Display the success message
    document.getElementById('message').textContent = "Thank you for your review!";

    // Show a push notification for the review
    showNotification(review);

    // Clear the form
    document.getElementById('reviewForm').reset();

    // Display all reviews
    displayReviews();
});

function displayReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = ''; // Clear the list

    // Loop through reviews and display them
    reviews.forEach(function(review, index) {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${review.name}</strong> (Rating: ${review.rating}) <br>
            ${review.comments} <br><br>
        `;
        reviewsList.appendChild(li);
    });
}

window.onload = function() {
    requestNotificationPermission(); // Ask for notification permission on page load
    displayReviews();
}