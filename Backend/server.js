require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve uploaded CVs

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

/** ========================== Contact Form API ========================== */

// Contact Schema & Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// Contact Form API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Regular Expressions for Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]{3,50}$/; // Name should be 3-50 characters

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!nameRegex.test(name)) {
      return res.status(400).json({ error: "Invalid name format" });
    }
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/** ========================== Career Form API ========================== */

// Career Schema & Model
const careerSchema = new mongoose.Schema({
  position: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  postalcode: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  cv: { type: String, required: true }, // Store CV file path
  createdAt: { type: Date, default: Date.now },
});

const Career = mongoose.model("Career", careerSchema);

// Multer Storage for CV Uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file
  },
});

const upload = multer({ storage: storage });

// Career Form API
app.post("/api/career", upload.single("cv"), async (req, res) => {
  try {
    const {
      position,
      name,
      address,
      country,
      state,
      city,
      postalcode,
      contact,
      email,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Resume file is required!" });
    }

    // Regular Expressions for Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    const phoneRegex = /^\d{10}$/;
    const postalCodeRegex = /^\d{4,6}$/;

    if (!position || !name || !address || !country || !state || !city || !postalcode || !contact || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!nameRegex.test(name)) {
      return res.status(400).json({ error: "Invalid name format" });
    }
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    if (!phoneRegex.test(contact)) {
      return res.status(400).json({ error: "Invalid phone number" });
    }
    if (!postalCodeRegex.test(postalcode)) {
      return res.status(400).json({ error: "Invalid postal code" });
    }

    const newApplication = new Career({
      position,
      name,
      address,
      country,
      state,
      city,
      postalcode,
      contact,
      email,
      cv: `/uploads/${req.file.filename}`,
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error saving job application:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const visitorSchema = new mongoose.Schema({
  count: { type: Number, required: true, default: 0 }
});

const Visitor = mongoose.model("Visitor", visitorSchema);

app.get("/api/track-visitor", async (req, res) => {
  try {
      let visitor = await Visitor.findOne();

      if (!visitor) {
          visitor = new Visitor({ count: 1 });
      } else {
          visitor.count += 1;
      }

      await visitor.save();
      res.json({ success: true, count: visitor.count });

  } catch (error) {
      console.error("❌ Error tracking visitor:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

/** ========================== Project Proposal API ========================== */

// Schema & Model
const projectProposalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  category: { type: String, required: true },
  contact: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ProjectProposal = mongoose.model("ProjectProposal", projectProposalSchema);

// Project Proposal API
app.post("/api/project-proposal", async (req, res) => {
  try {
    const { name, email, category, contact, description } = req.body;

    // Regular Expressions for Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    const phoneRegex = /^\d{10}$/;

    if (!name || !email || !category || !contact || !description) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!nameRegex.test(name)) {
      return res.status(400).json({ error: "Invalid name format" });
    }
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    if (!phoneRegex.test(contact)) {
      return res.status(400).json({ error: "Invalid phone number" });
    }

    const newProposal = new ProjectProposal({ name, email, category, contact, description });
    await newProposal.save();

    res.status(201).json({ message: "Proposal submitted successfully" });
  } catch (error) {
    console.error("Error saving project proposal:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
