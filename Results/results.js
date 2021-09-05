/* >>>>>>>>>>>>>>>>> Obtain Data from Flags Challenge Difficulty Page <<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
var challengeType = localStorage.getItem("challengeType");
var scoreCounter = localStorage.getItem("scoreCounter");
var attemptsRemaining = localStorage.getItem("attemptsRemaining");
var questionCounter = localStorage.getItem("questionCounter");
var difficultyLevel = localStorage.getItem("difficultyLevel");

// Get the DOM element for the Flags and Coutnries Nav Items
var flagsChallengeNavItem = document.getElementById('flags_challenge_nav_item');
var countriesChallengeNavItem = document.getElementById('countries_challenge_nav_item');

// Set the colors of the Flags and Countries Nav Items to reflect the Challenge undertaken
if (challengeType === "flags_challenge") {
    flagsChallengeNavItem.style.color = "yellow"
    countriesChallengeNavItem.style.color = "white"
}
else if (challengeType === "countries_challenge") {
    countriesChallengeNavItem.style.color = "yellow"
    flagsChallengeNavItem.style.color = "white"
}

// ================== Page Title ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#page_title',
    data: {
        title: 'Results',
  }
});



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



// ================== Container: Page Banner ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#page_banner_container',
    data: {
        heading: 'Results',
  }
});

// ================== Container: Results ===================================

// attemptsRemaining = 3;

//Vue object: Page Title
var app = new Vue({
    el: '#results_container',
    data: {
        scoreSubheading: 'Score',
        attemptsRemainingSubheading: 'Attempts Remaining',
        questionsAnsweredSubheading: 'Questions Answered',
        difficultySubheading: 'Difficulty',
        scoreCounter: scoreCounter,
        questionCounter: questionCounter,
        difficultyLevel: difficultyLevel,
        attemptsRemaining: attemptsRemaining,
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