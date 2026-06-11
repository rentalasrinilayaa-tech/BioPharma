/* ============================================================
   BioPharma Updates — shared JavaScript (loaded on every page)
   Handles: 1) dark/light theme toggle  2) highlighting the
   current page in the navigation menu.
   ============================================================ */

// --- Theme toggle ---------------------------------------------------
// We remember the user's choice in localStorage (the browser's tiny
// built-in storage). try/catch keeps it from crashing in restricted
// preview environments where storage is blocked.
function getSavedTheme() {
  try { return localStorage.getItem("bp-theme"); } catch (e) { return null; }
}
function saveTheme(t) {
  try { localStorage.setItem("bp-theme", t); } catch (e) { /* ignore */ }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.querySelector(".theme-toggle");
  if (btn) btn.textContent = theme === "dark" ? "☀ Light mode" : "☾ Dark mode";
}

// Apply saved theme immediately on page load
applyTheme(getSavedTheme() === "dark" ? "dark" : "light");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".theme-toggle");
  if (btn) {
    applyTheme(getSavedTheme() === "dark" ? "dark" : "light");
    btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      saveTheme(next);
    });
  }

  // --- Highlight the current page in the menu ----------------------
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.menu a").forEach((a) => {
    if (a.getAttribute("href") === here) a.classList.add("active");
  });
});

// --- Small helpers shared by pages ----------------------------------
function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}
function shorten(s, n) { s = String(s); return s.length > n ? s.slice(0, n - 1) + "…" : s; }
