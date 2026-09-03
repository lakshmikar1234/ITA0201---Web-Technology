// ---------------------------------------
// FEATURE DETECTION FOR querySelector()
// ---------------------------------------

let nameInput;
let message;
let saveButton;
let loadButton;


// Check whether querySelector is supported

if (document.querySelector) {

    nameInput =
        document.querySelector("#nameInput");

    message =
        document.querySelector("#message");

    saveButton =
        document.querySelector("#saveButton");

    loadButton =
        document.querySelector("#loadButton");


    document.getElementById("queryStatus").innerHTML =
        "querySelector() is supported.";

} else {

    // Fallback for older browsers

    nameInput =
        document.getElementById("nameInput");

    message =
        document.getElementById("message");

    saveButton =
        document.getElementById("saveButton");

    loadButton =
        document.getElementById("loadButton");


    document.getElementById("queryStatus").innerHTML =
        "querySelector() is not supported. Using getElementById() fallback.";
}


// ---------------------------------------
// FEATURE DETECTION FOR localStorage
// ---------------------------------------

let storageSupported = false;


try {

    let testKey = "__test_storage__";

    localStorage.setItem(testKey, "test");

    localStorage.removeItem(testKey);

    storageSupported = true;

} catch (error) {

    storageSupported = false;

}


// Display localStorage status

if (storageSupported) {

    document.getElementById("storageStatus").innerHTML =
        "localStorage is supported.";

} else {

    document.getElementById("storageStatus").innerHTML =
        "localStorage is not supported. Temporary JavaScript storage will be used.";

}


// ---------------------------------------
// FALLBACK TEMPORARY STORAGE
// ---------------------------------------

let temporaryName = "";


// Save Button

saveButton.onclick = function () {

    let name = nameInput.value;


    if (name === "") {

        message.innerHTML =
            "Please enter your name.";

        return;
    }


    if (storageSupported) {

        // Use localStorage when supported

        localStorage.setItem(
            "userName",
            name
        );

        message.innerHTML =
            "Name saved using localStorage.";

    } else {

        // Fallback for unsupported browsers

        temporaryName = name;

        message.innerHTML =
            "Name stored temporarily using JavaScript fallback.";

    }

};


// Load Button

loadButton.onclick = function () {

    let savedName;


    if (storageSupported) {

        savedName =
            localStorage.getItem("userName");

    } else {

        savedName =
            temporaryName;

    }


    if (savedName) {

        message.innerHTML =
            "Welcome back, " + savedName + "!";

    } else {

        message.innerHTML =
            "No saved name found.";

    }

};