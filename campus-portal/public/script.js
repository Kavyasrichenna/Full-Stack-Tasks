let allEvents=[]

/* LOAD EVENTS */

function loadEvents(){

fetch("/events")
.then(res=>res.json())
.then(data=>{
allEvents=data
displayEvents(data)
})

}

/* DISPLAY EVENTS */

function displayEvents(events){

const div=document.getElementById("events")

if(!div) return

div.innerHTML=""

events.forEach((event,i)=>{

div.innerHTML+=`

<div class="event-card">

<h3>${i+1}. ${event.title}</h3>

<p>${event.description}</p>

<p>Date: ${new Date(event.event_date).toDateString()}</p>

<p>ID: ${event.id}</p>

<button onclick="selectEvent(${event.id})">Register</button>

</div>

`

})

}

/* SEARCH */

function searchEvents(){

const value=document
.getElementById("searchInput")
.value
.toLowerCase()

const filtered=allEvents.filter(e =>
e.title.toLowerCase().includes(value)
)

displayEvents(filtered)

}

/* SELECT EVENT */

function selectEvent(id){
document.getElementById("eventId").value=id
}

/* REGISTER */

if(document.getElementById("registrationForm")){

document
.getElementById("registrationForm")
.addEventListener("submit",function(e){

e.preventDefault()

const student_name=document.getElementById("name").value
const email=document.getElementById("email").value
const department=document.getElementById("department").value
const college_name=document.getElementById("college_name").value
const event_id=document.getElementById("eventId").value

fetch("/register",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
student_name,
email,
department,
college_name,
event_id
})
})

.then(res=>res.text())
.then(msg=>{
alert(msg)
})

})

}

/* ADMIN LOGIN */

function adminLogin(){

const username=document.getElementById("username").value
const password=document.getElementById("password").value

fetch("/admin-login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({username,password})

})

.then(res=>res.text())

.then(msg=>{

if(msg==="Login Successful"){

alert(msg)

document.getElementById("loginSection").style.display="none"
document.getElementById("adminContent").style.display="block"

loadAdminEvents()   // IMPORTANT

}else{

alert("Invalid Login")

}

})

}
function logout(){

fetch("/logout")
.then(res=>res.text())
.then(msg=>{

alert(msg)

document.getElementById("adminContent").style.display="none"
document.getElementById("loginSection").style.display="block"

})

}

/* LOGOUT */

function logout(){

fetch("/logout")
.then(res=>res.text())
.then(msg=>alert(msg))

}

/* VIEW REGISTRATIONS */

function viewRegistrations(){

fetch("/registrations")
.then(res=>res.json())
.then(data=>{

const div=document.getElementById("registrations")

div.innerHTML=

`<table>

<tr>
<th>S.No</th>
<th>Name</th>
<th>Email</th>
<th>Dept</th>
<th>College</th>
<th>Event</th>
<th>Delete</th>
</tr>

${data.map((r,i)=>`

<tr>

<td>${i+1}</td>
<td>${r.student_name}</td>
<td>${r.email}</td>
<td>${r.department}</td>
<td>${r.college_name}</td>
<td>${r.title}</td>

<td>
<button onclick="deleteRegistration(${r.id})">
Delete
</button>
</td>

</tr>

`).join("")}

</table>`

})

}

/* DELETE REGISTRATION */

function deleteRegistration(id){

fetch("/delete-registration/"+id,{
method:"POST"
})
.then(res=>res.text())
.then(msg=>{
alert(msg)
viewRegistrations()
})

}
function showSection(sectionId){

const sections=document.querySelectorAll(".admin-section")

sections.forEach(sec=>{
sec.style.display="none"
})

document.getElementById(sectionId).style.display="block"

}
function loadAdminEvents(){

fetch("/events")

.then(res => res.json())

.then(events => {

const div = document.getElementById("adminEvents")

if(!div) return

div.innerHTML = ""

events.forEach((event,index)=>{

div.innerHTML += `

<div class="event-card">

<h3>${index+1}. ${event.title}</h3>

<p>${event.description}</p>

<p><b>Date:</b> ${new Date(event.event_date).toDateString()}</p>

<p><b>Event ID:</b> ${event.id}</p>

<button onclick="deleteEvent(${event.id})">
Delete
</button>

</div>

`

})

})

}
function deleteEvent(id){

fetch("/delete-event/"+id,{
method:"POST"
})

.then(res=>res.text())

.then(msg=>{

alert(msg)

loadAdminEvents()

})

}

loadEvents()