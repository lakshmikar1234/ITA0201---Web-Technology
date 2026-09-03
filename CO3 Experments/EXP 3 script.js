// ------------------------------
// INTRINSIC EVENT HANDLING
// ------------------------------


// onclick event
function showInfo() {

    document.getElementById("liveMessage").innerHTML =
        "University Tech Fest includes Hackathon, Workshop, Cultural and Sports Events.";

    document.getElementById("liveMessage").style.backgroundColor =
        "#d1c4e9";
}


// change event
function departmentChanged() {

    let department =
        document.getElementById("department").value;

    document.getElementById("liveMessage").innerHTML =
        "Selected Department: " + department;
}


// input event
function showInput() {

    let name =
        document.getElementById("studentName").value;

    document.getElementById("liveMessage").innerHTML =
        "You are typing: " + name;
}


// focus event
function focusField(element) {

    element.style.backgroundColor = "#fff9c4";

    document.getElementById("liveMessage").innerHTML =
        "Input field is focused.";
}


// blur event
function blurField(element) {

    element.style.backgroundColor = "white";

    document.getElementById("liveMessage").innerHTML =
        "You left the input field.";
}


// mouseover event
function mouseOverEvent() {

    document.querySelector(".event-card").style.backgroundColor =
        "#ce93d8";

    document.getElementById("liveMessage").innerHTML =
        "Mouse is over the event card.";
}


// mouseout event
function mouseOutEvent() {

    document.querySelector(".event-card").style.backgroundColor =
        "#f3e5f5";

    document.getElementById("liveMessage").innerHTML =
        "Mouse left the event card.";
}


// ------------------------------
// MODERN EVENT HANDLING
// USING addEventListener()
// ------------------------------


const form = document.getElementById("registrationForm");


// submit event
form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name =
        document.getElementById("studentName").value;

    let registerNumber =
        document.getElementById("registerNumber").value;

    let email =
        document.getElementById("email").value;

    let department =
        document.getElementById("department").value;

    let selectedEvent =
        document.getElementById("event").value;


    if (
        name === "" ||
        registerNumber === "" ||
        email === "" ||
        department === "" ||
        selectedEvent === ""
    ) {

        document.getElementById("result").innerHTML =
            "Please fill in all fields.";

        document.getElementById("result").style.backgroundColor =
            "#ffcdd2";

    } else {

        document.getElementById("result").innerHTML =
            "<h3>Registration Successful!</h3>" +
            "<p>Name: " + name + "</p>" +
            "<p>Register Number: " + registerNumber + "</p>" +
            "<p>Email: " + email + "</p>" +
            "<p>Department: " + department + "</p>" +
            "<p>Event: " + selectedEvent + "</p>";

        document.getElementById("result").style.backgroundColor =
            "#c8e6c9";

        form.reset();
    }

});


// Another modern event listener
document.getElementById("registerNumber")
    .addEventListener("focus", function() {

        console.log("Register number field focused");

    });