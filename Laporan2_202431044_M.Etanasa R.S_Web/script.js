// Fungsi untuk interaksi judul: sembunyikan / tampilkan paragraf dengan confirm
document.addEventListener("DOMContentLoaded", function () {
    const judulList = document.querySelectorAll(".judul-masalah");
    const toggleModeBtn = document.getElementById("toggle-mode");
    const body = document.body;

    judulList.forEach(function (judul) {
        judul.addEventListener("click", function () {
            const targetId = judul.getAttribute("data-target");
            const paragraf = document.getElementById(targetId);

            if (!paragraf) return;

            const currentDisplay = window.getComputedStyle(paragraf).display;

            if (currentDisplay !== "none") {
                const hide = confirm("Apakah Anda ingin menyembunyikan penjelasan ini?");
                if (hide) {
                    paragraf.style.display = "none";
                }
            } else {
                const show = confirm("Apakah Anda ingin menampilkan penjelasan ini?");
                if (show) {
                    paragraf.style.display = "block";
                }
            }
        });
    });

    // Tombol pengubah mode tampilan (hanya ada di index.html)
    if (toggleModeBtn) {
        toggleModeBtn.addEventListener("click", function () {
            // Toggle antara neat-mode dan messy-mode
            if (body.classList.contains("neat-mode")) {
                body.classList.remove("neat-mode");
                body.classList.add("messy-mode");
            } else {
                body.classList.remove("messy-mode");
                body.classList.add("neat-mode");
            }
        });
    }
});

// Fungsi untuk tombol kembali di halaman gambar
function goBack() {
    // Kembali ke halaman sebelumnya
    if (window.history.length > 1) {
        window.history.back();
    } else {
        // Jika tidak ada history, paksa ke index.html
        window.location.href = "index.html";
    }
}