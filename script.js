/* =========================
   SMOOTH SCROLL
========================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================
   OPEN SCANNER
========================= */

function openScanner() {

    const modal = document.getElementById("scannerModal");

    modal.style.display = "flex";
}


/* =========================
   CLOSE SCANNER
========================= */

function closeScanner() {

    const modal = document.getElementById("scannerModal");

    modal.style.display = "none";

    document.getElementById("preview").innerHTML = "";

    document.getElementById("result").innerHTML = "";
}


/* =========================
   IMAGE PREVIEW
========================= */

function previewWaste(event) {

    const file = event.target.files[0];

    const preview = document.getElementById("preview");

    if (!file) {
        preview.innerHTML = "";
        return;
    }

    if (!file.type.startsWith("image/")) {

        preview.innerHTML =
            "<p>Please select an image file.</p>";

        return;
    }

    const imageURL = URL.createObjectURL(file);

    preview.innerHTML = `
        <img src="${imageURL}" alt="Waste Preview">
    `;

    document.getElementById("result").innerHTML = "";
}


/* =========================
   DEMO AI ANALYSIS
========================= */

function analyzeWaste() {

    const file =
        document.getElementById("wasteImage").files[0];

    const result =
        document.getElementById("result");

    if (!file) {

        result.innerHTML =
            "⚠️ Please upload a waste image first.";

        return;
    }

    result.innerHTML =
        "🤖 Analyzing image...";

    /*
        DEMO ONLY

        Later we will connect this button
        to the Python + YOLOv8 AI backend.
    */

    setTimeout(function () {

        result.innerHTML = `
            <div class="scan-result">

                <div>
                    <strong>Plastic Waste</strong>
                    <small>AI classification result</small>
                </div>

                <div class="confidence">
                    94%
                </div>

            </div>

            <p>
                ♻️ This material can potentially
                be recycled.
            </p>
        `;

    }, 1500);
}


/* =========================
   LOGIN DEMO
========================= */

function showLoginMessage() {

    alert(
        "Login system will be added in the next stage."
    );
}


/* =========================
   CLOSE MODAL WHEN CLICKING
   OUTSIDE
========================= */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("scannerModal");

    if (event.target === modal) {

        closeScanner();

    }

});