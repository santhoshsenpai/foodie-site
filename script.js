const params = new URLSearchParams(window.location.search);

document.getElementById("name").innerText = params.get("name") || "Not provided";
document.getElementById("email").innerText = params.get("email") || "Not provided";
document.getElementById("date").innerText = params.get("date") || "Not provided";
document.getElementById("time").innerText = params.get("time") || "Not provided";