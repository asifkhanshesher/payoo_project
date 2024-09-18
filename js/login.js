// step-1 verify logIn Button.
document.getElementById("btn_login").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("button clicked");

    // step-2 Get the phone number and PIN!
    const phoneNumber = document.getElementById("phone_number").value;
    const pinNumber = document.getElementById("pin_number").value;

    console.log(phoneNumber, pinNumber);

    // password and num validation check
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are loged In');
        window.location.href = 'payoo_project/home.html'
    }
    else{
        alert('Please input correct NUM or PIN !')
    }

  });
