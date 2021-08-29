// ================== Section: Navigation Bar ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#nav',
    data: {
        home: 'Home',
        flags: 'Flags',
        countries: 'Countries',
        search: 'Search',
        contact: 'Contact'
  }
});


// ================== Section: Footer ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#footer_text',
    data: {
        footerText: 'TieuTech',
  }
});


// ================== Page Title ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#page_title',
    data: {
        title: 'Contact Us',
  }
});


// ================== Container: Page Banner ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#page_banner_container',
    data: {
        heading: 'Contact Us',
  }
});


// ================== Container: Contact ===================================

//Vue object: Contact
var app = new Vue({
    el: '#contact_container',
    data: {
        sendAMessageHeading: 'Send a Message',
        nameHeading: 'Name',
        emailHeading: 'Email',
        enquiryType: 'Enquiry Type',
        messageHeading: 'Message',
        findUsHeading: 'Find Us',
        notSpecified: 'Not Specified',
        countries: 'Countries',
        flagsChallenge: 'Flags Challenge',
        countriesChallenge: 'Countries Challenge',
        opportunities: 'Opportunities',
        getInTouch: 'Get In Touch',
        feedback: 'Feedback'
  }
});


/*============================== Add Responsiveness Features =============================*/

// When page is scrolled, nav bar sticks
window.onscroll = function () { navStick() };

// Get the nav bar
var nav = document.getElementById("nav");

// Get the offset position of the nav bar
var sticky = nav.offsetTop;

// Add sticky to nav bar when user reaches scroll position. Remove sticky when user leaves scroll position
function navStick() {
if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
}
else {
    nav.classList.remove("sticky");
    }
}

//Add class to nav links that causes them to drop down from right
function resizeNav() {
    if (nav.className == "nav") {
        nav.className += " responsive";
    }
    else {
        nav.className = "nav";
    }
}