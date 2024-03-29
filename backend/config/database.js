const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `MongoDB database connected with HOST:${con.connection.host}`
      );
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
};
module.exports = connectDatabase;
