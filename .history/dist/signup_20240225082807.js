const apiUrl = 'https://natours-production-095c.up.railway.app/api/v1/users/signup';

const signup = async (name, email, password, passwordConfirm, role) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, passwordConfirm, role })
    });

    const data = await response.json();

    if (data.status === 'success') {
      alert('Signup successful');
      // Redirect to login page or do something else
    } else {
      alert('Signup failed: ' + data.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
};

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("passwordConfirm").value;
  const role = "user";  // You can adjust the role as needed

  try {
    await signup(name, email, password, passwordConfirm, role);
  } catch (error) {
    console.error(error);
    // Handle error if needed
  }
});
