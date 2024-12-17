// document.getElementsByName
// document.getElementsByTagNameNS
document.getElementById("btn").addEventListener("dblclick", () => {
  console.log("You double click me!");
});
document.getElementById("btn").addEventListener("mouseover", () => {
  console.log("You hover on me!");
});

document.getElementById("hate").addEventListener("click", () => {
  document.getElementsByTagName("p")[0].textContent = "I dislike programming!";
});

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();

  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  let errorElement = document.getElementById("response");
  if (
    phone == "" ||
    password == "" ||
    phone.length != 9 ||
    password.length < 6 ||
    password == phone ||
    password == 'password'
  ) {
    errorElement.style.color = "white";
    errorElement.style.backgroundColor='red';
    errorElement.textContent = "You shall not pass";
  } else {
    errorElement.style.color = "white";
    errorElement.style.backgroundColor = "green";
    errorElement.innerHTML =
      "<h1>You have successfully Logged in!";
  }
});
