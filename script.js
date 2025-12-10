// ----------------------------
// Load Data from localStorage
// ----------------------------
function loadData() {
    let data = localStorage.getItem("students");
    return data ? JSON.parse(data) : {};
}

// ----------------------------
// Save Data to localStorage
// ----------------------------
function saveData(data) {
    localStorage.setItem("students", JSON.stringify(data));
}

// Global variable
let students = loadData();

// ----------------------------
// Calculate Grade
// ----------------------------
function calculateGrade(avg) {
    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 60) return "C";
    if (avg >= 40) return "D";
    return "F";
}

// ----------------------------
// Add Student
// ----------------------------
function addStudent() {
    let name = document.getElementById("name").value;
    let maths = parseInt(document.getElementById("maths").value);
    let science = parseInt(document.getElementById("science").value);
    let english = parseInt(document.getElementById("english").value);

    let total = maths + science + english;
    let avg = total / 3;
    let grade = calculateGrade(avg);

    students[name] = {
        maths,
        science,
        english,
        total,
        avg,
        grade
    };

    saveData(students);
    alert("Student added successfully!");
}

// ----------------------------
// Search Student
// ----------------------------
function searchStudent() {
    let name = document.getElementById("searchName").value;

    if (students[name]) {
        let s = students[name];
        document.getElementById("result").innerHTML = `
            <h3>Student Performance</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Maths:</b> ${s.maths}</p>
            <p><b>Science:</b> ${s.science}</p>
            <p><b>English:</b> ${s.english}</p>
            <p><b>Total:</b> ${s.total}</p>
            <p><b>Average:</b> ${s.avg}</p>
            <p><b>Grade:</b> ${s.grade}</p>
        `;
    } else {
        document.getElementById("result").innerHTML =
            "<p style='color:red;'>Student not found</p>";
    }
}

// ----------------------------
// Class Average
// ----------------------------
function classAverage() {
    let values = Object.values(students);
    if (values.length === 0) {
        alert("No student data available!");
        return;
    }

    let avg =
        values.reduce((sum, s) => sum + s.avg, 0) / values.length;

    document.getElementById("classAvg").innerHTML =
        `<h3>Class Average: ${avg.toFixed(2)}</h3>`;
}
