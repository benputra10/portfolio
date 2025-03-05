const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 500,
};

// header section
ScrollReveal().reveal(".header", {
  ...scrollRevealOption,
  delay: 50,
  origin: screenLeft,
  distance: "2000px",
  duration: 250,
});

// -----------home section----------------
ScrollReveal().reveal(".home-content h1", {
  ...scrollRevealOption,
  delay: 250,
});

ScrollReveal().reveal(".home-img", {
  ...scrollRevealOption,
  delay: 500,
  origin: screenLeft,
});

ScrollReveal().reveal(".home-content h3", {
  ...scrollRevealOption,
  delay: 750,
});

ScrollReveal().reveal(".home-content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".home-content .social-icons", {
  ...scrollRevealOption,
  delay: 1250,
});

ScrollReveal().reveal(".home-content .btn-group", {
  ...scrollRevealOption,
  delay: 1500,
});

// -----------about section----------------
ScrollReveal().reveal(".about-content", {
  ...scrollRevealOption,
  delay: 500,
  origin: "right",
});

ScrollReveal().reveal(".about-img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});

// -----------services section----------------
const serviceBoxes = document.querySelectorAll(".services-box");

serviceBoxes.forEach((box, index) => {
  ScrollReveal().reveal(box, {
    ...scrollRevealOption,
    origin: "right",
    delay: 500 + index * 250, // Setiap box memiliki delay bertambah 250ms
  });
});

// -----------project section----------------
const projectCard = document.querySelectorAll(".project-box .project-card");

projectCard.forEach((box, index) => {
  ScrollReveal().reveal(box, {
    ...scrollRevealOption,
    delay: 500 + index * 250,
  });
});

// ----------contact me-----------------
const inputGroup = document.querySelectorAll(".input-group");

inputGroup.forEach((inputbox, groupIndex) => {
  const inputs = inputbox.querySelectorAll("input");
  inputs.forEach((input, index) => {
    ScrollReveal().reveal(input, {
      // scrollRevealOption,
      delay: 500 + groupIndex * 500 + index * 250,
      origin: "left",
      distance: "50px",
    });
  });
});

ScrollReveal().reveal(".contact .input-group-2", {
  scrollRevealOption,
  origin: "right",
  delay: 1500,
  distance: "50px",
});

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

// --------------------------------form contact me ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Mencegah form melakukan refresh halaman

    // Ambil nilai dari input
    const name = document
      .querySelector('input[placeholder="Full Name"]')
      .value.trim();
    const email = document
      .querySelector('input[placeholder="Email"]')
      .value.trim();
    const mobile = document
      .querySelector('input[placeholder="Mobile Number"]')
      .value.trim();
    const subject = document
      .querySelector('input[placeholder="Subject"]')
      .value.trim();
    const message = document
      .querySelector('textarea[placeholder="Your Message"]')
      .value.trim();

    // Validasi input (pastikan tidak ada yang kosong)
    if (!name || !email || !mobile || !subject || !message) {
      alert("Please fill in all fields before sending the message.");
      return;
    }

    // Format pesan untuk WhatsApp
    const whatsappMessage = `Hello, my name is ${name}.
📧 Email: ${email}
📱 Mobile: ${mobile}
📌 Subject: ${subject}

📝 Message:
${message}`;

    // Nomor WhatsApp tujuan (ganti dengan nomor admin atau pemilik situs)
    const phoneNumber = "6281214320665"; // Ganti dengan nomor WhatsApp yang ingin menerima pesan

    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Arahkan ke WhatsApp
    window.open(whatsappURL, "_blank");
  });
});
