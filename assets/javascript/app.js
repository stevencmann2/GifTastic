console.log("this is linked");

const topics = ["guitar", "dogs", "basketball", "baseball", "craftbeer", "coffee", "cooking", "camping", "travel", "biking", "fishing", ];

function buttonPrint() {
    for(let i = 0; i < topics.length; i++) {
        makeBtn = $("<button>");
        textBtn = $("<button>").text(topics[i]);
        $(".topics-buttons").append(textBtn);
    }
}

buttonPrint();

    
