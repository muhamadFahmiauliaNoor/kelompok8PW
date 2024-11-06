// Basic Form Validation
function validateForm() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gpa = parseFloat(document.getElementById("gpa").value);

    if (fullName === "" || email === "" || phone === "" || isNaN(gpa)) {
        alert("Harap isi semua bidang yang diperlukan.");
        return false;
    }

    if (gpa < 0 || gpa > 4) {
        alert("Nilai GPA harus antara 0 dan 4.");
        return false;
    }

    const agreement = document.getElementById("agreement").checked;
    if (!agreement) {
        alert("Anda harus menyetujui syarat dan ketentuan.");
        return false;
    }

    alert("Pendaftaran berhasil!");
    return true;
}


// Filter function
function filterPrograms() {
    const filter = document.getElementById("filter").value;
    const programs = document.querySelectorAll(".program-card");

    programs.forEach(program => {
        if (filter === "all" || program.getAttribute("data-faculty") === filter) {
            program.style.display = "block";
        } else {
            program.style.display = "none";
        }
    });
}

// kontak script
// Basic Form Validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Harap isi semua bidang yang diperlukan.");
        return false;
    }

    alert("Pesan Anda berhasil dikirim!");
    return true;
}

// Google Maps Initialization
function initMap() {
    const campusLocation = { lat: -6.2088, lng: 106.8456 }; // Koordinat Universitas
    const mapOptions = {
        zoom: 15,
        center: campusLocation,
        mapTypeId: 'roadmap',
    };

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const marker = new google.maps.Marker({
        position: campusLocation,
        map: map,
        title: "Universitas [Nama Kampus]"
    });
}

// berita
// Function for News Search
function searchNews() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const newsCards = document.querySelectorAll(".news-card");

    newsCards.forEach(card => {
        const title = card.querySelector("h2").innerText.toLowerCase();
        const description = card.querySelector("p").innerText.toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Function for Category Filter
function filterCategory() {
    const filter = document.getElementById("categoryFilter").value;
    const newsCards = document.querySelectorAll(".news-card");

    newsCards.forEach(card => {
        const category = card.getAttribute("data-category");

        if (filter === "all" || category === filter) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

