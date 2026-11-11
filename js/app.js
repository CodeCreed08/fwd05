function showPaymentOptions() {
    let category = document.getElementById("category").value;
    let hostlerDiv = document.getElementById("hostlerOptions");
    let dayScholarDiv = document.getElementById("dayScholarOptions");
    if (category === "Hostler") {
        hostlerDiv.style.display = "block";
        dayScholarDiv.style.display = "none";
    } else if (category === "Day Scholar") {
        hostlerDiv.style.display = "none";
        dayScholarDiv.style.display = "block";
    } else {
        hostlerDiv.style.display = "none";
        dayScholarDiv.style.display = "none";
    }
}
function registerStudent() {
    let name = document.getElementById("studentName").value.trim();
    let enrollment = document.getElementById("enrollment").value.trim();
    let category = document.getElementById("category").value;
    if (name === "" || enrollment === "" || category === "") {
        alert("Please fill in all required fields before continuing.");
        return;
    }
    let startingBalance = 0;
    let planType = "None";
    if (category === "Hostler") {
        planType = document.getElementById("messPlan").value;
    } else if (category === "Day Scholar") {
        planType = "Pay-Per-Meal";
        startingBalance = Number(document.getElementById("initialRecharge").value) || 0;
    }
    let newStudent = {
        fullName: name,
        id: enrollment,
        studentType: category,
        plan: planType,
        walletBalance: startingBalance
    };
    localStorage.setItem("currentStudent", JSON.stringify(newStudent));
    alert("Profile created! Welcome to the Smart Mess Portal.");
    window.location.href = "../pages/student-dashboard.html";
}
