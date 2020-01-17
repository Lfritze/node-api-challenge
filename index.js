const express = require("express");
const cors = require("cors");
const server = express();

const projectsRoutes = require("./routes/projects");
const actionsRoutes = require("./routes/actions");

server.use(express.json());
server.use(cors());

// MIDDLEWARE

function logger(req, res, next) {
  console.log(
    `${req.method} to ${req.originalUrl} at [${new Date().toISOString()}].`
  );

  next();
}

// ROOT
server.get("/", (req, res) => {
  res.status(200).json({ message: "welcome" });
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n Server Running On http://localhost:${port}`);
});

server.use("/api/projects", projectsRoutes);
server.use("/api/actions", actionsRoutes);

server.get("*", (req, res) => {
  res.status(200).json({ message: "ok" });
});

// module.exports = server;
