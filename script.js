function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
document.querySelectorAll(".form-box .tab").forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active from all tabs
    document.querySelectorAll(".form-box .tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Show corresponding form
    document.querySelectorAll(".form-content").forEach(form => form.classList.remove("active"));
    document.getElementById(`${tab.dataset.tab}-form`).classList.add("active");
  });
});

// Toggle Sign Up / Login forms from Section 4
document.querySelectorAll(".form-box .tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".form-box .tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    document.querySelectorAll(".form-content").forEach(form => form.classList.remove("active"));
    document.getElementById(`${tab.dataset.tab}-form`).classList.add("active");
  });
});

