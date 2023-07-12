# Front-End-Development-Using-JavaScript-Cookie-Ajax-jQuery-jQuery-UI
This assignment is an extension of Student Survey Form of the previous Assignment and requires you to enhance the page using JavaScript functionality. You will have an opportunity to demonstrate how to use cookie, JavaScript functions, event handling, jQuery, and Ajax implementation. The following are specific details of the assignment. 

### Cookie and Greetings Implementation – On the Student Survey Form Page, use a cookie to hold a user's information and display a greeting with the user’s name from the cookie. The greeting displayed should be an appropriate greeting based on the time of the day (e.g., good morning, good afternoon, or good evening) when a user visits the web site. (An example of such greeting is “Good Afternoon John, welcome to SWE642 Survey” when the user John visits your page in the afternoon).

### If the name stored in the cookie is different from the user opening your page, have a hyperlink that prompts the user to enter his/her name. Use the correct name to reset the document’s cookie. You may need to reload the page (automatically) to get the new name after resetting the cookie. Set an expiration time for the cookie.If no cookie has been set, then prompt the user to enter his/her name and set the cookie.

### Survey Form Extension and Average & Maximum Computation – Add an additional text box called “Data”, and two output fields labeled Average and Maximum on the Student Survey Form. A user is required to enter ten comma separated numbers ranging from 1 through100 in the Data field. Create JavaScript function(s) that will calculate Average and Maximum of the numbers entered in the Data field. When the user is finished typing ten numbers and moves out of the Data field, the system should automatically compute the average and maximum of the ten numbers entered in the data field and populate Average and Maximum output fields. Make sure the Data field contains at least ten comma separated values between 1 and 100(inclusive), else print an error message.

### Form Validation Event Handling – Develop an event handler to handle onclick event when a user clicks the submit button on the Survey Form. The event handler should validate the following:
 o The Name text box should contain only Alphabets.
 o The Address text boxes should contain only appropriate numeric, alphabet or alphanumeric characters.
 o Make sure at least two checkboxes are checked.
 o Make sure a radio button option is selected.
 o The Email address format should be valid.
 Validate above requirements and alert the user with a consolidated error message if the user missed filling out anything on the form that did not meet above 
 criteria. Your validation warning errors should be implemented using jQuery UI modal window (as opposed to window’s dialog box).Only the fields with errors should 
 be cleared on alert and not all fields. In addition, ensure that there is a Reset button on the form and when clicked, the Reset button clears the form contents.
### Ajax, JSON, jQuery --Use Ajax and JSON to implement a portion of the Student Survey Form to provide a better user experience in filling out the survey form. More specifically,when a user enters a zipcode, populate the city and state fields automatically based on thezip entered, using Ajax. The following is the detailed specification of this requirement. Please add entries on the Student Survey Form to capture a student’s personal information that will allow the department to follow up with students. The personal information will include: Name, Address, Telephone Number, and Email (I think some of this information is already there on the Survey Form). To capture the Address, provide text fields to enter Street and Zipcode and provide place holders for City and State (e.g., use div or span for the City and State, but not text fields). While a user is filling out the form and as soon as he/she is finished typing the Zipcode, populate the corresponding City and State if the entered Zipcode was a valid one. For this assignment, you will need to get the list of valid Zipcodes and corresponding City and States from the server as a JSON file, as a result of an Ajax call. Compare the entered Zipcode value against the data (i.e., Zipcodes) returned from the server. If a match is found, then populate the City and State fields automatically by retrieving the corresponding city and state from the JSON file. Else, display “an invalid zip” message next to the zipcode field. To implement this assignment, you will need to develop a JavaScript function that could be used as an event handler. Register this event handler to handle the “onblur” event associated with the Zipcode element on the Survey Form. The event handler makes an Ajax call to the server to get a list of valid Zipcodes along with corresponding City andState. The Ajax calls returns a JSON representation of an array of objects where each object has the attributes zip, city, state. An example of a JSON object is 
 {"zip": 
  “20148”, 
   "city": 
    "Ashburn",
     "state"= "VA"
     }. 
### When the Ajax call has completed successfully, invoke a callback function that parses the returned JSON file using either JavaScript’s eval function or the JSON parser. Both can be used to convert the returned JSON file into a JavaScript object and then retrieve city and state values for a zipcode. The JSON files have .json extension and is stored on the server in the same folder as your application (e.g., HTML files).The following is a sample JSON file that could be used to implement the homework. You will need to save this information in a file with .json extension and store it on the server.
 {
 "zipcodes":[
 {
  "zip": "22312",
  "city": "Alexandria",
   "state":"VA"
 },
 {
  "zip": "22030",
  "city": "Fairfax",
  "state":"VA"
 },
 {
  "zip": "22301",
  "city": "Rockville",
  "state":"MD"
 },
 {
  "zip": "20148",
  "city": "Ashburn",
  "state":"VA"
 }
]}
### Add another link on your homepage that when clicked takes you to a page that represents a simplified version of https://volgenau.gmu.edu/ using jquery UI tabs. The idea is that when you when click a tab on the top of the page, it should swap the content of the page. You do not need to replicate entire Volgenau school’s site – just demonstrate the use of jquery UI tabs.

### In addition to CSS file that you have developed for your application, please make sure your application includes the CSS file that comes with the jQuery UI download. This will ensure that the jQuery/jQuery UI capabilities are rendered as expected. 
