$(function() {
  $("#username_error_msg").hide();
  $("#address_error_msg").hide();
  $("email_error_msg").hide();
  $("#zip_error_msg").hide();
  $("#checkbox_error_msg").hide();
  $("#radio_error_msg").hide();

  var error_username = false;
  var error_address = false;
  var error_email = false;
  var error_zip = false;
  var error_checkbox = false;
  var error_radio = false;


  $("#name").focusout(function() {
    check_username();
  });
  $("#street_address").focusout(function() {
    check_address();
  });

  $("#zip_code").focusout(function() {
    check_zipcode();
  });

  $("#email").focusout(function() {
    check_email();
  });

  $("#check").focusout(function() {
    Checkbox();
  });
  $("#label").focusout(function() {
    check_radio();
  });



  function check_username() {
    var name = document.getElementById("name").value;
    var pattern = /^[a-zA-Z]*$/;
    var alertMsg = "";
    if (pattern.test(name) && name != "") {
      $("#username_error_msg").hide();
      $("#name").css("border", "2px solid #34F458");
    } else {
      $("#name").val("");
      $("#username_error_msg").html("should contain only characters without whitespace");
      $("#username_error_msg").show();
      $("#name").css("border", "2px solid #F90A0A");
      error_username = true;
    }
  }

  function check_address() {
    var reStreet = /^[0-9a-zA-Z ]+$/;
    var streetaddress = document.getElementById("street_address").value;
    if (streetaddress != '' && streetaddress.match(reStreet)) {
      $("#address_error_msg").hide();
      $("#street_address").css("border", "2px solid #34F458");
    } else {
      $("#street_address").val("");
      $("#address_error_msg").html("should contain only alphanumeric characters");
      $("#address_error_msg").show();
      $("#street_address").css("border", "2px solid #F90A0A");
      error_address = true;
    }
  }

  function check_email() {
    var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById("email").value;
    if (email != '' && reEmail.test(email)) {
      $("#email_error_msg").hide();
      $("#email").css("border", "2px solid #34F458");

    } else {
      $("#email").val("");
      $("#email_error_msg").html("please put in the format of email.");
      $("#email_error_msg").show();
      $("#email").css("border", "2px solid #F90A0A");
      error_email = true;
    }
  }

  function check_zipcode() {
    var zipcode = document.getElementById("zip_code").value;
    var pattern = /^[0-9]{5}$/;
    if (zipcode != "" && pattern.test(zipcode)) {
      $("#zip_error_msg").hide();
      $("#zip_code").css("border", "2px solid #34F458");
      //zipCode(zipcode);
    } else {
      $("#zip_code").val("");
      $("#zip_error_msg").html("should be a 5 digit number");
      $("#zip_error_msg").show();
      $("#zip_code").css("border", "2px solid #F90A0A");
      error_zip = true;
    }
  }

  function Checkbox() {
    var checkedNum = document.querySelectorAll('input[type="checkbox"]:checked').length
    if (checkedNum < 2) {
      $("#checkbox_error_msg").html("Select atleast two checkboxes");
      $("#checkbox_error_msg").show();
      error_checkbox = true;
    } else {
      $("#checkbox_error_msg").html("");
      $("#checkbox_error_msg").hide();
    }
  }

  function check_radio() {
    var radioChecked = document
      .querySelector('input[name = "recommend"]:checked')
    if (radioChecked == null) {
      $("#radio_error_msg").html("Select a radio button");
      $("#radio_error_msg").show();
      error_radio = true;
    }
  }
  $("form").submit(function() {
    error_username = false;
    error_address = false;
    error_email = false;
    error_zip = false;
    error_checkbox = false;
    error_radio = false;

    check_username();
    check_address();
    check_email();
    Checkbox();
    check_zipcode();
    check_radio();

    if (error_username == false && error_address == false && error_email == false && error_zip == false && error_checkbox == false && error_radio == false) {
      alert("Submission successfull.");
      return true;
    } else {
      alert("Please fill the form correctly!");
      return false;
    }
  });

});
