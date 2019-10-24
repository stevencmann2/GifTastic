//Javascript form for GifTastic Project 
console.log("this is linked");

const topics = ["guitar", "dogs", "basketball", "baseball", "craftbeer", "coffee", "cooking", "camping", "travel", "biking", "fishing", ];

// function that  creates buttons,. sources text from the array, and appends 
function buttonPrint() {
    for (let i = 0; i < topics.length; i++) {
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
    //query URL
    queryURL = `https://api.giphy.com/v1/gifs/search?q=${clicked.text()}&api_key=ABtjqgMUR0LmZ6Ko1afPtTLhUS0ktNlB&limit=10`; //using basketball in this example //MyKey= ABtjqgMUR0LmZ6Ko1afPtTLhUS0ktNlB
    //page grabs 10 static (non animated) gif images
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //create div for staric images
        const gifContainer = $("<div>");
        const topicGifImages = response.data;
        // create images to add to the div
        for (i=0 ; i <length.topicGifImages; i++){
        const gifAdder = $("<div>").append("<img src='"+topicGifImages[i].images.original_still.url"'");
        };
        //add images using Jquery
        //().html(response.);//this is the locatoin I am using GUITAR in this example)

        };
    )};
}:
//appends to page */
