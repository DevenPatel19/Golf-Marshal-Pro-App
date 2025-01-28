// 1 import dependencies
import express from "express";
import dotenv from "dotenv";
dotenv.config();
// import "./config/mongoose.config";
// import routes from "./routes/members.js";


// importing cors
import cors from "cors";

const port = process.env.PORT || 3000;

// 2 configure express
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{res.send("sanity test 🦄🦄🦄🦄🦄")})
app.get('/success', (req, res) =>{res.send("success")})

// 3 routes
// require route collections
// routes(app);

// 4 Listen to a Port
app.listen(port, () => {
	console.log(`🦄✔🦄✔🦄✔ Listening on Port: ${port}`);
  }).on("error", (err) => {
	console.error("🚨❌🚨❌🚨❌🚨❌🚨❌ Server failed to start:", err.message);
  });




export default app; 
