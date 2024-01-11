const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  myButton.classList.add("loading");
  // Simulate an asynchronous action, e.g., an API call
  setTimeout(() => {
    myButton.classList.remove("loading");
  }, 3000); // Replace with your desired loading time
});