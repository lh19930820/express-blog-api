require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");

const app = express();

app.use(express.json());

// routes
// app.get('/', (req, res) => {
//   res.json({ message: 'API running 🚀' });
// });
const authRoutes = require("./src/routes/auth.route");
const postRoutes = require("./src/routes/post.route");
const commentRoutes = require("./src/routes/comment.route");

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comment", commentRoutes);

// error middleware
const errorHandler = require("./src/middleware/error.middleware");
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
