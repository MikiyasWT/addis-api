const app = require("./server");
const { connectToDatabase } = require("./config/database");
// defining middlewares
require("dotenv").config({ path: "config/config.env" });

connectToDatabase();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});

process.on("uncaughtException", () => {
  console.log("\x1b[31m%s\x1b[0m", `ERROR: ${err.stack}`);
  console.log(
    "\x1b[34m%s\x1b[0m",
    "Shutting down the server due to uncaughtException",
  );
  server.close(() => {
    process.exit(1);
  });
});

// Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log("\x1b[31m%s\x1b[0m", `ERROR: ${err.stack}`);
  console.log(
    "\x1b[34m%s\x1b[0m",
    "Shutting down the server due to Unhandled Promise rejection",
  );
  server.close(() => {
    process.exit(1);
  });
});
