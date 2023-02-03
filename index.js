const express = require("express")
require("dotenv").config()
const userRoutes=require("./router/signup_router")
const connectDB=require("./config/db") 
const loginRoutes=require("./router/login_router")
const getRoutes = require("./router/getrouter");
const app=express();
connectDB();



//
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));
//routes
app.use("/user", userRoutes);
app.use("/login",loginRoutes);
app.use("/get",getRoutes);
// setting up port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});