// import { getTotalPrice  } from '../Booking/booking.js';
// import { calculateTotal } from '../Booking/booking.js';
const ticketspricelist = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000, 30000];
const totalprice = Math.floor(Math.random() * ticketspricelist.length);
const totalval = ticketspricelist[totalprice];
console.log(totalval)

const finalPrice = (`Name:- \nSeat Numbers:- \nPrice:- ${totalval}`)




document.addEventListener('DOMContentLoaded', function() {
    var qrCodeData = finalPrice ;
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