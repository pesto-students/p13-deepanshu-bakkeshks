function displayWindowProperties() {
  console.log("User Agent:", window.navigator.userAgent);

  console.log("Screen Width:", window.screen.width);
  console.log("Screen Height:", window.screen.height);

  console.log("Current URL:", window.location.href);
  console.log("Path Name:", window.location.pathname);

  sessionStorage.setItem("sessionData", "This is session data.");
  localStorage.setItem("localData", "This is local data.");

  console.log("Session Storage Data:", sessionStorage.getItem("sessionData"));
  console.log("Local Storage Data:", localStorage.getItem("localData"));
}

// Call the displayWindowProperties function when the page loads
window.onload = displayWindowProperties;
