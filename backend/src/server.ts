import "dotenv/config";
import mongoose from "mongoose";
import app from "./app";
import env from "./util/validateEnv";

const PORT = env.PORT;

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected successfully to MongoDB");
    app.listen(env.PORT, () => {
      console.log("Server running at http://localhost:" + env.PORT);
    });
    // Perform operations once connected (e.g., define schemas, models, etc.)
  })
  .catch((error) => {
    console.error("Error occurred while connecting to MongoDB:", error);
  });
