// ABOUT:
//  JavaScript file for Countries Difficulty Levels page
// DESCRIPTION:
//  Manages the selection of the Difficulty Levels for the Countries Challenge

// ================== Page Title ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#page_title',
    data: {
        title: 'Countries Challenge Levels',
  }
});



// ================== Section: Navigation Bar ===================================

//Vue object: Nav
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



// ================== Container: Page Banner ===================================

//Vue object: Page Banner Container
var app = new Vue({
    el: '#page_banner_container',
    data: {
        heading: 'Countries Challenge Difficulty',
  }
});



// ================== Section: Footer ===================================

//Vue object: Footer Text
var app = new Vue({
    el: '#footer_text',
    data: {
        footerText: 'TieuTech',
  }
});



// ================== Container: Difficulty Level Button ====================================

// Custom Component: Difficulty Level
Vue.component("difficulty-level-component", {
  // Define props
  props: ['difficulty_level'],

  // Define template
  template:
    "<div>" +
      "<button v-on:click=\"load_countries_challenge_page(difficulty_level)\" style=\"width:50vw; height:8vh;\">" +
      "<p>" +
        "{{difficulty_level}}" +
      "</p>" +
      "</button>" +
    "</div>",

  // Define methods
  methods: {
    load_countries_challenge_page: function (difficulty_level) {

      //Play sound effect to indicate a Difficulty Level is selected
      let menu_selection_sound = new Audio('../Assets/Sound_Effects/menu_selection.wav');
      menu_selection_sound.play();

      // Save the name of the button to the local storage, to be retrieved in the Flags Challenge page
      localStorage.setItem("difficulty_level", difficulty_level);

      // Delay 420ms before opening Flags Challenge Page
      var x = setInterval(function () {

        // Open the Countries Challenge page
        window.location.href = "../Countries Challenge/countries_challenge.html";

      }, 420);
    }
  }
})

//Vue object: Difficulty Levels Container
var difficulty_level = new Vue({
  el: "#difficulty_levels_container",
  data: {
    difficulty_levels: [
      { level: 'Beginner' },
      { level: 'Novice' },
      { level: 'Medium' },
      { level: 'Advanced' },
      { level: 'Legendary' },
    ],
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