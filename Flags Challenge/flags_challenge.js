// ABOUT:
// This JavaScript file manages the operations and interactivities of the Flags Challenge page (flags_challenge.html)

// Retrieve the selected Difficulty Level from the Flags Difficulty Levels page
var difficultyLevel = localStorage.getItem("difficulty_level");

// ================== Page Title ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#page_title',
    data: {
        title: 'Flags Challenge',
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



// ================== Component: Side Panel ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#side_panel',
    data: {
        questionText: 'Question ',
        of20Text: ' of 20 ',
        timerText: 'Timer',
        secondsText: 'S',
        scoreSubheading: 'Score'

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



// ================== Difficulty Level ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#difficulty_level',
    data: {
        difficultyLevel: difficultyLevel,
        difficultyText: 'Difficulty:',
        beginnerText: 'Beginner',
        noviceText: 'Novice',
        mediumText: 'Medium',
        advancedText: 'Advanced',
        legendaryText: 'Legendary'
  }
});


/* >>>>>>>>>>>>>>>>> Refer to HTML elements <<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

var prompCountryName = document.getElementById('prompt_country_name'); //Prompt (Country Name)
var possibleAnswer1 = document.getElementById('possible_answer_1'); //Possible Answer #1 (Flag Image)
var possibleAnswer2 = document.getElementById('possible_answer_2'); //Possible Answer #2 (Flag Image)
var possibleAnswer3 = document.getElementById('possible_answer_3'); //Possible Answer #3 (Flag Image)
var possibleAnswer4 = document.getElementById('possible_answer_4'); //Possible Answer #4 (Flag Image)

var time_remaining = document.getElementById('time_remaining');     // Time remaining
var questionNumber = document.getElementById('question_number');    //Question number
var score = document.getElementById('score');                       // Score
var heartIconLeft = document.getElementById('heart_icon_left');     //Heart Icon #1 (Left)
var heartIconMiddle = document.getElementById('heart_icon_middle'); //Heart Icon #2 (middle)
var heartIconRight = document.getElementById('heart_icon_right');   //Heart Icon #3 (right)


/* >>>>>>>>>>>>>>>>> Declare and assign Country Name and Flag Image variables <<<<<<<<<<<< */

        // Array containing directory locations of all Flag Images (for the Possible Answers)
        var flagImagesDirectory = [];

        flagImagesDirectory.push('../Assets/Flag_Images/Afghanistan.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Albania.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Algeria.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Andorra.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Angola.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Antigua and Barbuda.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Argentina.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Armenia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Australia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Austria.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Azerbaijan.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Bahamas.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Bahrain.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Bangladesh.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Barbados.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Belarus.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Belgium.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Belize.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Benin.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Bhutan.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Bolivia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Bosnia and Herzegovina.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Botswana.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Brazil.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Brunei.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Bulgaria.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Burkina Faso.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Burundi.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Cambodia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Cameroon.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Canada.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Cape Verde.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Central African Republic.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Chad.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Chile.png');
        flagImagesDirectory.push('../Assets/Flag_Images/China.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Colombia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Comoros.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Cook Islands.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Costa Rica.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Croatia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Cuba.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Cyprus.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Czechia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Denmark.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Djibouti.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Dominica.png');
        flagImagesDirectory.push('../Assets/Flag_Images/DR Congo.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Ecuador.png');
        flagImagesDirectory.push('../Assets/Flag_Images/El Salvador.png');
        flagImagesDirectory.push('../Assets/Flag_Images/England.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Eritrea.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Estonia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Ethiopia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Fiji.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Finland.png');
        flagImagesDirectory.push('../Assets/Flag_Images/France.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Gabon.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Gambia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Georgia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Germany.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Ghana.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Greece.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Grenada.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Guatemala.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Guinea.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Guinea-Bissau.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Guyana.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Haiti.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Honduras.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Hong Kong.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Hungary.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Iceland.png');
        flagImagesDirectory.push('../Assets/Flag_Images/India.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Indonesia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Iran.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Iraq.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Ireland.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Israel.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Italy.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Ivory Coast.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Jamaica.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Japan.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Jordan.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Kazakhstan.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Kenya.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Kiribati.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Kuwait.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Kyrgyzstan.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Laos.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Latvia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Lebanon.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Lesotho.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Liberia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Libya.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Liechtenstein.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Lithuania.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Luxembourg.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Macedonia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Madagascar.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Malawi.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Malaysia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Maldives.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Mali.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Malta.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Marshall Islands.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Mauritania.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Mauritius.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Mexico.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Micronesia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Moldova.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Monaco.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Mongolia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Montenegro.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Morocco.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Mozambique.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Myanmar.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Namibia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Nauru.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Nepal.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Netherlands.png');
        flagImagesDirectory.push('../Assets/Flag_Images/New Zealand.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Nicaragua.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Niger.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Nigeria.png');
        flagImagesDirectory.push('../Assets/Flag_Images/North Korea.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Norway.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Oman.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Pakistan.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Palau.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Palestine.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Panama.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Papua New Guinea.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Paraguay.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Peru.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Philippines.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Poland.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Portugal.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Puerto Rico.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Qatar.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Republic of the Congo.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Romania.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Russia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Rwanda.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Saint Kitts and Nevis.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Saint Lucia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Samoa.png');
        flagImagesDirectory.push('../Assets/Flag_Images/San Marino.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Saudi Arabia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Scotland.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Senegal.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Serbia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Seychelles.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Sierra Leone.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Singapore.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Slovakia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Slovenia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Solomon Islands.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Somalia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/South Africa.png');
        flagImagesDirectory.push('../Assets/Flag_Images/South Korea.png');
        flagImagesDirectory.push('../Assets/Flag_Images/South Sudan.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Spain.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Sri Lanka.png');
        flagImagesDirectory.push('../Assets/Flag_Images/St Vincent and the Grenadines.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Sudan.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Suriname.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Swaziland.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Sweden.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Switzerland.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Syria.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Taiwan.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Tajikistan.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Tanzania.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Thailand.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Timor-Leste.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Togo.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Tonga.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Trinidad and Tobago.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Tunisia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Turkey.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Turkmenistan.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Tuvalu.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Uganda.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Ukraine.png');
        flagImagesDirectory.push('../Assets/Flag_Images/United Arab Emirates.png');
        flagImagesDirectory.push('../Assets/Flag_Images/United Kingdom.png');
        flagImagesDirectory.push('../Assets/Flag_Images/United States.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Uruguay.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Uzbekistan.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Vanuatu.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Vatican City.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Venezuela.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Vietnam.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Wales.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Yemen.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Zambia.png');
        flagImagesDirectory.push('../Assets/Flag_Images/Zimbabwe.png');


