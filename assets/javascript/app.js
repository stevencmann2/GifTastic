//Javascript form for GifTastic Project 
//console.log("this is linked");

const topics = ["guitar", "dogs", "basketball", "baseball", "craftbeer", "coffee", "cooking", "camping", "travel", "biking", "fishing", ];

// function that  creates buttons,. sources text from the array, and appends 
function buttonPrint() {
    for (let i = 0; i < topics.length; i++) {
        makeBtn = $("<button>");
        makeBtn.addClass("topics-buttons");
        makeBtn.text(topics[i]);
        $(".topics-div").append(makeBtn);
    }
};
//prints buttons//
buttonPrint();

/*

function createButton() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $(".topics-div").empty();

    // Looping through the array of movies
    for (let i = 0; i < topics.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      const newBtn = $("<button>");
      // Adding a class of movie-btn to our button
      newBtn.addClass("topics-buttons");
      // Adding a data-attribute
      newBtn.attr("data-name", topics[i]);
      // Providing the initial button text
      newBtn.text(movies[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(newBtn);
    }
  }
*/














$(document).on('click', '.topics-buttons', userTopicsClick);
//userTopicsClick.preventDefault();

//user clicks
//$(".topics-buttons").click(userTopicsClick);
//
function userTopicsClick() {
    const clicked = $(this);
   // console.log(this);
    //query URL
    let queryURL = `https://api.giphy.com/v1/gifs/search?q=${clicked.text()}&api_key=ABtjqgMUR0LmZ6Ko1afPtTLhUS0ktNlB&limit=10`; //using basketball in this example //MyKey= ABtjqgMUR0LmZ6Ko1afPtTLhUS0ktNlB
    //page grabs 10 static (non animated) gif images
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //create div for staric images
        console.log(response);
        const gifContainer = $("<div>");
        const topicGifImages = response.data;
        console.log(queryURL);
        // create images to add to the div
        for (i = 0; i < topicGifImages.length; i++) {
            console.log(topicGifImages);
            //console.log(typeof topicGifImages);
            console.log(topicGifImages[i].images.original_still.url);
    
            //imageAdder.html("<img src= " + topicGifImages[i].images.original_still.url + " />");
            $(".images-holder").append("<img src= " + topicGifImages[i].images.original_still.url + " />"); //(name).append need to be existing HTML
        };
        //add images using Jquery
        //().html(response.);//this is the locatoin I am using GUITAR in this example)
        

    });
};


/*

//appends to page */