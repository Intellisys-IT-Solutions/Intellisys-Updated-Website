
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
  "Full Stack Trainer": {
  description: `We are looking for a Full Stack Trainer with 1-3 years of experience. The ideal candidate should have strong knowledge of both front-end and back-end technologies, with a passion for teaching and mentoring. The role involves delivering high-quality training to individuals and groups, guiding them through practical applications, and helping them develop the skills to build full-stack applications.`,
  
  responsibilities: `- Deliver engaging and interactive training sessions on full-stack development.
                    - Teach front-end technologies like HTML, CSS, JavaScript, and modern JavaScript frameworks (e.g., React, Angular, or Vue.js).
                    - Train students on back-end technologies like Node.js, Express.js, Python, Ruby, or Java.
                    - Provide hands-on guidance for building projects and practical coding exercises.
                    - Assist students in mastering database management (MySQL, PostgreSQL, MongoDB, etc.).
                    - Track student progress, offer feedback, and ensure students meet learning objectives.
                    - Update and improve training materials based on current industry trends and technologies.
                    - Foster a positive learning environment, encouraging creativity and collaboration among students.`,

  requirements: `- 1-3 years of experience in full-stack development.
                - Strong proficiency in front-end technologies such as HTML, CSS, JavaScript, and at least one modern JavaScript framework (e.g., React, Angular, or Vue.js).
                - Experience with back-end technologies such as Node.js, Express.js, Python, Ruby, or Java.
                - Familiarity with database management systems like MySQL, PostgreSQL, or MongoDB.
                - Strong communication skills and the ability to explain technical concepts in an easy-to-understand way.
                - A passion for teaching and mentoring students.
                - A Bachelor's degree in Computer Science, Information Technology, or related fields (Preferred).
                - Prior teaching or mentoring experience is a plus.`
},
"Automation Tester": {
  description: `We are looking for an Automation Tester with 0-1 year of experience. The ideal candidate should have a strong understanding of software testing principles, including automated testing frameworks and tools. The role involves designing, developing, and executing automated tests to ensure the quality and functionality of software applications.`,
  
  responsibilities: `- Develop and execute automated tests for web and mobile applications.
                    - Collaborate with developers and QA teams to design effective test strategies.
                    - Identify, record, and track defects found during testing.
                    - Analyze test results and generate detailed reports for stakeholders.
                    - Maintain and update automated test scripts as needed.
                    - Work closely with the development team to ensure that all requirements are met and that testing aligns with project goals.
                    - Assist in manual testing when required to ensure thorough test coverage.`,

  requirements: `- 0-1 year of experience in automation testing.
                - Familiarity with automation tools such as Selenium, TestNG, JUnit, or similar.
                - Basic knowledge of programming languages like Java, Python, or JavaScript.
                - Understanding of software development life cycle (SDLC) and testing methodologies.
                - Strong problem-solving skills and attention to detail.
                - Excellent communication skills and ability to work in a collaborative team environment.
                - A Bachelor's degree in Computer Science, Information Technology, or a related field (Preferred).`
},
"Big Data Analytics": {
  description: `We are looking for a Big Data Analytics professional with 0-1 year of experience. The ideal candidate should have a passion for data analysis, with a strong understanding of big data technologies and data processing. The role involves working with large datasets, analyzing trends, and providing actionable insights to support business decisions.`,
  
  responsibilities: `- Analyze large datasets to identify trends, patterns, and insights.
                    - Work with big data tools such as Hadoop, Spark, and Hive to process and analyze data.
                    - Develop data models, reports, and dashboards to visualize findings.
                    - Collaborate with cross-functional teams to define data requirements and ensure data accuracy.
                    - Assist in the development and optimization of data processing pipelines.
                    - Ensure data quality and integrity throughout the analysis process.
                    - Assist in the implementation of machine learning algorithms for predictive analytics.`,

  requirements: `- 0-1 year of experience in Big Data Analytics or related field.
                - Familiarity with big data technologies such as Hadoop, Spark, and Hive.
                - Basic knowledge of programming languages like Python, Java, or Scala.
                - Understanding of data warehousing, ETL processes, and data visualization tools (e.g., Tableau, Power BI).
                - Strong analytical and problem-solving skills.
                - Excellent communication skills and ability to work collaboratively.
                - A Bachelor's degree in Computer Science, Data Science, Engineering, or a related field (Preferred).`
}

};

