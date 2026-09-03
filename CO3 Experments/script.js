// ======================================
// DOM-BASED STUDENT PROFILE MANIPULATION
// ======================================


// 1. CHANGE HEADING
function changeHeading() {

    // getElementById()
    let heading = document.getElementById("mainHeading");

    let input = document.getElementById("headingInput");

    if (input.value.trim() === "") {

        alert("Please enter a new heading.");

        return;
    }

    // textContent
    heading.textContent = input.value;

    input.value = "";
}



// 2. CHANGE TEXT COLOUR
function changeTextColor() {

    // querySelector()
    let name = document.querySelector("#studentName");

    let details = document.querySelector("#studentDetails");

    // style
    name.style.color = "#e63946";

    details.style.color = "#6a1b9a";
}



// 3. CHANGE BACKGROUND COLOUR
function changeBackground() {

    // getElementById()
    let profile = document.getElementById("profileCard");

    // style
    profile.style.backgroundColor = "#e8f5e9";

    profile.style.borderColor = "#43a047";
}



// 4. SHOW / HIDE PROFILE
function toggleProfile() {

    let profile = document.getElementById("profileCard");

    // classList
    profile.classList.toggle("hidden");
}



// 5. CHANGE STUDENT NAME
function changeStudentName() {

    // querySelector()
    let name = document.querySelector("#studentName");

    // textContent
    name.textContent = "s. Lakshmikar";

    // setAttribute()
    name.setAttribute("title", "Updated Student Name");
}



// 6. HIGHLIGHT PROFILE
function highlightProfile() {

    let profile = document.getElementById("profileCard");

    // classList
    profile.classList.toggle("highlight");

    // setAttribute()
    profile.setAttribute(
        "title",
        "Student profile has been highlighted"
    );

    let status = document.getElementById("status");

    status.textContent = "● Profile Highlighted";

    status.style.backgroundColor = "#fef3c7";

    status.style.color = "#b45309";
}



// 7. RESET PROFILE
function resetProfile() {

    let profile = document.getElementById("profileCard");

    let heading = document.getElementById("mainHeading");

    let name = document.getElementById("studentName");

    let details = document.getElementById("studentDetails");

    let status = document.getElementById("status");


    // Reset heading
    heading.textContent = "Student Profile";


    // Reset name
    name.textContent = "Lakshmi K";


    // Reset text
    details.textContent =
        "Passionate computer science student interested in " +
        "web development, artificial intelligence and " +
        "machine learning.";


    // Reset profile
    profile.classList.remove("hidden");

    profile.classList.remove("highlight");


    // Reset styles
    profile.style.backgroundColor = "white";

    profile.style.borderColor = "#e5e7eb";

    name.style.color = "#102a43";

    details.style.color = "#475467";


    // Reset status
    status.textContent = "● Active Student";

    status.style.backgroundColor = "#dcfce7";

    status.style.color = "#15803d";


    // Remove title attribute
    profile.removeAttribute("title");

    name.removeAttribute("title");
}