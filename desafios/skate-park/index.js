import express from "express";
import handlebars from "express-handlebars";
import fileUpload from "express-fileupload";
import { join } from "path"; // Import the join function from the path module
import skatersRoutes from "./routes/skaters.route.js";

const app = express();

// Middleware for parsing incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Handlebars templating engine
const hbs = handlebars({
  layoutsDir: join(__dirname, "views/layouts"), // Use path.join for robust path construction
  partialsDir: join(__dirname, "views/partials"), // Optional: Specify directory for partial templates
  helpers: {
    // Optional: Define custom Handlebars helpers here
    // ... your helper functions
  },
});
app.engine(
  "handlebars",
  handlebars({
    layoutsDir: dirname(import.meta.url) + "/views/layouts",
    partialsDir: join(__dirname, "views/partials"), // Optional: Use path.join for clarity
    // ... other Handlebars options
  })
);

// Configure file upload middleware
app.use(
  fileUpload({
    limits: { fileSize: 5000000 }, // Set file size limit (5MB in this case)
    useTempFiles: true, // Use temporary files for uploads
  })
);

// Mount routes
app.use("/", skatersRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
