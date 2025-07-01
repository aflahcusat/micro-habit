document.querySelector(".login-btn").addEventListener("click", () => {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (email === "" || password === "") {
    alert("Please enter both email and password.");
    return;
  }

  document.querySelector(".login-screen").classList.add("hidden");
  showPage("dashboardPage");
});

document.getElementById("guestBtn").addEventListener("click", () => {
  document.querySelector(".login-screen").classList.add("hidden");
  showPage("dashboardPage");
});

document.querySelector(".settings-btn").addEventListener("click", () => {
  document.getElementById("profileModal").classList.remove("hidden");
});

document.getElementById("createProfileBtn").addEventListener("click", () => {
  document.getElementById("profileModal").classList.add("hidden");
  const popup = document.getElementById("popupMessage");
  popup.classList.remove("hidden");
  setTimeout(() => popup.classList.add("hidden"), 2000);
});
document.querySelector(".login-btn").addEventListener("click", () => {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (email === "" || password === "") {
    alert("Please enter both email and password.");
    return;
  }

  document.querySelector(".login-screen").classList.add("hidden");
  showPage("dashboardPage");
});

document.getElementById("guestBtn").addEventListener("click", () => {
  document.querySelector(".login-screen").classList.add("hidden");
  showPage("dashboardPage");
});

document.querySelector(".settings-btn").addEventListener("click", () => {
  document.getElementById("profileModal").classList.remove("hidden");
});

document.getElementById("createProfileBtn").addEventListener("click", () => {
  document.getElementById("profileModal").classList.add("hidden");
  const popup = document.getElementById("popupMessage");
  popup.classList.remove("hidden");
  setTimeout(() => popup.classList.add("hidden"), 2000);
});

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.add("hidden");
  });
  document.getElementById(pageId).classList.remove("hidden");
}

function logout() {
  document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
  document.querySelector(".login-screen").classList.remove("hidden");
  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.add("hidden");
  });
  document.getElementById(pageId).classList.remove("hidden");
}

function logout() {
  document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
  document.querySelector(".login-screen").classList.remove("hidden");
  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";
}
