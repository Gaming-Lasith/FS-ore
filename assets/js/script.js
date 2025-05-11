// ------------------ LOGIN PAGE SCRIPT ------------------

const validUsers = {
  "john": "pass123",
  "emma": "secure456"
  // 👉 Add more users like this:
  // "alex": "mypassword",
};

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (validUsers[username] && validUsers[username] === password) {
      window.location.href = `${username}.html`;
    } else {
      alert("Invalid username or password.");
    }
  });
}

// ------------------ USER PAGE SCRIPT ------------------

const siteName = document.getElementById("site-name");
if (siteName) {
  siteName.addEventListener("click", function (e) {
    e.preventDefault();
    const currentPage = window.location.pathname.split("/").pop();
    window.location.href = currentPage;
  });
}
