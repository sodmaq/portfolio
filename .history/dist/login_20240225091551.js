const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value; // Change from "username" to "email"
  const password = document.getElementById("password").value;
  const apiUrl =
    "https://natours-production-095c.up.railway.app/api/v1/users/login";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }), // Use "email" field instead of "username"
    });

    const data = await response.json();
    cons

    if (data.status === "success") {
      // Check for "success" status
      window.location.href = "./contact.html";
      // Redirect to dashboard or do something else
    } else {
      alert("Login failed: " + data.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
});
