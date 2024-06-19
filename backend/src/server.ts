import "dotenv/config";
import mongoose from "mongoose";
import env from "./util/validateEnv";
import { server } from "./socket/socket";
import { runApp } from "./app";

const PORT = env.PORT;

// Make sure to run App.ts before running below codes
runApp();

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected successfully to MongoDB");
    server.listen(env.PORT, () => {
      console.log("Server running at http://localhost:" + env.PORT);
    });
    // Perform operations once connected (e.g., define schemas, models, etc.)
  })
  .catch((error) => {
    console.error("Error occurred while connecting to MongoDB:", error);
  });
