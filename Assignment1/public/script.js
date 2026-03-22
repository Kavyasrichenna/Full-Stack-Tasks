fetch("/assignments")
.then(res => res.json())
.then(data => {
    let output = "";
    data.forEach(assign => {
        output += `
            <div>
                <h3>${assign.title}</h3>
                <p>Subject: ${assign.subject}</p>
                <p>Due Date: ${assign.due_date}</p>
                <a href="register.html?assignment_id=${assign.assignment_id}">Submit</a>
            </div>
        `;
    });
    document.getElementById("assignmentList").innerHTML = output;
});