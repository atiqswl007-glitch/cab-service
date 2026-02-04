function bookNow() {
    // Apna WhatsApp number yahan dalain (country code ke sath)
    let phoneNumber = "966XXXXXXXXX"; 

    let message = "Hello! I want to book a cab in Saudi Arabia.";
    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
