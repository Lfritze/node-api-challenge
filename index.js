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
server.get("/", logger, (req, res) => {
  res.status(200).json({ message: "welcome" });
});

// I typically put this in index.js and import server .. trying something different

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n Server Running On http://localhost:${port}`);
});

server.use("/api/projects", logger, projectsRoutes);
server.use("/api/actions", logger, actionsRoutes);

server.get("*", (req, res) => {
  res.status(200).json({ message: "ok" });
});

// module.exports = server;
