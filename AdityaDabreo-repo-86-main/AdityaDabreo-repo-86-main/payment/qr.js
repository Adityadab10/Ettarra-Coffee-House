// import { totalPrice } from "../Booking/booking";
// const totalPriceElement = document.getElementById('totalPrice');
// totalPriceElement.innerText = totalPrice;


// document.addEventListener('DOMContentLoaded', function() {
//     var qrCodeData = "Hello, this is a QR code!"; 
//     var qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(qrCodeData) + "&size=200x200"; 
//     var qrCodeImage = document.getElementById("myQR"); 
    
//     qrCodeImage.onload = function() {
//         console.log("QR code image loaded successfully.");
//     };
//     qrCodeImage.src = qrCodeUrl; 
// });


document.addEventListener('DOMContentLoaded', function() {
    // Replace with your data source
    var qrCodeData = "This is the initial QR code data";
    function updateQrCode(data) {
        var qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?data=" + 
                       encodeURIComponent(data) + "&size=200x200"; 
        var qrCodeImage = document.getElementById("myQR"); 
        qrCodeImage.src = qrCodeUrl; 
        console.log("updateQrCode called with:", qrCodeUrl);
    }
    // Initial QR code generation
    updateQrCode(qrCodeData);
});