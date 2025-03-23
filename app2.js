// Function to generate the QR code
function generateQRCode() {
    // Get the input value (link)
    var data = document.getElementById('link').value;

    // Check if there's a link entered
    if (data) {
        // Clear any previous QR code
        document.getElementById('qrcode').innerHTML = '';

        // Create the QR code using the QRCode.js library
        new QRCode(document.getElementById("qrcode"), {
            text: data,
            width: 220,
            height: 220,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        alert("Please enter a link or text.");
    }
}
