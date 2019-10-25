//Javascript form for GifTastic Project 
//console.log("this is linked");

const topics = ["guitar", "dogs", "basketball", "baseball", "craftbeer", "coffee", "cooking", "camping", "travel", "biking", "fishing", ];

// function that  creates buttons,. sources text from the array, and appends 
function initialbuttonPrint() {
    for (let i = 0; i < topics.length; i++) {
        makeBtn = $("<button>");
        //makeBtn.addClass("topics-buttons");
        makeBtn.text(topics[i]);
        $(".topics-div").append(makeBtn);
    }
};
//prints buttons//
initialbuttonPrint();

function alertTopicsKeyword() {
    const topicsKeyword = $(this).attr("data-keyword");
    alert(topicsKeyword);
};

function createButtons() {

    // Deleting the images prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $(".topics-div").empty();

    // Looping through the array of topics
    for (let i = 0; i < topics.length; i++) {

        // Then dynamicaly generating buttons for each topics and userInput in the array
        
        const newBtn = $("<button>");
        // Adding a class of movie-btn to our button
        newBtn.addClass("topics-buttons");
        // Adding a data-attribute keyword
        newBtn.attr("data-keyword", topics[i]);
        // Providing the initial button text
        newBtn.text(topics[i]);
        // Adding the button to topics-div
        $(".topics-div").append(newBtn);
    }
};



// This function handles events where one button is clicked
$("#add-keyword").on("click", function (event) {
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    const userInput = $("#topicSearchBar").val().trim();

    // Adding the topic from the textbox to our array
    topics.push(userInput);
    console.log(userInput);

    // Calling createButtons which handles the processing of topics array
    createButtons();

});

// Function for displaying the images 
// adding a click event listener to all elements with the class "topics-buttons"
// We're adding the event listener to the document because it will work for dynamically generated elements
// $(".topics-buttons").on("click") will only add listeners to elements that are on the page at that time
$(document).on("click", ".topics-buttons", alertTopicsKeyword);

// Calling the renderButtons function to display the intial buttons
createButtons();

//this runs the retreival of images and prints one of them
$(document).on('click', '.topics-buttons', userTopicsClick);

function userTopicsClick() {
    const clicked = $(this);
   
    let queryURL = `https://api.giphy.com/v1/gifs/search?q=${clicked.text()}&api_key=ABtjqgMUR0LmZ6Ko1afPtTLhUS0ktNlB&limit=10`; //using basketball in this example //MyKey= ABtjqgMUR0LmZ6Ko1afPtTLhUS0ktNlB
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        const topicGifImages = response.data;
    
        for (i = 0; i < topicGifImages.length; i++) {
        
            $(".images-holder").prepend("<img src= " + topicGifImages[i].images.original_still.url + " />"); //(name).append need to be existing HTML
            $("img").addClass("gifs");
        };
        
    });
};


//setting up for click events to images
/////$(document).on("click", ".gifs", animation);

////$(document).on("click", ".gifs", Animation);

////$(document).on("click", ".gifs", stopAnimation);




/*

//appends to page */