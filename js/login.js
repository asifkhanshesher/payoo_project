// step-1
document.getElementById("btn_login").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("button clicked");

    // step-2
    const phoneNumber = document.getElementById("phone_number").value;
    console.log(phoneNumber)
  });
