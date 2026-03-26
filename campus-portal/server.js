const express = require("express")
const mysql = require("mysql2")
const bodyParser = require("body-parser")
const session = require("express-session")

const app = express()

app.use(bodyParser.json())
app.use(express.static("public"))

app.use(session({
secret:"campus_secret",
resave:false,
saveUninitialized:true
}))

const db = mysql.createConnection({
host:"localhost",
user:"root",
password:"SWEETY123",
database:"campus_portal"
})

db.connect(err=>{
if(err) console.log(err)
else console.log("MySQL Connected")
})

/* GET EVENTS */

app.get("/events",(req,res)=>{

db.query("SELECT * FROM events",(err,result)=>{
if(err) return res.send("Database Error")
res.json(result)
})

})

/* ADD EVENT */

app.post("/add-event",(req,res)=>{

if(!req.session.admin) return res.send("Login Required")

const {title,description,event_date} = req.body

db.query(
"INSERT INTO events(title,description,event_date) VALUES(?,?,?)",
[title,description,event_date],
err=>{
if(err) return res.send("Database Error")
res.send("Event Added")
}
)

})

/* DELETE EVENT */

app.post("/delete-event/:id",(req,res)=>{

db.query(
"DELETE FROM events WHERE id=?",
[req.params.id],
err=>{
if(err) return res.send("Database Error")
res.send("Event Deleted")
}
)

})

/* REGISTER */

app.post("/register",(req,res)=>{

const {student_name,email,department,college_name,event_id}=req.body

db.query(
"INSERT INTO registrations(student_name,email,department,college_name,event_id) VALUES(?,?,?,?,?)",
[student_name,email,department,college_name,event_id],
err=>{
if(err) return res.send("Database Error")
res.send("Registration Successful")
}
)

})

/* VIEW REGISTRATIONS */

app.get("/registrations",(req,res)=>{

db.query(
`SELECT registrations.id,
student_name,email,department,college_name,
events.title
FROM registrations
JOIN events ON registrations.event_id=events.id`,
(err,result)=>{
if(err) return res.send("Database Error")
res.json(result)
}
)

})

/* DELETE REGISTRATION */

app.post("/delete-registration/:id",(req,res)=>{

db.query(
"DELETE FROM registrations WHERE id=?",
[req.params.id],
err=>{
if(err) return res.send("Database Error")
res.send("Deleted")
}
)

})

/* ADMIN LOGIN */

app.post("/admin-login",(req,res)=>{

const {username,password}=req.body

if(username==="admin" && password==="admin123"){
req.session.admin=true
res.send("Login Successful")
}
else{
res.send("Invalid Login")
}

})

/* LOGOUT */

app.get("/logout",(req,res)=>{
req.session.destroy()
res.send("Logged Out")
})

app.listen(3000,()=>{
console.log("Server running http://localhost:3000")
})