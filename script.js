let chartCreated = false;
let marksChart;

function analyze() {
    let name = document.getElementById("name").value;
    let s1 = parseInt(document.getElementById("sub1").value);
    let s2 = parseInt(document.getElementById("sub2").value);
    let s3 = parseInt(document.getElementById("sub3").value);

    if (!name || isNaN(s1) || isNaN(s2) || isNaN(s3)) {
        alert("❗ Please fill all fields correctly");
        return;
    }

    let total = s1 + s2 + s3;
    let avg = total / 3;
    let grade = "";

    if (avg >= 90) grade = "A+ (Excellent)";
    else if (avg >= 75) grade = "A (Very Good)";
    else if (avg >= 60) grade = "B (Good)";
    else if (avg >= 40) grade = "C (Pass)";
    else grade = "F (Fail)";

    // Display result
    document.getElementById("output").innerHTML = `
        <h2>📊 Performance Report</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Total Marks:</strong> ${total}</p>
        <p><strong>Average:</strong> ${avg.toFixed(2)}</p>
        <p><strong>Grade:</strong> ${grade}</p>

        <p class="ending">✨ Keep learning, keep growing — success is a journey, not a race! ✨</p>
    `;

    // Bar Chart Creation
    const ctx = document.getElementById("marksChart").getContext("2d");

    if (chartCreated) {
        marksChart.destroy(); // Remove old chart before creating a new one
    }

    marksChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Subject 1", "Subject 2", "Subject 3"],
            datasets: [{
                label: "Marks Obtained",
                data: [s1, s2, s3],
                backgroundColor: ["#ff7675", "#74b9ff", "#55efc4"],
                borderColor: "#fff",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true, max: 100 }
            },
            plugins: {
                legend: { labels: { color: "white" } }
            }
        }
    });

    chartCreated = true;
}

