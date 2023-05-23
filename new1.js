$("#form").validate({
 rules:{
  name:{
  minlength: 2
  }
  },
  messages: {
    required: "Please enter your name",
    minlength: "Name at leasst 2 characters"
	},
  submitHandler: function(form) {
    form.submit();
  }
 });