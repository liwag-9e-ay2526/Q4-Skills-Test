
// VARIABLES
let totalSubjects = 3;

// LOGIN FUNCTION
function login(){

    // USER INPUT
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // CONDITIONAL STATEMENT
    if(username == "John Doe" && password == "abc123"){

        alert("Login Successful!");

        // OPEN NOTEBOOK PAGE
        window.location.href = "notebook.html";

    }else{

        alert("Wrong Username or Password");

    }
}

// SHOW LOGIN DETAILS
function showDetails(){

    // DEFAULT LOGIN DETAILS
    let username = "John Doe";
    let password = "abc123";

    // OUTPUT USING innerHTML
    document.getElementById("details").innerHTML =
    "Username: " + username +
    "<br>Password: " + password;
}

// NOTEBOOK FUNCTION
function openNotebook(subject){

    let status = "Available";

    // CONDITIONAL
    if(subject == "Math"){
        status = "Busy";
    }

    // SWITCH STATEMENT
    // This checks notebook status
    switch(status){

        case "Available":
            message = "Notebook is available.";
            break;

        case "Busy":
            message = "Notebook is currently busy.";
            break;

        default:
            message = "Unknown status.";
    }

    // LOOP
    let list = "";

    for(let i = 1; i <= totalSubjects; i++){
        list += "Subject " + i + "<br>";
    }

    // OUTPUT
    document.getElementById("output").innerHTML =
    "<h4>" + subject + "</h4>" +
    "<p>" + message + "</p>" +
    "<p>Total Subjects: " + totalSubjects + "</p>" +
    list;
}
