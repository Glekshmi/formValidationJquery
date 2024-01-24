function nameValidate(input) {
   input.value = input.value.replace(/[^a-zA-Z]/g, "");
}

function phNoValidate(input) {
   input.value = input.value.replace(/\D/g, "");
}

function password() {
   password = $("#password").val();
   let speclChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
   let alphabets = /[A-z]/g;
   let numbers = /[0-9]/g;
   if (password.match(" ")) {
      $("#passwordCheck").html("Space is not allowed");
   } else {
      let specialChar = speclChar.test(password);
      let letters = alphabets.test(password);
      let digits = numbers.test(password);
      if ((specialChar) && (letters) && (digits))
         $("#passwordCheck").html('');
      else if (password.length < 8) {
         $("#passwordCheck").html("Password should contain at least 8 characters");
      } else
         $("#passwordCheck").html("Password must be a combination of alphabets,digits and special characers");
   }
}

function confirmPassword() {
   let password = $("#password").val();
   let confirmPass = $("#confirmPass").val();
   if (confirmPass === password) {
      $("#confirmPassCheck").html("");
   } else {
      $("#confirmPassCheck").html("Password does not match");
   }
}

function validate(event) {
   event.preventDefault()
   let count = 0;
   let firstName = $("#firstName").val().trim();
   if ((firstName == "") || (!isNaN(firstName))) {
      $("#firstNameValid").text("First Name field cannot be empty!");
      count++;
   } else {
      $("#firstNameValid").text('');
   }

   let lastName = $("#lastName").val().trim();
   if ((lastName == "") || (!isNaN(lastName))) {
      $("#lastNameValid").text("Last Name field cannot be empty!");
      count++;
   } else
      $("#lastNameValid").text('');

   let add = $("#add").val().trim();
   if (add == "") {
      $("#addValid").text("Address field cannot be empty!");
      count++;
   } else
      $("#addValid").text('');

   let phone = $("#phone").val().trim();
   if ((phone == '') || (isNaN(phone))) {
      $("#phoneValid").text("Phone Number field cannot be empty!");
      count++;
   } else {
      $("#phoneValid").text('');
   }

   let email = $("#email").val().trim();
   if (email == "") {
      $("#emailValid").text("Email field cannot be empty!");
      count++;
   } else {

      if (!(email.includes('.com') || email.includes('.in'))) {
         $("#emailValid").text("invalid email address!");
         count++;
      } else {
         $("#emailValid").text('');
         let emailFor = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if (!email.match(emailFor)) {
            $("#emailValid").text("invalid email address!");
            count++;
         } else {
            $("#emailValid").text('');
         }
      }

   }

   password = $("#password").val();
   let speclChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
   let alphabets = /[A-z]/g;
   let numbers = /[0-9]/g;
   if (password.match(" ")) {
      $("#passwordCheck").html("Space is not allowed");
      count++;
   } else {
      let specialChar = speclChar.test(password);
      let letters = alphabets.test(password);
      let digits = numbers.test(password);
      if ((specialChar) && (letters) && (digits))
         $("#passwordCheck").html('');
      else {
         $("#passwordCheck").html("Password must be a combination of alphabets,digits and special characers");
         count++;
      }
      if (password.length < 8) {
         $("#passwordCheck").html("Password should contain at least 8 characters");
      } else {
         $("#passwordCheck").html('');
      }
      if (password == "") {
         $("#passwordCheck").html("Password field cannot be empty!");
         count++;
      } else {
         $("#passwordCheck").html("");
      }
   }
   let confirmPass = $("#confirmPass").val();

   if (confirmPass == "") {
      $("#confirmPassCheck").html("This field cannot be empty");
      count++;
   } else if (confirmPass === password)
      $("#confirmPassCheck").html("");
   else {
      $("#confirmPassCheck").html("Password does not match");
      count++;
   }

   if (count == 0) {
      alert("Successfully Registered");
      $("form")[0].reset();
   }
}