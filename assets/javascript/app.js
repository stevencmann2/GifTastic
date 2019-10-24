//Javascript form for GifTastic Project 
console.log("this is linked");

const topics = ["guitar", "dogs", "basketball", "baseball", "craftbeer", "coffee", "cooking", "camping", "travel", "biking", "fishing", ];

// function that  creates buttons,. sources text from the array, and appends 
function buttonPrint() {
    for(let i = 0; i < topics.length; i++) {
        makeBtn = $("<button>");
        $("<button>").addClass("topics-buttons")
        textBtn = $("<button>").text(topics[i]);
        $(".topics-div").append(textBtn);
    }
}
//prints buttons//
buttonPrint();

//user clicks
$(".topics-buttons").click(userTopicsClick);
//
function userTopicsClick() {
    const clicked = $(this);
};

//query URL

queryURL = `https//wwww.api.giphy.com/v1/gifs/search?q=${topics[i]}&api_key=ABtjqgMUR0LmZ6Ko1afPtTLhUS0ktNlB`;             //MyKey= ABtjqgMUR0LmZ6Ko1afPtTLhUS0ktNlB
//page grabs 10 static (non animated) git images

function staticImages() {
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

};
};
//appends to page
    
