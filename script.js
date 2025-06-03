let current = parseInt(localStorage.getItem("current")) || 0;
let last = parseInt(localStorage.getItem("last")) || 0;
const mode = new URLSearchParams(window.location.search).get("mode");
document.getElementById("mode-title").innerText = mode === "admin" ? "Admin Mode" : "User Mode";
if (mode === "admin") {
  document.getElementById("admin-section").style.display = "block";
} else {
  document.getElementById("user-section").style.display = "block";
}

function ambilNomor() {
  last++;
  localStorage.setItem("last", last);
  document.getElementById("nomor-user").innerText = last;
}
function panggilBerikut() {
  if (current < last) {
    current++;
    localStorage.setItem("current", current);
    updateDisplay();
  }
}
function resetAntrian() {
  current = 0;
  last = 0;
  localStorage.setItem("current", 0);
  localStorage.setItem("last", 0);
  updateDisplay();
}
function updateDisplay() {
  document.getElementById("nomor-sekarang").innerText = current;
}
updateDisplay();