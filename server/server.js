const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors({
  origin: "*", // 
}));
app.use(express.json());

// routes
const matchRoutes = require("./routes/matchRoutes");
app.use("/api/match", matchRoutes);

// health check route (IMPORTANT for Render)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// start server (FIXED for Render)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const express = require("express");
// const cors = require("cors");

// const app = express(); 

// // middleware
// app.use(cors());
// app.use(express.json());

// // routes
// const matchRoutes = require("./routes/matchRoutes");
// app.use("/api/match", matchRoutes);

// // test route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // start server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });