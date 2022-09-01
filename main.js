    function validation() {
      var name = document.getElementById("name").value;
      var user = document.getElementById("user").value;
      var pass = document.getElementById("pass").value;
      var confirmpass = document.getElementById("conpass").value;
      var mobileNumber = document.getElementById("mobileNumber").value;
      var emails = document.getElementById("emails").value;

      if (name == "") {
        document.getElementById("Name").innerHTML =
          "Name field is Required";
        return false;
      }

      if (emails == "") {
        document.getElementById("emailids").innerHTML =
          "Email Field is Required";
        return false;
      }
      if (emails.indexOf("@") <= 0) {
        document.getElementById("emailids").innerHTML = "Your Entered Email is Invalid";
        return false;
      }

      if (
        emails.charAt(emails.length - 4) != "." &&
        emails.charAt(emails.length - 3) != "."
      ) {
        document.getElementById("emailids").innerHTML = "Your Entered Email is Invalid";
        return false;
      }

      if (user == "") {
        document.getElementById("username").innerHTML =
          "Username Field is Required";
        return false;
      }
      if (user.length <= 3 || user.length > 20) {
        document.getElementById("username").innerHTML =
          "Username lenght must be between 3 and 20";
        return false;
      }
      if (!isNaN(user)) {
        document.getElementById("username").innerHTML =
          "Username must be in Character Form";
        return false;
      }

      if (pass == "") {
        document.getElementById("passwords").innerHTML =
          "Password Field is Required";
        return false;
      }
      if (pass.length <= 5 || pass.length > 20) {
        document.getElementById("passwords").innerHTML =
          "Passwords lenght must be between 5 and 20";
        return false;
      }

      if (pass != confirmpass) {
        document.getElementById("confrmpass").innerHTML =
          "Password and Confirm Password is not matched";
        return false;
      }

      if (confirmpass == "") {
        document.getElementById("confrmpass").innerHTML =
          "Confrm Password Field is Required";
        return false;
      }

      if (mobileNumber == "") {
        document.getElementById("mobileno").innerHTML =
          "Mobile Number Field is Required";
        return false;
      }
      if (isNaN(mobileNumber)) {
        document.getElementById("mobileno").innerHTML =
          "Mobile Number Must be in Digits";
        return false;
      }
      if (mobileNumber.length != 11) {
        document.getElementById("mobileno").innerHTML =
          "Mobile Number must be 11 digits only";
        return false;
      }
    }