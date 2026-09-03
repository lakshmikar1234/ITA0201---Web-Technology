// ==========================================
// DYNAMIC STUDENT REGISTRATION USING DOM
// ==========================================


// Get the student list container
let studentList = document.getElementById("studentList");


// Get student count
let studentCount = document.getElementById("studentCount");


// ==========================================
// ADD STUDENT
// ==========================================

function addStudent() {

    // Get input values
    let name = document.getElementById("studentName").value.trim();

    let registerNumber =
        document.getElementById("registerNumber").value.trim();

    let department =
        document.getElementById("department").value;


    // Validation
    if (
        name === "" ||
        registerNumber === "" ||
        department === ""
    ) {

        alert("Please enter all student details.");

        return;
    }


    // Remove empty message if it exists
    let emptyMessage =
        document.getElementById("emptyMessage");

    if (emptyMessage) {

        emptyMessage.remove();
    }


    // ==========================================
    // CREATE STUDENT RECORD
    // ==========================================

    // createElement()
    let studentRecord =
        document.createElement("div");

    studentRecord.classList.add("student-record");


    // ==========================================
    // CREATE STUDENT INFORMATION CONTAINER
    // ==========================================

    let studentInfo =
        document.createElement("div");

    studentInfo.classList.add("student-info");


    // ==========================================
    // CREATE NAME ELEMENT
    // ==========================================

    let nameBox =
        document.createElement("div");

    nameBox.classList.add("info-item");


    let nameLabel =
        document.createElement("span");

    nameLabel.textContent = "Student Name";


    let nameValue =
        document.createElement("strong");

    nameValue.textContent = name;


    nameBox.appendChild(nameLabel);

    nameBox.appendChild(nameValue);


    // ==========================================
    // CREATE REGISTER NUMBER ELEMENT
    // ==========================================

    let registerBox =
        document.createElement("div");

    registerBox.classList.add("info-item");


    let registerLabel =
        document.createElement("span");

    registerLabel.textContent = "Register Number";


    let registerValue =
        document.createElement("strong");

    registerValue.textContent = registerNumber;


    registerBox.appendChild(registerLabel);

    registerBox.appendChild(registerValue);


    // ==========================================
    // CREATE DEPARTMENT ELEMENT
    // ==========================================

    let departmentBox =
        document.createElement("div");

    departmentBox.classList.add("info-item");


    let departmentLabel =
        document.createElement("span");

    departmentLabel.textContent = "Department";


    let departmentValue =
        document.createElement("strong");

    departmentValue.textContent = department;


    departmentBox.appendChild(departmentLabel);

    departmentBox.appendChild(departmentValue);


    // ==========================================
    // APPEND STUDENT INFORMATION
    // ==========================================

    studentInfo.appendChild(nameBox);

    studentInfo.appendChild(registerBox);

    studentInfo.appendChild(departmentBox);


    // ==========================================
    // CREATE REMOVE BUTTON
    // ==========================================

    let removeButton =
        document.createElement("button");

    removeButton.textContent = "Remove";

    removeButton.classList.add("remove-btn");


    // Add click event
    removeButton.onclick = function () {

        removeStudent(this);

    };


    // ==========================================
    // APPEND CHILDREN
    // ==========================================

    studentRecord.appendChild(studentInfo);

    studentRecord.appendChild(removeButton);


    // Add student record to list
    studentList.appendChild(studentRecord);


    // ==========================================
    // UPDATE COUNT
    // ==========================================

    updateStudentCount();


    // Clear input fields
    document.getElementById("studentName").value = "";

    document.getElementById("registerNumber").value = "";

    document.getElementById("department").value = "";


    alert("Student registered successfully!");
}



// ==========================================
// REMOVE STUDENT
// ==========================================

function removeStudent(button) {

    /*
       parentElement is used to find
       the student record containing
       the clicked button.
    */

    let studentRecord =
        button.parentElement;


    // remove()
    studentRecord.remove();


    // Update count
    updateStudentCount();


    // If no students remain
    if (studentList.children.length === 0) {

        showEmptyMessage();
    }
}



// ==========================================
// CLEAR ALL STUDENTS
// ==========================================

function clearAll() {

    if (studentList.children.length === 0) {

        alert("There are no students to clear.");

        return;
    }


    let confirmation =
        confirm(
            "Are you sure you want to remove all students?"
        );


    if (confirmation) {

        /*
           children property is used to
           access all child elements.
        */

        while (studentList.children.length > 0) {

            studentList.children[0].remove();
        }


        showEmptyMessage();


        updateStudentCount();
    }
}



// ==========================================
// SHOW EMPTY MESSAGE
// ==========================================

function showEmptyMessage() {

    let emptyMessage =
        document.createElement("div");

    emptyMessage.id = "emptyMessage";

    emptyMessage.classList.add("empty-message");


    let icon =
        document.createElement("div");

    icon.classList.add("empty-icon");

    icon.textContent = "👨‍🎓";


    let heading =
        document.createElement("h3");

    heading.textContent =
        "No Students Registered";


    let message =
        document.createElement("p");

    message.textContent =
        "Add a student using the registration form.";


    // appendChild()
    emptyMessage.appendChild(icon);

    emptyMessage.appendChild(heading);

    emptyMessage.appendChild(message);


    studentList.appendChild(emptyMessage);
}



// ==========================================
// UPDATE STUDENT COUNT
// ==========================================

function updateStudentCount() {

    /*
       children.length counts the
       number of student records.
    */

    let count = studentList.children.length;


    // Don't count empty message
    if (
        document.getElementById("emptyMessage")
    ) {

        count = 0;
    }


    studentCount.textContent = count;
}