var Menu = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".side-bar");
var newsidebar = document.querySelector(".new-side-bar");
var newlistcontainer = document.querySelector(".list-container");
var newpanel = document.querySelector(".panel");
Menu.addEventListener("click", function () {
    sidebar.classList.toggle("small-sidebar");
    newsidebar.classList.toggle("hidden-sidebar");
    newlistcontainer.classList.toggle("new-list-container");
    newpanel.classList.toggle("new-panel");
});

// var SearchInput = document.querySelector(".search-input");
// var SearchBox = document.querySelector(".Search-box");
// SearchInput.addEventListener("click", function(){
//     SearchBox.classList.toggle("Options");

// }); 


// var searchInput = document.querySelector(".search-input");
// var navSearch = document.querySelector(".nav-search");
// var searchIcon = document.querySelector(".search-icon");
// var searchBox = document.getElementById("searchBox");
// var isDisplayed = false;

// navSearch.addEventListener("click", function (event) {
//     event.stopPropagation(); // Stop event propagation to prevent conflicts
//     if (!isDisplayed) {
//         searchBox.style.display = "block"; // Show the div
//         isDisplayed = true; // Set the state to visible
//     } else {
//         searchBox.style.display = "none"; // Hide the div
//         isDisplayed = false; // Set the state to hidden
//     }
// });


// var navSearch = document.querySelector(".nav-search");
// var searchInput = document.querySelector(".search-input");
// var SearchBox = document.querySelector(".Search-box");
// var isDisplayed = false;
// var newDiv;


// searchInput.addEventListener("click", function () {
//     if (!isDisplayed) {
//         newDiv = document.createElement("div");
//         newDiv.classList.add("my-class");
//         document.body.appendChild(newDiv);
//         isDisplayed = true;
//     } 
// });

// var searchIcon = document.querySelector(".search-icon");
// searchIcon.addEventListener("click", function () {
//     if (newDiv) {
   
//            newDiv.style.display = "none";
//            isDisplayed = false;
//     }
// });

var searchInput = document.querySelector(".search-input");
var SearchBox = document.querySelector(".Search-box");
var searchIcon = document.querySelector(".search-icon");
var Apperance = document.querySelector(".Apperance");
var loginButton = document.querySelector(".login-button");

searchInput.addEventListener("click", function () {
    SearchBox.style.display = "block";
    Apperance.style.display = "none";
    loginButton.style.display = "none";
});
searchIcon.addEventListener("click", function () {
    SearchBox.style.display = "none";
});

var searchInput = document.querySelector(".search-input");
var anchorTags = document.querySelectorAll(".Search-box a");
var Searchlistcontainer = document.querySelector(".list-container");

anchorTags.forEach(function(anchor){
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        var anchorText = anchor.querySelector("p").textContent;
        searchInput.value = anchorText;
        Searchlistcontainer.classList.remove("list-container");
        Searchlistcontainer.classList.add("search-list-container");
        SearchBox.style.display = "none"; 

    });
});


// var loginButton = document.querySelector(".login-button");

// loginButton.addEventListener("click", function () {
// if(loginButton.style.display === "none"){
  
//     loginButton.style.display = "block";
// }
// else{
//     loginButton.style.display = "none";
// }

// });

var login = document.querySelector(".login");
var loginButton = document.querySelector(".login-button");
var Apperance = document.querySelector(".Apperance");
var SearchBox = document.querySelector(".Search-box");
login.addEventListener("click", function () {
    if(loginButton.style.display === "none"){
  
        loginButton.style.display = "block";
        Apperance.style.display = "none";
        SearchBox.style.display = "none";
    }
    else{
        loginButton.style.display = "none";
    }
});
// With this code, it should correctly toggle the visibility of the loginButton on each click, even if the initial display value is not explicitly set in inline CSS.
var lightDiv = document.querySelector(".light-div");
var Apperance = document.querySelector(".Apperance");
var loginButton = document.querySelector(".login-button");
var SearchBox = document.querySelector(".Search-box");

lightDiv.addEventListener("click", function () {
    if(Apperance.style.display === "none"){
  
        Apperance.style.display = "block";
        loginButton.style.display = "none";
        SearchBox.style.display = "none";
    }
    else{
        Apperance.style.display = "none";
    }
}); 
var Mode = document.querySelector(".Mode");
var Apperance = document.querySelector(".Apperance");
Apperance.addEventListener("click", function (event) {
    event.stopPropagation();
    Apperance.style.display = "none";
}); 

var Apperance = document.querySelector(".Apperance");
var Dark = document.querySelector(".Dark");
var body = document.querySelector(".light-theme");
var sidebar = document.querySelector(".side-bar");
var newlistcontainer = document.querySelector(".list-container");
var newpanel = document.querySelector(".panel");
var navbar = document.querySelector(".navbar");
var loginButton = document.querySelector(".login-button");
var SearchBox = document.querySelector(".Search-box");
var newSideBar = document.querySelector(".new-side-bar");
var newsideBar = document.querySelector(".newside-bar");

function toggleDarkTheme() {
    body.classList.toggle("dark-theme");
        navbar.classList.toggle("dark-navbar");
    sidebar.classList.toggle("dark-side-bar");
    newlistcontainer.classList.toggle("dark-list-container");
    newpanel.classList.toggle("dark-panel");
    loginButton.classList.toggle("dark-login-button");
    SearchBox.classList.toggle("dark-Search-box");
    Apperance.classList.toggle("dark-Apperance");
    newSideBar.classList.toggle("dark-new-side-bar");
    newsideBar.classList.toggle("dark-newside-bar");
}
Dark.addEventListener("click", toggleDarkTheme);

function turnOffDarkTheme() {
    body.classList.remove("dark-theme");
    navbar.classList.remove("dark-navbar");
    sidebar.classList.remove("dark-side-bar");
    newlistcontainer.classList.remove("dark-list-container");
    newpanel.classList.remove("dark-panel");
    loginButton.classList.remove("dark-login-button");
    SearchBox.classList.remove("dark-Search-box");
    Apperance.classList.remove("dark-Apperance");
    newSideBar.classList.remove("dark-new-side-bar");
    newsideBar.classList.remove("dark-newside-bar");
}

var lightTheme = document.querySelector(".light");
lightTheme.addEventListener("click", turnOffDarkTheme);



var ApperanceBack = document.querySelector(".Apperance-back");
var loginButton = document.querySelector(".login-button");
var SearchBox = document.querySelector(".Search-box");
ApperanceBack.addEventListener("click", function () {
    if(loginButton.style.display === "none"){
  
        loginButton.style.display = "block";
        Apperance.style.display = "none";
        SearchBox.style.display = "none";
    }
    else{
        loginButton.style.display = "none";
    }
});

var boxs = document.querySelector(".boxes");
boxs.addEventListener("click", function (event) {
    event.preventDefault();
    Searchlistcontainer.classList.add("list-container");
    Searchlistcontainer.classList.remove("search-list-container");

});








































































// Get references to the search input element and anchor tags
// var searchInput = document.querySelector(".search-input");
// var anchorTags = document.querySelectorAll(".Search-box a");

// // Add a click event listener to each anchor tag
// anchorTags.forEach(function (anchor) {
//     anchor.addEventListener("click", function (event) {
//         event.preventDefault(); // Prevent the default link behavior
//         var anchorText = anchor.querySelector("p").textContent; // Get the text content of the clicked anchor tag
//         searchInput.value = anchorText; // Populate the search input with the anchor text
//     });
// });













































































