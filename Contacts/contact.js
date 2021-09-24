// ABOUT:
//  JavaScript file for the Contact page
// DESCRIPTION:
//  Processes the user input into email Subject and Message Body, as well as form Alert message for required information

// ================== Section: Navigation Bar ===================================

//Vue object: Nav
var app = new Vue({
  el: "#nav",
  data: {
    home: "Home",
    flags: "Flags",
    countries: "Countries",
    search: "Search",
    contact: "Contact",
  },
});

// ================== Section: Footer ===================================

//Vue object: Footer Text
var app = new Vue({
  el: "#footer_text",
  data: {
    footerText: "TieuTech",
  },
});

// ================== Page Title ===================================

//Vue object: Page Title
var app = new Vue({
  el: "#page_title",
  data: {
    title: "Contact Us",
  },
});

// ================== Container: Page Banner ===================================

//Vue object: Page Banner Container
var app = new Vue({
  el: "#page_banner_container",
  data: {
    heading: "Contact Us",
  },
});

// ================== Container: Contact ===================================

//Vue object: Contact Container
var form = new Vue({
  el: "#contact_container",
  data: {
    // Headings
    enquiryType: "Type of Enquiry",
    sendAMessageHeading: "Send a Message",
    firstNameHeading: "First Name",
    lastNameHeading: "Last Name",
    subjectHeading: "Subject",
    emailHeading: "Email",
    messageHeading: "Message",
    findUsHeading: "Find Us",

    // Drop-down Options
    notSpecified: "Not Specified",
    countries: "Countries",
    flagsChallenge: "Flags Challenge",
    countriesChallenge: "Countries Challenge",
    opportunities: "Opportunities",
    getInTouch: "Get In Touch",
    feedback: "Feedback",

    // Contact Information
    developerLabel: "Developer: ",
    addressLabel: "Address: ",
    contactName: "Peter Tieu",
    contactAddress: "Melbourne, VIC 3000",

    // Inputs
    firstNameInput: "",
    lastNameInput: "",
    emailInput: "",
    subjectInput: "",
    messageInput: "",
  },

  methods: {
    resetInputs: function () {
      // Inputs
      this.firstNameInput = "";
      this.lastNameInput = "";
      this.emailInput = "";
      this.subjectInput = "";
      this.messageInput = "";
    },
  },
});

// ================== Manage Contact Form Submission ===================================

//Called in the "Contact" form
//Purposes:
//1: Validates if required fields of the form are filled in
//2: Populates email fields (e.g. Subject and Body)
function manageContactFormSubmission() {
  //Validate if required fields of the form are filled in
  validateForm();

  //Populate the Subject and Body of the email
  document.forms["contact_form"].action =
    "mailto:geotopium@gmail.com?subject=" +
    form.subjectInput +
    "&body=" +
    emailBody();
}

//Obtain email Body
function emailBody() {
  //Obtain the Enquiry Type selectedd
  var enquirtyType = document.getElementById("enquiry_type");
  var enquirtyTypeSelected =
    enquirtyType.options[enquirtyType.selectedIndex].text;

  //Compile all the relevant entered values from the Contact Us from from the object of all entered values
  var compiledEmailMessage =
    "===== SENDER INFORMATION =====" +
    "%0D%0A" +
    "NAME:" +
    "%0D%0A" +
    form.firstNameInput +
    " " +
    form.lastNameInput +
    "%0D%0A" +
    "%0D%0A" +
    "EMAIL ADDRESS:" +
    "%0D%0A" +
    form.emailInput +
    "%0D%0A" +
    "%0D%0A" +
    "ENQUIRY TYPE:" +
    "%0D%0A" +
    enquirtyTypeSelected +
    "%0D%0A" +
    "%0D%0A" +
    "===== MESSAGE =====" +
    "%0D%0A" +
    form.messageInput +
    "%0D%0A" +
    "%0D%0A";

  return compiledEmailMessage;
}

//Validate the Contact Us form
function validateForm() {
  //Define alert message header
  var alertMessage = "Unable to proceed:";

  //Append to alert message if applicable
  if (form.firstNameInput === "") {
    alertMessage += "\n" + "-> FIRST NAME is required";
  }

  if (form.lastNameInput === "") {
    alertMessage += "\n" + "-> LAST NAME is required";
  }

  if (form.emailInput === "") {
    alertMessage += "\n" + "-> EMAIL is required";
  }

  //Prevent form submission should a required field is not present
  if (
    form.firstNameInput === "" ||
    form.lastNameInput === "" ||
    form.emailInput === ""
  ) {
    alert(alertMessage);

    event.preventDefault();
    return false;
  }
}

/*============================== Add Responsiveness Features =============================*/

// When page is scrolled, nav bar sticks
window.onscroll = function () {
  navStick();
};

// Get the nav bar
var nav = document.getElementById("nav");

// Get the offset position of the nav bar
var sticky = nav.offsetTop;

// Add sticky to nav bar when user reaches scroll position. Remove sticky when user leaves scroll position
function navStick() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

//Add class to nav links that causes them to drop down from right
function resizeNav() {
  if (nav.className == "nav") {
    nav.className += " responsive";
  } else {
    nav.className = "nav";
  }
}
