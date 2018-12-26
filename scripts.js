function valid (form) {
	var fail = false;
	var name = form.name.value;
	var email = form.email.value;
	var password = form.password.value;
	var repassword = form.repassword.value;
	var state = form.state.value;
		if (name == false) {
	        fail = "You have not entered your name!";
	    } else if (email.split('@').length - 1 == 0) {
	    	fail = "You entered invalid email";
	    } else if (email.split('.').length - 1 == 0) {
	    	fail = "You entered invalid email";
	    }
	    else if (password == false) {
	        fail = "You have not entered your password!";
	    } else if (password !== repassword) {
	        fail = "Passwords do not match!";
	    } else if (state == "") {
	    	fail = "Enter state!"
	    }
		if (fail) {
			alert(fail);
		} else {
			window.location = "https://hebronsoft.com/";
		}
}