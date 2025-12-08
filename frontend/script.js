document.getElementById("rentalForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const statusText = document.getElementById("status");
  statusText.textContent = "Submitting...";

  const data = {
    bedrooms: document.getElementById("bedrooms").value,
    bathrooms: document.getElementById("bathrooms").value,
    max_rent: document.getElementById("max_rent").value,
    email: document.getElementById("email").value
  };

  try {
    const response = await fetch("https://systemsfinal-proxy-grhjg2bshpgaexar.northcentralus-01.azurewebsites.net/api/submitform", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      statusText.textContent = "Form submitted! You will receive an email soon.";
    } else {
      statusText.textContent = "Error submitting form.";
    }
  } catch (err) {
    statusText.textContent = "Network error.";
  }
});