// Determine the set of Country Name prompts to be used, based on the selected Difficulty Level
switch (difficultyLevel) {

    // Difficulty Level: Beginner
    case ("Beginner"):
        var countryNames = ['Algeria', 'Argentina', 'Australia', 'Austria', 'Azerbaijan', 'Belgium', 'Brazil', 'Canada', 'China', 'Colombia', 'Cuba', 'Czechia', 'Denmark', 'Egypt', 'England', 'France', 'Germany', 'India', 'Iran', 'Iraq', 'Italy', 'Japan', 'Mexico', 'Netherlands', 'Norway', 'Portugal', 'Russia', 'Saudi Arabia', 'South Africa', 'South Korea', 'Spain', 'Sweden', 'Switzerland', 'Syria', 'Turkey', 'United Arab Emirates', 'United Kingdom', 'United States'];
        break

    // Difficulty Level: Novice
    case ("Novice"):
        var countryNames = ['Bulgaria', 'Chile', 'Croatia', 'Finland', 'Georgia', 'Greece', 'Hungary', 'Iceland', 'Indonesia', 'Ireland', 'Jamaica', 'Kazakhstan', 'Kenya', 'Luxembourg', 'Libya', 'Lithuania', 'Macedonia', 'Madagascar', 'Malaysia', 'Maldives', 'Monaco', 'Morocco', 'Nigeria', 'North Korea', 'Pakistan', 'Peru', 'Poland', 'Romania', 'Scotland', 'Singapore', 'Slovakia', 'Slovenia', 'Thailand', 'Tunisia', 'Turkmenistan', 'Ukraine', 'Uruguay', 'Vietnam'];
        break

    // Difficulty Level: Medium
    case ("Medium"):
        var countryNames = ['Albania', 'Bahamas', 'Bangladesh', 'Belarus', 'Bolivia', 'Bosnia and Herzegovina', 'Cambodia', 'Cameroon', 'Central African Republic', 'Dominica', 'Ecuador', 'El Salvador', 'Estonia', 'Ethiopia', 'Fiji', 'Guinea', 'Haiti', 'Honduras', 'Hong Kong', 'Ivory Coast', 'Jordan', 'Kuwait', 'Mexico', 'Netherlands', 'Norway', 'Portugal', 'Russia', 'Saudi Arabia', 'South Africa', 'Kyrgyzstan', 'Latvia', 'Lebanon', 'Liberia', 'Liechtenstein', 'Malta', 'Moldova', 'Mongolia', 'Mozambique', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Philippines', 'Qatar', 'Senegal', 'Serbia', 'Somalia', 'South Sudan', 'Sri Lanka', 'Sudan', 'Taiwan', 'Tajikistan', 'Tanzania', 'Uzbekistan', 'Vatican City', 'Wales', 'Yemen', 'Zambia'];
        break

    // Difficulty Level: Advanced
    case ("Advanced"):
        var countryNames = ['Andorra', 'Antigua and Barbuda', 'Bahrain', 'Barbados', 'Belize', 'Benin', 'Bhutan', 'Botswana', 'Brunei', 'Burkina Faso', 'Burundi', 'Cape Verde', 'Chad', 'Comoros', 'Cook Islands', 'Cyprus', 'Djibouti', 'Dominica', 'Eritrea', 'Gabon', 'Gambia', 'Ghana', 'Grenada', 'Guatemala', 'Guinea-Bissau', 'Guyana', 'Kiribati', 'Laos', 'Lesotho', 'Malawi', 'Mali', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Micronesia', 'Montenegro', 'Myanmar', 'Namibia', 'Nauru', 'Nicaragua', 'Niger', 'Palau', 'Rwanda', 'Saint Lucia', 'Samoa', 'San Marino', 'Seychelles', 'Sierra Leone', 'Solomon Islands', 'Saintt Kitts and Nevis', 'Suriname', 'Tonga', 'Tuvalu', 'Uganda', 'Vanuatu', 'Zimbabwe'];
        break

    // Difficulty Level: Legendary (has every option)
    default:
        var countryNames = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Denmark', 'Djibouti', 'Dominica', 'DR Congo', 'Ecuador', 'Egypt', 'El Salvador', 'England', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Iceland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Norway', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
        'Puerto Rico', 'Qatar', 'Republic of the Congo', 'Romania', 'Russia', 'Rwanda', 'Saintt Kitts and Nevis', 'Saint Lucia', 'Samoa', 'San Marino', 'Saudi Arabia', 'Scotland', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
        'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'St Vincent and the Grenadines', 'Sudan', 'Suriname', 'Swaziland', 'Switzerland', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan',
        'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Wales', 'Yemen', 'Zambia', 'Zimbabwe'
        ];
}



/* >>>>>>>>>>>> Set the Dimensions of the Possible Answers (each Flag Image)... <<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>>>>> ...based on the screen width <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

// Determine the width of the Possible Answers for screen sizes greater than 620px
const PAW_GT_620PX = 0.15;

// Set Height of Possible Answers for screen widths greater than 620px
possibleAnswer1.style.height = Math.round(window.innerHeight * PAW_GT_620PX) + 'px'
possibleAnswer2.style.height = Math.round(window.innerHeight * PAW_GT_620PX) + 'px'
possibleAnswer3.style.height = Math.round(window.innerHeight * PAW_GT_620PX) + 'px'
possibleAnswer4.style.height = Math.round(window.innerHeight * PAW_GT_620PX) + 'px'

// Set Width of Possible Answers for screen widths greater than 620px
possibleAnswer1.style.width = 1.7 * Math.round(window.innerHeight * PAW_GT_620PX) + 'px'
possibleAnswer2.style.width = 1.7 * Math.round(window.innerHeight * PAW_GT_620PX) + 'px'
possibleAnswer3.style.width = 1.7 * Math.round(window.innerHeight * PAW_GT_620PX) + 'px'
possibleAnswer4.style.width = 1.7 * Math.round(window.innerHeight * PAW_GT_620PX) + 'px'


// Define function to resize the Possible Answers based on the screen size
function resizePossibleAnswers() {

    // Set Height of Possible Answers for screen widths greater than 620px
    possibleAnswer1.style.height = Math.round(window.innerHeight * 0.15) + 'px'
    possibleAnswer2.style.height = Math.round(window.innerHeight * 0.15) + 'px'
    possibleAnswer3.style.height = Math.round(window.innerHeight * 0.15) + 'px'
    possibleAnswer4.style.height = Math.round(window.innerHeight * 0.15) + 'px'

    // Set Height of Possible Answers for screen widths greater than 620px
    possibleAnswer1.style.width = 1.7 * Math.round(window.innerHeight * 0.15) + 'px'
    possibleAnswer2.style.width = 1.7 * Math.round(window.innerHeight * 0.15) + 'px'
    possibleAnswer3.style.width = 1.7 * Math.round(window.innerHeight * 0.15) + 'px'
    possibleAnswer4.style.width = 1.7 * Math.round(window.innerHeight * 0.15) + 'px'

    // Set the dimensions of the Possible Answers for screen widths lower than 1000px
    function max1000px(x) {
        if (x.matches) { // If media query matches
            possibleAnswer1.style.height = Math.round(window.innerHeight * 0.12) + 'px'
            possibleAnswer2.style.height = Math.round(window.innerHeight * 0.11) + 'px'
            possibleAnswer3.style.height = Math.round(window.innerHeight * 0.11) + 'px'
            possibleAnswer4.style.height = Math.round(window.innerHeight * 0.11) + 'px'

            possibleAnswer1.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
            possibleAnswer2.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
            possibleAnswer3.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
            possibleAnswer4.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
        } else {

        }
    }

    var x = window.matchMedia("screen and (max-width: 1000px)")
    max1000px(x) // Call listener function at run time
    x.addListener(max1000px) // Attach listener function on state changes

    function myFunction(x) {
        if (x.matches) { // If media query matches
            possibleAnswer1.style.height = Math.round(window.innerHeight * 0.12) + 'px'
            possibleAnswer2.style.height = Math.round(window.innerHeight * 0.11) + 'px'
            possibleAnswer3.style.height = Math.round(window.innerHeight * 0.11) + 'px'
            possibleAnswer4.style.height = Math.round(window.innerHeight * 0.11) + 'px'

            possibleAnswer1.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
            possibleAnswer2.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
            possibleAnswer3.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
            possibleAnswer4.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
        }
    }

    var x = window.matchMedia("screen and (max-width: 620px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
}

//Listen for changes in the screen size to change the sizes of the Possible Answers
window.addEventListener("resize", resizePossibleAnswers);

// Set the dimensions of the Possible Answers for screen widths lower than 1000px
function max1000px(x) {
    if (x.matches) { // If media query matches
        possibleAnswer1.style.height = Math.round(window.innerHeight * 0.12) + 'px'
        possibleAnswer2.style.height = Math.round(window.innerHeight * 0.11) + 'px'
        possibleAnswer3.style.height = Math.round(window.innerHeight * 0.11) + 'px'
        possibleAnswer4.style.height = Math.round(window.innerHeight * 0.11) + 'px'

        possibleAnswer1.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
        possibleAnswer2.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
        possibleAnswer3.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
        possibleAnswer4.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
    } else {

    }
}

var x = window.matchMedia("screen and (max-width: 1000px)")
max1000px(x) // Call listener function at run time
x.addListener(max1000px) // Attach listener function on state changes


function myFunction(x) {
    if (x.matches) { // If media query matches
        possibleAnswer1.style.height = Math.round(window.innerHeight * 0.12) + 'px'
        possibleAnswer2.style.height = Math.round(window.innerHeight * 0.11) + 'px'
        possibleAnswer3.style.height = Math.round(window.innerHeight * 0.11) + 'px'
        possibleAnswer4.style.height = Math.round(window.innerHeight * 0.11) + 'px'

        possibleAnswer1.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
        possibleAnswer2.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
        possibleAnswer3.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
        possibleAnswer4.style.width = 1.7 * Math.round(window.innerHeight * 0.11) + 'px'
    } else {

    }
}

var x = window.matchMedia("screen and (max-width: 620px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



/* >>>>>>>>>>>>>>>>> Declare and assign operations variables <<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

const MAX_TIME_REMAINING = 15;          // Countdown time per question (in seconds)
const TOTAL_NUM_QUESTIONS = 5;         // Total number of questions in the Challenge
var isPossibleAnswerSelected = false;   // Flag to signal whether a Possible Answer has been selected
var randomPromptCountryName;            // Country Name of the Prompt
var questionCounter = 1;                // Question Number
var scoreCounter = 0;                   //Score
var attemptsRemaining = 3;              // Number of attemps remaining


/* >>>>>>>>>>>>>>>>> Set up the Prompt <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

// Obtain Country Prompt (By random)
function getCountryPrompt() {
    // Obtain random number ranging from 1 to the size of the "Country names" array
    randomPromptCountryName = countryNames[Math.floor(Math.random() * countryNames.length)];

    // Display the name of the country in the Prompt
    prompCountryName.innerHTML = randomPromptCountryName;
}

// Call to obtain the Country Prompt (by random)
getCountryPrompt();



/* >>>>>>>>>>>>>>>>> Set up the Possible Answers <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

// Obtain the Possible Answers (by random)
function getRandomPossibleAnswers(countryName, possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4) {

    // Position of the correct answer
    var positionOfCorrectAnswer;

    // Array of the four Possible Answers
    let arrayOfPossibleAnswers = [possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4]

    // Obtain random number (0 to 3) to repesent the position of the correct number
    // (i.e. 0 corresponds to position #1, 3 corresponds to position #4)
    positionOfCorrectAnswer = Math.floor(Math.random() * 4);

    //Set the Flag Image of the correct answer at a random location
    arrayOfPossibleAnswers[positionOfCorrectAnswer].src = '../Assets/Flag_Images/' + countryName + '.png';

    //Set the Flag image of the other (incorrect) possible answers at the rest of the locations
    for (let i = 0; i < arrayOfPossibleAnswers.length; i++){

        //For all other positions than the position of the correct answer
        if (i != positionOfCorrectAnswer) {

            //Get a random flag name from the local directory
            var randomPossibleAnswer = flagImagesDirectory[Math.floor(Math.random() * flagImagesDirectory.length)];

            //Set the image source of the possible answers element to this random flag
            arrayOfPossibleAnswers[i].src = randomPossibleAnswer;
        }
    }
}

// Call to obtain the Possible Answers (by random)
getRandomPossibleAnswers(randomPromptCountryName, possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4)



/* >>>>>>>>>>>>>>>>> Set up the Side Panel <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

//====================== Set Up the Timer ======================

// Display the maximum total time remaining
time_remaining.innerHTML = MAX_TIME_REMAINING;

// Set the date being counted down to
var countDownDate = new Date().getTime() + MAX_TIME_REMAINING * 1000;

// // Update the count down every 1 second
updateTimer();


//====================== Listener for the Possible Answers ======================

// Display the Score
score.innerHTML = scoreCounter;

// Display the Question Number
questionNumber.innerHTML = questionCounter;



// ----------- Update Question Number -------------------------

function updateQuestionNumber() {
    questionCounter++; //Increment the Question Number
    questionNumber.innerHTML = questionCounter; //Display the Question Number
}

//Get the Country Name of the Selected Possible Answer
function getCountryNameOfSelectedAnswer(possibleAnswerSrc) {

    //The Country Name of the Selected Possible Answer is between "/" and ".png" of the string of the directory location of associated the Flag Image
    var possibleAnswer = possibleAnswerSrc.substring(possibleAnswerSrc.lastIndexOf("/") + 1, possibleAnswerSrc.lastIndexOf(".png"));

    // Replace any "%20" in the string with a space
    possibleAnswer = decodeURI(possibleAnswer);

    return possibleAnswer; // Return the Possible Answer
}



// ----------- Update Score ------------------------------------

function updateScore(possibleAnswerSrc) {

    // Get the Country Name of the Selected Possible Answer
    var flagNameOfSelectedAnswer = getCountryNameOfSelectedAnswer(possibleAnswerSrc);

    // If the Country Name of the Selected Possible Answer is the same as that of the Promp
    if (flagNameOfSelectedAnswer == randomPromptCountryName) {
        scoreCounter++; // Increment the Score
    }

    // Display the Score
    score.innerHTML = scoreCounter;

}



// ----------- Update Timer -----------------------------------

function updateTimer() {

    // Re-initialise the countDownDate to NaN
    countDownDate = NaN;

    // Display the maximum total time remaining
    time_remaining.innerHTML = MAX_TIME_REMAINING;

    // Set the date we're counting down to
    countDownDate = new Date().getTime() + MAX_TIME_REMAINING * 1000;
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Calculate time for seconds left
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="time_remaining"
        time_remaining.innerHTML = seconds;

        // If the countdown reaches zero
        if (distance <= 0) {
            clearInterval(x); // Execute the timer

            time_remaining.innerHTML = "0"; // Display the time remaining as "0"
            countDownDate = 0; // Re-initialise "countDownDate"
            now = 0; // Re-initialise "now"


            updateTimer(); // Reset the timer
            startNewQuestion(); // Start a new question
            updateQuestionNumber(); // Increase the question number
            decrementHeart(); // Reduce a heart
            loadResultsPage();

            //Play sound effect to indicate no answer was selected
            let no_answer_selected_sound = new Audio('../Assets/Sound_Effects/incorrect_answer.wav');no_answer_selected_sound.play();
        }

        //If a Possible Answer is selected
        if (isPossibleAnswerSelected == true) {

            // Display "- -" in the countdown timer
            time_remaining.innerHTML = "--";
        }
    }, 1000);
}



// ----------- Update Heart Icons (Attempts Remaining) ---------

// Update the heart icons based on the Possible Answer selected
function updateHeartIcons(selectedAnswer) {
    var flagNameOfSelectedAnswer = getCountryNameOfSelectedAnswer(selectedAnswer);

    // If the Country Name of the Selected Possible Answer is NOT the same as that of the Prompt
    if (flagNameOfSelectedAnswer != randomPromptCountryName) {
        attemptsRemaining--; //Decrement the Attemps Remaining

        // Display the heart icons according to the decreased number of Attempts Remaining
        if (attemptsRemaining == 2) {
            heartIconRight.src = '../Assets/heart_empty.png'
        }
        else if (attemptsRemaining == 1) {
            heartIconMiddle.src = '../Assets/heart_empty.png'
        }
        else if (attemptsRemaining == 0) {
            heartIconLeft.src = '../Assets/heart_empty.png'
        }
    }
}

// 'Remove' a heart by making the righmost heart icon an empty heart
function decrementHeart() {
    attemptsRemaining--;

    // Display the heart icons according to the decreased number of Attempts Remaining
    if (attemptsRemaining == 2) {
        heartIconRight.src = '../Assets/heart_empty.png'
    }
    else if (attemptsRemaining == 1) {
        heartIconMiddle.src = '../Assets/heart_empty.png'
    }
    else if (attemptsRemaining == 0) {
        heartIconLeft.src = '../Assets/heart_empty.png'
    }
}



// ----------- Play Sound Effects ------------------------------

// Play the Sound Effects according to whether the Selected Possible Answer is correct or incorrect
function playSoundEffect(selectedAnswer) {

    // Get the Country Name of the Selected Possible Answer
    var flagNameOfSelectedAnswer = getCountryNameOfSelectedAnswer(selectedAnswer);

    // If the Country Name of the Selected Possible Answer is not the same as that of the Prompt
    if (flagNameOfSelectedAnswer != randomPromptCountryName) {

        //Play sound effect to indicate the incorrect Possible Answer was selected
        let incorrect_possible_answer_selected_sound = new Audio('../Assets/Sound_Effects/incorrect_answer.wav');
        incorrect_possible_answer_selected_sound.play();
    }
    else {
        //Play sound effect to indicate the correct Possible Answer was selected
        let correct_possible_answer_selected_sound = new Audio('../Assets/Sound_Effects/correct_answer.wav');
        correct_possible_answer_selected_sound.play();
    }
}


// ----------- Start a New Question ----------------------------

// Start a new Question
function startNewQuestion() {
    // Get Country Name Prompt by random
    getCountryPrompt();

    // Get Flag Image Possible Answers by random
    getRandomPossibleAnswers(randomPromptCountryName, possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4);
}


// ----------- Load Results Page (if applicable) ----------------------------

// Load Results page (if all questions are answered, or if all Hearts Remaining reach zero)
function loadResultsPage() {
    if (attemptsRemaining <= 0 || questionCounter == TOTAL_NUM_QUESTIONS) {
        //Send data of the Hearts Remaining and the Score
        localStorage.setItem("scoreCounter", scoreCounter);
        localStorage.setItem("attemptsRemaining", attemptsRemaining);
        localStorage.setItem("questionCounter", questionCounter);
        localStorage.setItem("difficultyLevel", difficultyLevel);
        window.location.href = "../Results/results.html";
    }
}


// ----------- Set up Event Listener for Possible Answer --------

// onClick Listener for a Possible Answer (i.e. Flag Image)
function possibleAnswerListener() {

    // Declare the variable "selectedAnswer"
    // then assign it to the HTML element of the selected Possible Answer
    var selectedAnswer = this;

    // Switch the flag that indicates if a Possible Answer is selected to "true"
    isPossibleAnswerSelected = true;



    // ---- Modify all the Possible Answers based on the Selected Answer  --------------------

    // Obtain the Country Names of all the Possible Answers
    var flagNameOfPossibleAnswer1 = getCountryNameOfSelectedAnswer(possibleAnswer1.src);
    var flagNameOfPossibleAnswer2 = getCountryNameOfSelectedAnswer(possibleAnswer2.src);
    var flagNameOfPossibleAnswer3 = getCountryNameOfSelectedAnswer(possibleAnswer3.src);
    var flagNameOfPossibleAnswer4 = getCountryNameOfSelectedAnswer(possibleAnswer4.src);

    // If the Country Name of the FIRST Possible Answer is not the same as that of the Prompt
    if (flagNameOfPossibleAnswer1 != randomPromptCountryName) {
        possibleAnswer1.style.opacity = 0.1 //
    }
    else {
        possibleAnswer1.style.opacity = 1
        possibleAnswer1.style.backgroundColor = "green";
    }

    // If the Country Name of the SECOND Possible Answer is not the same as that of the Prompt
    if (flagNameOfPossibleAnswer2 != randomPromptCountryName) {
        possibleAnswer2.style.opacity = 0.1
    }
    else {
        possibleAnswer2.style.opacity = 1
        possibleAnswer2.style.backgroundColor = "green";
    }

    // If the Country Name of the THIRD Possible Answer is not the same as that of the Prompt
    if (flagNameOfPossibleAnswer3 != randomPromptCountryName) {
        possibleAnswer3.style.opacity = 0.1
    }
    else {
        possibleAnswer3.style.opacity = 1
        possibleAnswer3.style.backgroundColor = "green";
    }

    // If the Country Name of the FOURTH Possible Answer is not the same as that of the Prompt
    if (flagNameOfPossibleAnswer4 != randomPromptCountryName) {
        possibleAnswer4.style.opacity = 0.1
    }
    else {
        possibleAnswer4.style.opacity = 1
        possibleAnswer4.style.backgroundColor = "green";
    }


    // ---- Modify the Selected Possible Answer and Correct Answer  --------------------------

    // Configure selected Possible Answer
    var flagNameOfSelectedAnswer = getCountryNameOfSelectedAnswer(selectedAnswer.src);

    // If Selected Possible Answer is INCORRECT
    if (flagNameOfSelectedAnswer != randomPromptCountryName) {
        selectedAnswer.style.backgroundColor = "red";
        selectedAnswer.style.opacity = 0.3;
    }
    // If Selected Possible Answer is CORRECT
    else {
        selectedAnswer.style.backgroundColor = "";
    }


    // ---- Update all Side Panel parameters  ------------------------------------------------

    updateScore(selectedAnswer.src);        // Update the Score
    updateHeartIcons(selectedAnswer.src);   // Update the Hearts Remaining icons
    playSoundEffect(selectedAnswer.src);    // Play the Sound Effect (i.e., "success" or "fail")


    // ---- Wait 2 seconds before setting up the next question  ------------------------------

    setTimeout(function () {

        // Switch the flag that indicates if a Possible Answer is selected to "false"
        isPossibleAnswerSelected = false;


        loadResultsPage();      //Load the Results Page
        updateQuestionNumber(); // Increase the Question Number
        updateTimer();          // Reset the Timer
        startNewQuestion();     // Start a new question

        possibleAnswer1.style.opacity = ""  // Reset the opacity of Possible Answer #1
        possibleAnswer2.style.opacity = ""  // Reset the opacity of Possible Answer #2
        possibleAnswer3.style.opacity = ""  // Reset the opacity of Possible Answer #3
        possibleAnswer4.style.opacity = ""  // Reset the opacity of Possible Answer #4

        possibleAnswer1.style.backgroundColor = "" // Reset the background of Possible Answer #1
        possibleAnswer2.style.backgroundColor = "" // Reset the background of Possible Answer #1
        possibleAnswer3.style.backgroundColor = "" // Reset the background of Possible Answer #1
        possibleAnswer4.style.backgroundColor = "" // Reset the background of Possible Answer #1
    }, 2000);
}

// mouseOver Listener for a Possible Answer (i.e. Flag Image)
function possibleAnswerOnMouseOverListener() {
    //Play sound effect to indicate a Possible Answer is hovered over
      let possilbe_answer_hover_sound = new Audio('../Assets/Sound_Effects/possible_answer_hover.wav');
      possilbe_answer_hover_sound.play();
}



// ---- Add onClick listeners to each of the Possible Answers (Flag Images)  -----------------
possibleAnswer1.addEventListener('click', possibleAnswerListener);  //Possible Answer 1
possibleAnswer2.addEventListener('click', possibleAnswerListener);  //Possible Answer 2
possibleAnswer3.addEventListener('click', possibleAnswerListener);  //Possible Answer 3
possibleAnswer4.addEventListener('click', possibleAnswerListener);  //Possible Answer 4


// ---- Add onMouseover listeners to each of the Possible Answers (Flag Images)  -----------------
possibleAnswer1.addEventListener("mouseover", possibleAnswerOnMouseOverListener);  //Possible Answer 1
possibleAnswer2.addEventListener("mouseover", possibleAnswerOnMouseOverListener);  //Possible Answer 2
possibleAnswer3.addEventListener("mouseover", possibleAnswerOnMouseOverListener);  //Possible Answer 3
possibleAnswer4.addEventListener("mouseover", possibleAnswerOnMouseOverListener);  //Possible Answer 4




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