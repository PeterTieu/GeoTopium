// ================== Page Title ===================================

//Vue object: Page Title
var app = new Vue({
    el: '#page_title',
    data: {
        title: 'GeoTopium',
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
        heading: 'Flags of the World',
  }
});



// ================== Container: Flag Image-Country Name ====================================

// Custom Component: Flag Image-Country Name Pair
Vue.component("country-component", {
  // Declare props
  props: ['flag_image', 'country_name'],

  // Define template
  template:
    "<span v-on:click=\"greet(country_name)\">" +
    "<img v-bind:src='flag_image' style=\"width:200px; height:130px;\">" +
    "<h2>{{country_name}}</h2>" +
    "</span>",
})

//Vue object: Countries Container
var countries_container = new Vue({
	el: "#countries_container",
    data: {
      // Array containing the following properties of each Country:
        // 1: Country Name (name)
        // 2: Flag Image image source (image_src)
      countries: [
          { name: 'Afghanistan', image_src: '../Assets/Flag_Images/Afghanistan.png' },
          { name: 'Albania', image_src: "../Assets/Flag_Images/Albania.png" },
          { name: 'Algeria', image_src: "../Assets/Flag_Images/Algeria.png" },
          { name: 'Andorra', image_src: "../Assets/Flag_Images/Andorra.png" },
          { name: 'Angola', image_src: "../Assets/Flag_Images/Angola.png" },
          { name: 'Antigua and Barbuda', image_src: "../Assets/Flag_Images/Antigua and Barbuda.png" },
          { name: 'Argentina', image_src: "../Assets/Flag_Images/Argentina.png" },
          { name: 'Armenia', image_src: "../Assets/Flag_Images/Armenia.png" },
          { name: 'Australia', image_src: "../Assets/Flag_Images/Australia.png" },
          { name: 'Austria', image_src: "../Assets/Flag_Images/Austria.png" },
          { name: 'Azerbaijan', image_src: "../Assets/Flag_Images/Azerbaijan.png" },
          { name: 'Bahamas', image_src: "../Assets/Flag_Images/Bahamas.png" },
          { name: 'Bahrain', image_src: "../Assets/Flag_Images/Bahrain.png" },
          { name: 'Bangladesh', image_src: '../Assets/Flag_Images/Bangladesh.png' },
          { name: 'Barbados', image_src: "../Assets/Flag_Images/Barbados.png" },
          { name: 'Belarus', image_src: "../Assets/Flag_Images/Belarus.png" },
          { name: 'Belgium', image_src: "../Assets/Flag_Images/Belgium.png" },
          { name: 'Belize', image_src: "../Assets/Flag_Images/Belize.png" },
          { name: 'Benin', image_src: "../Assets/Flag_Images/Benin.png" },
          { name: 'Bhutan', image_src: "../Assets/Flag_Images/Bhutan.png" },
          { name: 'Bolivia', image_src: "../Assets/Flag_Images/Bolivia.png" },
          { name: 'Bosnia and Herzegovina', image_src: "../Assets/Flag_Images/Bosnia and Herzegovina.png" },
          { name: 'Botswana', image_src: "../Assets/Flag_Images/Botswana.png" },
          { name: 'Brazil', image_src: "../Assets/Flag_Images/Brazil.png" },
          { name: 'Brunei', image_src: "../Assets/Flag_Images/Brunei.png" },
          { name: 'Bulgaria', image_src: "../Assets/Flag_Images/Bulgaria.png" },
          { name: 'Burkina Faso', image_src: '../Assets/Flag_Images/Burkina Faso.png' },
          { name: 'Burundi', image_src: "../Assets/Flag_Images/Burundi.png" },
          { name: 'Cambodia', image_src: "../Assets/Flag_Images/Cambodia.png" },
          { name: 'Cameroon', image_src: "../Assets/Flag_Images/Cameroon.png" },
          { name: 'Canada', image_src: '../Assets/Flag_Images/Canada.png' },
          { name: 'Cape Verde', image_src: "../Assets/Flag_Images/Cape Verde.png" },
          { name: 'Central African Republic', image_src: "../Assets/Flag_Images/Central African Republic.png" },
          { name: 'Chad', image_src: "../Assets/Flag_Images/Chad.png" },
          { name: 'Chile', image_src: '../Assets/Flag_Images/Chile.png' },
          { name: 'China', image_src: "../Assets/Flag_Images/China.png" },
          { name: 'Colombia', image_src: "../Assets/Flag_Images/Colombia.png" },
          { name: 'Comoros', image_src: "../Assets/Flag_Images/Comoros.png" },
          { name: 'Cook Islands', image_src: '../Assets/Flag_Images/Cook Islands.png' },
          { name: 'Costa Rica', image_src: "../Assets/Flag_Images/Costa Rica.png" },
          { name: 'Croatia', image_src: "../Assets/Flag_Images/Croatia.png" },
          { name: 'Cuba', image_src: "../Assets/Flag_Images/Cuba.png" },
          { name: 'Cyprus', image_src: "../Assets/Flag_Images/Cyprus.png" },
          { name: 'Czechia', image_src: '../Assets/Flag_Images/Czechia.png' },
          { name: 'Denmark', image_src: "../Assets/Flag_Images/Denmark.png" },
          { name: 'Djibouti', image_src: "../Assets/Flag_Images/Djibouti.png" },
          { name: 'Dominica', image_src: "../Assets/Flag_Images/Dominica.png" },
          { name: 'DR Congo', image_src: "../Assets/Flag_Images/DR Congo.png" },
          { name: 'Ecuador', image_src: "../Assets/Flag_Images/Ecuador.png" },
          { name: 'Egypt', image_src: "../Assets/Flag_Images/Egypt.png" },
          { name: 'El Salvador', image_src: '../Assets/Flag_Images/El Salvador.png' },
          { name: 'England', image_src: "../Assets/Flag_Images/England.png" },
          { name: 'Equatorial Guinea', image_src: "../Assets/Flag_Images/Colombia.png" },
          { name: 'Eritrea', image_src: "../Assets/Flag_Images/Eritrea.png" },
          { name: 'Estonia', image_src: "../Assets/Flag_Images/Estonia.png" },
          { name: 'Ethiopia', image_src: "../Assets/Flag_Images/Ethiopia.png" },
          { name: 'Fiji', image_src: "../Assets/Flag_Images/Fiji.png" },
          { name: 'Finland', image_src: '../Assets/Flag_Images/Finland.png' },
          { name: 'France', image_src: "../Assets/Flag_Images/France.png" },
          { name: 'Gabon', image_src: "../Assets/Flag_Images/Gabon.png" },
          { name: 'Gambia', image_src: "../Assets/Flag_Images/Gambia.png" },
          { name: 'Georgia', image_src: "../Assets/Flag_Images/Georgia.png" },
          { name: 'Germany', image_src: "../Assets/Flag_Images/Germany.png" },
          { name: 'Ghana', image_src: "../Assets/Flag_Images/Ghana.png" },
          { name: 'Greece', image_src: '../Assets/Flag_Images/Greece.png' },
          { name: 'Grenada', image_src: "../Assets/Flag_Images/Grenada.png" },
          { name: 'Guatemala', image_src: "../Assets/Flag_Images/Guatemala.png" },
          { name: 'Guinea', image_src: "../Assets/Flag_Images/Guinea.png" },
          { name: 'Guinea-Bissau', image_src: "../Assets/Flag_Images/Guinea-Bissau.png" },
          { name: 'Guyana', image_src: "../Assets/Flag_Images/Guyana.png" },
          { name: 'Haiti', image_src: "../Assets/Flag_Images/Haiti.png" },
          { name: 'Honduras', image_src: '../Assets/Flag_Images/Honduras.png' },
          { name: 'Hong Kong', image_src: "../Assets/Flag_Images/Hong Kong.png" },
          { name: 'Hungary', image_src: "../Assets/Flag_Images/Hungary.png" },
          { name: 'Iceland', image_src: "../Assets/Flag_Images/Iceland.png" },
          { name: 'India', image_src: "../Assets/Flag_Images/India.png" },
          { name: 'Indonesia', image_src: "../Assets/Flag_Images/Indonesia.png" },
          { name: 'Iran', image_src: "../Assets/Flag_Images/Iran.png" },
          { name: 'Iraq', image_src: '../Assets/Flag_Images/Iraq.png' },
          { name: 'Ireland', image_src: "../Assets/Flag_Images/Ireland.png" },
          { name: 'Israel', image_src: "../Assets/Flag_Images/Israel.png" },
          { name: 'Italy', image_src: "../Assets/Flag_Images/Italy.png" },
          { name: 'Ivory Coast', image_src: "../Assets/Flag_Images/Ivory Coast.png" },
          { name: 'Jamaica', image_src: "../Assets/Flag_Images/Jamaica.png" },
          { name: 'Japan', image_src: "../Assets/Flag_Images/Japan.png" },
          { name: 'Jordan', image_src: '../Assets/Flag_Images/Jordan.png' },
          { name: 'Kazakhstan', image_src: "../Assets/Flag_Images/Kazakhstan.png" },
          { name: 'Kenya', image_src: "../Assets/Flag_Images/Kenya.png" },
          { name: 'Kiribati', image_src: "../Assets/Flag_Images/Kiribati.png" },
          { name: 'Kuwait', image_src: "../Assets/Flag_Images/Kuwait.png" },
          { name: 'Kyrgyzstan', image_src: "../Assets/Flag_Images/Kyrgyzstan.png" },
          { name: 'Laos', image_src: "../Assets/Flag_Images/Laos.png" },
          { name: 'Latvia', image_src: "../Assets/Flag_Images/Latvia.png" },
          { name: 'Lebanon', image_src: "../Assets/Flag_Images/Lebanon.png" },
          { name: 'Lesotho', image_src: "../Assets/Flag_Images/Lesotho.png" },
          { name: 'Liberia', image_src: "../Assets/Flag_Images/Liberia.png" },
          { name: 'Libya', image_src: "../Assets/Flag_Images/Libya.png" },
          { name: 'Liechtenstein', image_src: "../Assets/Flag_Images/Liechtenstein.png" },
          { name: 'Lithuania', image_src: "../Assets/Flag_Images/Lithuania.png" },
          { name: 'Luxembourg', image_src: "../Assets/Flag_Images/Luxembourg.png" },
          { name: 'Macedonia', image_src: "../Assets/Flag_Images/Macedonia.png" },
          { name: 'Madagascar', image_src: "../Assets/Flag_Images/Madagascar.png" },
          { name: 'Malawi', image_src: "../Assets/Flag_Images/Malawi.png" },
          { name: 'Malaysia', image_src: "../Assets/Flag_Images/Malaysia.png" },
          { name: 'Maldives', image_src: "../Assets/Flag_Images/Maldives.png" },
          { name: 'Mali', image_src: "../Assets/Flag_Images/Mali.png" },
          { name: 'Malta', image_src: "../Assets/Flag_Images/Malta.png" },
          { name: 'Marshall Islands', image_src: "../Assets/Flag_Images/Marshall Islands.png" },
          { name: 'Mauritania', image_src: "../Assets/Flag_Images/Mauritania.png" },
          { name: 'Mauritius', image_src: "../Assets/Flag_Images/Mauritius.png" },
          { name: 'Mexico', image_src: "../Assets/Flag_Images/Mexico.png" },
          { name: 'Micronesia', image_src: "../Assets/Flag_Images/Micronesia.png" },
          { name: 'Moldova', image_src: "../Assets/Flag_Images/Moldova.png" },
          { name: 'Monaco', image_src: "../Assets/Flag_Images/Monaco.png" },
          { name: 'Mongolia', image_src: "../Assets/Flag_Images/Mongolia.png" },
          { name: 'Montenegro', image_src: "../Assets/Flag_Images/Montenegro.png" },
          { name: 'Morocco', image_src: "../Assets/Flag_Images/Morocco.png" },
          { name: 'Mozambique', image_src: "../Assets/Flag_Images/Mozambique.png" },
          { name: 'Myanmar', image_src: "../Assets/Flag_Images/Myanmar.png" },
          { name: 'Namibia', image_src: "../Assets/Flag_Images/Namibia.png" },
          { name: 'Nauru', image_src: "../Assets/Flag_Images/Nauru.png" },
          { name: 'Nepal', image_src: "../Assets/Flag_Images/Nepal.png" },
          { name: 'Netherlands', image_src: "../Assets/Flag_Images/Netherlands.png" },
          { name: 'New Zealand', image_src: "../Assets/Flag_Images/New Zealand.png" },
          { name: 'Nicaragua', image_src: "../Assets/Flag_Images/Nicaragua.png" },
          { name: 'Niger', image_src: "../Assets/Flag_Images/Niger.png" },
          { name: 'Nigeria', image_src: "../Assets/Flag_Images/Nigeria.png" },
          { name: 'North Korea', image_src: "../Assets/Flag_Images/North Korea.png" },
          { name: 'Norway', image_src: "../Assets/Flag_Images/Norway.png" },
          { name: 'Oman', image_src: "../Assets/Flag_Images/Oman.png" },
          { name: 'Pakistan', image_src: "../Assets/Flag_Images/Pakistan.png" },
          { name: 'Palau', image_src: "../Assets/Flag_Images/Palau.png" },
          { name: 'Palestine', image_src: "../Assets/Flag_Images/Palestine.png" },
          { name: 'Panama', image_src: "../Assets/Flag_Images/Panama.png" },
          { name: 'Papua New Guinea', image_src: "../Assets/Flag_Images/Papua New Guinea.png" },
          { name: 'Paraguay', image_src: "../Assets/Flag_Images/Paraguay.png" },
          { name: 'Peru', image_src: "../Assets/Flag_Images/Peru.png" },
          { name: 'Philippines', image_src: "../Assets/Flag_Images/Philippines.png" },
          { name: 'Poland', image_src: "../Assets/Flag_Images/Poland.png" },
          { name: 'Portugal', image_src: "../Assets/Flag_Images/Portugal.png" },
          { name: 'Puerto Rico', image_src: "../Assets/Flag_Images/Puerto Rico.png" },
          { name: 'Qatar', image_src: "../Assets/Flag_Images/Qatar.png" },
          { name: 'Republic of the Congo', image_src: "../Assets/Flag_Images/Republic of the Congo.png" },
          { name: 'Romania', image_src: "../Assets/Flag_Images/Romania.png" },
          { name: 'Russia', image_src: "../Assets/Flag_Images/Russia.png" },
          { name: 'Rwanda', image_src: "../Assets/Flag_Images/Rwanda.png" },
          { name: 'Saint Kitts and Nevis', image_src: "../Assets/Flag_Images/Saint Kitts and Nevis.png" },
          { name: 'Saint Lucia', image_src: "../Assets/Flag_Images/Saint Lucia.png" },
          { name: 'Samoa', image_src: "../Assets/Flag_Images/Samoa.png" },
          { name: 'San Marino', image_src: "../Assets/Flag_Images/San Marino.png" },
          { name: 'Saudi Arabia', image_src: "../Assets/Flag_Images/Saudi Arabia.png" },
          { name: 'Scotland', image_src: "../Assets/Flag_Images/Scotland.png" },
          { name: 'Senegal', image_src: "../Assets/Flag_Images/Senegal.png" },
          { name: 'Serbia', image_src: "../Assets/Flag_Images/Serbia.png" },
          { name: 'Seychelles', image_src: "../Assets/Flag_Images/Seychelles.png" },
          { name: 'Sierra Leone', image_src: "../Assets/Flag_Images/Sierra Leone.png" },
          { name: 'Singapore', image_src: "../Assets/Flag_Images/Singapore.png" },
          { name: 'Slovakia', image_src: "../Assets/Flag_Images/Slovakia.png" },
          { name: 'Slovenia', image_src: "../Assets/Flag_Images/Slovenia.png" },
          { name: 'Solomon Islands', image_src: "../Assets/Flag_Images/Solomon Islands.png" },
          { name: 'Somalia', image_src: "../Assets/Flag_Images/Somalia.png" },
          { name: 'South Africa', image_src: "../Assets/Flag_Images/South Africa.png" },
          { name: 'South Korea', image_src: "../Assets/Flag_Images/South Korea.png" },
          { name: 'South Sudan', image_src: "../Assets/Flag_Images/South Sudan.png" },
          { name: 'Spain', image_src: "../Assets/Flag_Images/Spain.png" },
          { name: 'Sri Lanka', image_src: "../Assets/Flag_Images/Sri Lanka.png" },
          { name: 'St Vincent and the Grenadines', image_src: "../Assets/Flag_Images/St Vincent and the Grenadines.png" },
          { name: 'Sudan', image_src: "../Assets/Flag_Images/Sudan.png" },
          { name: 'Suriname', image_src: "../Assets/Flag_Images/Suriname.png" },
          { name: 'Swaziland', image_src: "../Assets/Flag_Images/Swaziland.png" },
          { name: 'Sweden', image_src: "../Assets/Flag_Images/Sweden.png" },
          { name: 'Switzerland', image_src: "../Assets/Flag_Images/Switzerland.png" },
          { name: 'Syria', image_src: "../Assets/Flag_Images/Syria.png" },
          { name: 'Taiwan', image_src: "../Assets/Flag_Images/Taiwan.png" },
          { name: 'Tajikistan', image_src: "../Assets/Flag_Images/Tajikistan.png" },
          { name: 'Tanzania', image_src: "../Assets/Flag_Images/Tanzania.png" },
          { name: 'Thailand', image_src: "../Assets/Flag_Images/Thailand.png" },
          { name: 'Timor-Leste', image_src: "../Assets/Flag_Images/Timor-Leste.png" },
          { name: 'Togo', image_src: "../Assets/Flag_Images/Togo.png" },
          { name: 'Tonga', image_src: "../Assets/Flag_Images/Tonga.png" },
          { name: 'Trinidad and Tobago', image_src: "../Assets/Flag_Images/Trinidad and Tobago.png" },
          { name: 'Tunisia', image_src: "../Assets/Flag_Images/Tunisia.png" },
          { name: 'Turkey', image_src: "../Assets/Flag_Images/Turkey.png" },
          { name: 'Turkmenistan', image_src: "../Assets/Flag_Images/Turkmenistan.png" },
          { name: 'Tuvalu', image_src: "../Assets/Flag_Images/Tuvalu.png" },
          { name: 'Uganda', image_src: "../Assets/Flag_Images/Uganda.png" },
          { name: 'Ukraine', image_src: "../Assets/Flag_Images/Ukraine.png" },
          { name: 'United Arab Emirates', image_src: "../Assets/Flag_Images/United Arab Emirates.png" },
          { name: 'United Kingdom', image_src: "../Assets/Flag_Images/United Kingdom.png" },
          { name: 'United States', image_src: "../Assets/Flag_Images/United States.png" },
          { name: 'Uruguay', image_src: "../Assets/Flag_Images/Uruguay.png" },
          { name: 'Uzbekistan', image_src: "../Assets/Flag_Images/Uzbekistan.png" },
          { name: 'Vanuatu', image_src: "../Assets/Flag_Images/Vanuatu.png" },
          { name: 'Vatican City', image_src: "../Assets/Flag_Images/Vatican City.png" },
          { name: 'Venezuela', image_src: "../Assets/Flag_Images/Venezuela.png" },
          { name: 'Vietnam', image_src: "../Assets/Flag_Images/Vietnam.png" },
          { name: 'Wales', image_src: "../Assets/Flag_Images/Wales.png" },
          { name: 'Yemen', image_src: "../Assets/Flag_Images/Yemen.png" },
          { name: 'Zambia', image_src: "../Assets/Flag_Images/Zambia.png" },
          { name: 'Zimbabwe', image_src: "../Assets/Flag_Images/Zimbabwe.png" },
		],
	}
})



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