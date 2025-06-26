// Get query parameters from URL
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");
const password = urlParams.get("password");

// Simple authentication check
if (!username || !password) {
  window.location.href = "../login.html";
}

// Function to load page with credentials
function loadPage(page) {
  const iframe = document.getElementById("iframe");
  iframe.src = `${page}.html?username=${username}&password=${password}`;

  // Save current page to localStorage
  localStorage.setItem("lastVisitedPage", page);

  // Update radio button state
  document.getElementById(page).checked = true;
}

function importHtml(el) {
  document.getElementById(el).addEventListener("click", () => {
    loadPage(el);
  });
}

// Check for last visited page or use 'home' as default
const lastPage = localStorage.getItem("lastVisitedPage") || "home";
loadPage(lastPage);

// Set up navigation
importHtml("home");
importHtml("biodata");
importHtml("galery");

// Navigation toggle functionality
const toggleNavButton = document.getElementById("toggle-nav");
const navMenu = document.getElementById("nav");
const nav = document.getElementById("nave");
let bn = true;

toggleNavButton.addEventListener("click", () => {
  navMenu.classList.toggle("collapsed");
  nav.style.height = bn ? "0%" : "100%";
  bn = !bn;
});

toggleNavButton.click();