// Open Job Description Popup
function openPopup(jobTitle) {
  const job = jobDetails[jobTitle];
  if (!job) {
    console.error("Invalid job title:", jobTitle);
    return;
  }

  selectedJobTitle = jobTitle; // Store job title for later use

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
function openFormPopup() {
  closePopup(); // Close job description popup first
  document.getElementById("form-popup").style.display = "flex";

  // Ensure position field is filled with selected job title
  document.getElementById("position").value = selectedJobTitle || "";
}

document.addEventListener("DOMContentLoaded", function () {
  const applyButtonInPopup = document.querySelector(".apply-btn1");
  if (applyButtonInPopup) {
    applyButtonInPopup.addEventListener("click", openFormPopup);
  }
});

// Submit Career Form to Backend
async function submitForm(event) {
  event.preventDefault(); // Prevent page reload

  const formData = new FormData();
  formData.append("position", document.getElementById("position").value);
  formData.append("name", document.getElementById("name").value.trim());
  formData.append("address", document.getElementById("address").value.trim());
  formData.append("country", document.getElementById("country").value.trim());
  formData.append("state", document.getElementById("state").value.trim());
  formData.append("city", document.getElementById("city").value.trim());
  formData.append("postalcode", document.getElementById("postalcode").value.trim());
  formData.append("contact", document.getElementById("contact").value.trim());
  formData.append("email", document.getElementById("email").value.trim());
  formData.append("cv", document.getElementById("cv").files[0]); // Upload CV

  // Validation using Regular Expressions
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-Z\s]{3,50}$/;
  const phoneRegex = /^\d{10}$/;
  const postalCodeRegex = /^\d{4,6}$/;

  if (!document.getElementById("position").value.trim()) {
    alert("Job Position is required.");
    return;
  }
  if (!nameRegex.test(formData.get("name"))) {
    alert("Invalid name format.");
    return;
  }
  if (!emailRegex.test(formData.get("email"))) {
    alert("Invalid email format.");
    return;
  }
  if (!phoneRegex.test(formData.get("contact"))) {
    alert("Invalid phone number.");
    return;
  }
  if (!postalCodeRegex.test(formData.get("postalcode"))) {
    alert("Invalid postal code.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/career", {
      method: "POST",
      body: formData, // Send as multipart form-data
    });

    const data = await response.json();
    if (response.ok) {
      alert("Application submitted successfully!");
      document.getElementById("application-form").reset();
      closeFormPopup();
    } else {
      alert("Error: " + data.error);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong. Try again later.");
  }
}


// Close Application Form Popup
function closeFormPopup() {
  document.getElementById("form-popup").style.display = "none";
  document.getElementById("position").value = "";
}

// Ensure no popups are shown on page load
window.onload = function () {
  document.getElementById("form-popup").style.display = "none";
  document.getElementById("job-popup").style.display = "none";
};

// Ensure page loads with no popups visible
window.onload = function () {
  document.getElementById("form-popup").style.display = "none";
  document.getElementById("job-popup").style.display = "none";
};

// Animate Cards on Page Load
window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.add("animate");
  });

  // Add event listeners for job role and location search inputs
  document.getElementById("job-role")?.addEventListener("input", function () {
    console.log("Searching for job role:", this.value);
    filterJobs();
  });

  document.getElementById("location")?.addEventListener("input", function () {
    console.log("Searching for location:", this.value);
  });
});

// Function to Filter Jobs Based on Search Input
function filterJobs() {
  const searchValue = document.getElementById("job-role").value.trim().toLowerCase();
  const jobCards = document.querySelectorAll(".job-card");

  jobCards.forEach((card) => {
    const jobTitle = card.querySelector(".job-title").textContent.toLowerCase();
    if (jobTitle.includes(searchValue)) {
      card.style.display = "block"; // Show matching job card
    } else {
      card.style.display = "none"; // Hide non-matching job card
    }
  });
}