let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const readMoreBtn = document.getElementById("readMoreBtn");
const moreContent = document.getElementById("moreContent");

readMoreBtn.addEventListener("click", () => {
  const isHiden =
    moreContent.style.display === "none" || moreContent.style.display === "";
  moreContent.style.display = isHiden ? "block" : "none";
  readMoreBtn.textContent = isHiden ? "Read Less" : "Read More";
});

// --------------------emailjs---------------------
document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("wLal8e1ddUye8tAaf"); // Ganti dengan Public Key dari EmailJS

  const contactForm = document.querySelector("form");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Ambil nilai input dari form
    const formData = {
      full_name: contactForm.querySelector("input[placeholder='Full Name']")
        .value,
      email: contactForm.querySelector("input[placeholder='Email']").value,
      mobile_number: contactForm.querySelector(
        "input[placeholder='Mobile Number']"
      ).value,
      subject: contactForm.querySelector("input[placeholder='Subject']").value,
      message: contactForm.querySelector("textarea[placeholder='Your Message']")
        .value,
    };

    // Kirim data ke EmailJS
    emailjs
      .send(
        "service_3tggrll",
        "template_1v01t98",
        formData,
        "wLal8e1ddUye8tAaf"
      )
      .then(() => {
        alert("Message sent successfully!");
        contactForm.reset(); // Reset form setelah dikirim
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again.");
      });
  });
});
