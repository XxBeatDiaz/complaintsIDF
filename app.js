import express from "express";
import router from "./routes/router.js";
import "./db/connect.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/complaints', router)

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});