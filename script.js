
/* =====================================
   1. MOBILE NAVIGATION
===================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

/* =====================================
   2. CLOSE MOBILE MENU
===================================== */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});

/* =====================================
   3. AUTOMATIC COPYRIGHT YEAR
===================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();

/* =====================================
   4. CONTACT FORM
===================================== */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const service = document.getElementById("service").value;

    const message = document.getElementById("message").value.trim();

    // Validate form data

    if (!name || !email || !phone || !service || !message) {

        return;

    }

    // Prepare email subject

    const subject = encodeURIComponent(
        "Furniture Enquiry - " + name
    );

    // Prepare email body

    const body = encodeURIComponent(

        "Name: " + name +
        "\nEmail: " + email +
        "\nPhone: " + phone +
        "\nService: " + service +
        "\nMessage: " + message

    );

    // Open default email application

    const mailtoLink =

        "mailto:info@woodcraftstudio.com" +
        "?subject=" + subject +
        "&body=" + body;

    document.getElementById("form-message").textContent =

        "Opening your email application to send the enquiry.";

    window.location.href = mailtoLink;

});