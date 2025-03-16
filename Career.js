
function scrollToOpenPositions() {
  document.getElementById("open-positions").scrollIntoView({
    behavior: "smooth",
  });
}

// Animate Cards on Page Load
window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.add("animate");
  });

  // Add event listeners for job role and location input fields
  document.getElementById("job-role")?.addEventListener("input", function () {
    console.log("Searching for job role:", this.value);
  });

  document.getElementById("location")?.addEventListener("input", function () {
    console.log("Searching for location:", this.value);
  });
});

const jobDetails = {
  "Java Developer": {
    description: `We are looking for a Java Developer with 1-2 years of experience. The ideal candidate should have proficient analytical & problem-solving skills and a strong understanding of OOP concepts & UI design principles. Experience in Firebase implementation is mandatory.`,
    responsibilities: `- Develop mobile applications using Java or later versions.
                       - Deploy apps to Android & iOS App Store.
                       - Design app UI using HTML5, CSS3, SCSS.
                       - Implement Ionic / Cordova plugins for functionalities like Geo-location, QR Code, Camera, SMS auto-read.
                       - Integrate third-party APIs such as RazorPay, ccAvenue.`,
    requirements: `- 1-2 years of experience in Java development.
                   - Bachelor's degree (Preferred).`,
  },
  "Digital Marketing": {
    description: `We are seeking a Digital Marketing specialist with 0-1 year of experience. The ideal candidate should be familiar with SEO, SEM, and social media platforms. Responsibilities include developing marketing strategies and managing online campaigns.`,
    responsibilities: `- Develop and execute digital marketing strategies.
                       - Manage online advertising campaigns.
                       - Work on SEO, SEM, and Social Media platforms to drive traffic.
                       - Analyze web traffic and provide marketing insights.`,
    requirements: `- 0-1 year of experience in Digital Marketing.
                   - Bachelor's degree in Marketing or a related field (Preferred).`,
  },
  "Graphic Design": {
    description: `We are looking for a Graphic Designer with 0-1 year of experience. The candidate should have expertise in Adobe Creative Suite, including Photoshop and Illustrator, and should be capable of creating engaging visuals for digital platforms.`,
    responsibilities: `- Create and design digital assets for websites, social media, and advertisements.
                       - Work closely with the marketing team to ensure designs meet requirements.
                       - Maintain brand consistency across designs.`,
    requirements: `- 0-1 year of experience in Graphic Design.
                   - Proficiency in Adobe Photoshop, Illustrator, and other graphic design software.
                   - Portfolio showcasing previous work (Preferred).`,
  },
  "HR": {
    description: `We are looking for a female HR candidate with 0-1 year of experience. The role involves recruitment, employee management, and improving workplace culture. Strong interpersonal and communication skills are required.`,
    responsibilities: `- Assist in recruitment processes.
                       - Manage employee relations and resolve conflicts.
                       - Conduct performance reviews and foster employee engagement.`,
    requirements: `- Female candidates only.
                   - 0-1 year of experience in HR.
                   - Bachelor's degree in Human Resources or related field (Preferred).`,
  },
};

// Open Job Description Popup
function openPopup(jobTitle) {
  const job = jobDetails[jobTitle];
  if (!job) {
    console.error("Invalid job title:", jobTitle);
    return;
  }

  document.getElementById("job-title-popup").innerText = jobTitle;
  document.getElementById("job-description").innerHTML = `
      <strong>Description:</strong><br>${job.description}<br><br>
      <strong>Responsibilities:</strong><br>${job.responsibilities}<br><br>
      <strong>Requirements:</strong><br>${job.requirements}
  `;
  document.getElementById("job-popup").style.display = "flex";
}

// Close Job Description Popup
function closePopup() {
  document.getElementById("job-popup").style.display = "none";
}

// Open Application Form Popup
function openFormPopup(jobTitle) {
  closePopup();
  document.getElementById("form-popup").style.display = "flex";
  document.getElementById("position").value = jobTitle || "";
}

// Close Application Form Popup
function closeFormPopup() {
  document.getElementById("form-popup").style.display = "none";
  document.getElementById("position").value = "";
}

// Form Submit Handler
function submitForm(event) {
  event.preventDefault(); // Prevent page reload

  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const country = document.getElementById("country").value.trim();
  const state = document.getElementById("state").value.trim();
  const city = document.getElementById("city").value.trim();
  const postalcode = document.getElementById("postalcode").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const email = document.getElementById("email").value.trim();
  const cv = document.getElementById("cv").files[0];

  // Form Validation
  if (!name || !address || !country || !state || !city || !postalcode || !contact || !email || !cv) {
    alert("Please fill out all fields and upload your CV.");
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate phone number (10-digit number)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(contact)) {
    alert("Please enter a valid 10-digit contact number.");
    return;
  }

  // Simulated form submission
  console.log("Form Submitted:", {
    position,
    name,
    address,
    country,
    state,
    city,
    postalcode,
    contact,
    email,
    cv,
  });

  alert("Application submitted successfully!");
  closeFormPopup();
}

// Ensure no popups are shown on page load
window.onload = function () {
  document.getElementById("form-popup").style.display = "none";
  document.getElementById("job-popup").style.display = "none";
};
