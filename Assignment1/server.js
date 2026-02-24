const express = require("express");
const mysql = require("mysql2");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SWEETY123",
    database: "assignments_db"
});


app.get("/assignments", (req, res) => {
    db.query("SELECT * FROM assignments", (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});


app.post("/submit", (req, res) => {
    const { student_name, email, assignment_id } = req.body;

    db.query(
        "INSERT INTO submissions (student_name, email, assignment_id) VALUES (?, ?, ?)",
        [student_name, email, assignment_id],
        (err) => {
            if (err) return res.json(err);
            res.json({ message: "Submission Successful!" });
        }
    );
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});