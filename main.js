/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(array) {
    var j, x, i;
    for (i = array.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
}

function getShuffledDeck() {
    // suitsArray = ["clubs", "spades", "hearts", "diamonds"]
    var deck = [];

    cardValues = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A"
    ]

    function toBeCalledForEachSuit(suit) {
        cardValues.forEach(function(cardValue) {
            var card = {
                suit: suit,
                value: cardValue
            }
            deck.push(card);
            // console.log('Suit is: ' + suit + ' and value is: ' + cardValue);
        })
    }

    toBeCalledForEachSuit("&spades;")

    toBeCalledForEachSuit("&hearts;")

    toBeCalledForEachSuit("&clubs;")

    toBeCalledForEachSuit("&diams;")

    shuffle(deck);

    return deck;

}

var submitCount = 0;


getShuffledDeck()

// define reference to the submit-button
var submitButton = document.getElementById("submit-button");

// define reference to the cashola element
var cashola = document.getElementById("cashola");

// define reference to the card1 value element
var card1Value = document.getElementById("hand-card-1-value");

// define reference to the card1 suit element
var card1Suit = document.getElementById("hand-card-1-suit");

// define reference to the card2 value element
var card2Value = document.getElementById("hand-card-2-value");

// define reference to the card2 suit element
var card2Suit = document.getElementById("hand-card-2-suit");

// define reference to the card2 value element
var cCard1Value = document.getElementById("comm-card-1-value");

// define reference to the card2 suit element
var cCard1Suit = document.getElementById("comm-card-1-suit");

// define reference to the card2 value element
var cCard2Value = document.getElementById("comm-card-2-value");

// define reference to the card2 suit element
var cCard2Suit = document.getElementById("comm-card-2-suit");

// define reference to the card2 value element
var cCard3Value = document.getElementById("comm-card-3-value");

// define reference to the card2 suit element
var cCard3Suit = document.getElementById("comm-card-3-suit");

// define reference to the card2 value element
var cCard4Value = document.getElementById("comm-card-4-value");

// define reference to the card2 suit element
var cCard4Suit = document.getElementById("comm-card-4-suit");

// define reference to the card2 value element
var cCard5Value = document.getElementById("comm-card-5-value");

// define reference to the card2 suit element
var cCard5Suit = document.getElementById("comm-card-5-suit");

// function to generate random deck index
function generateRandomIndex() {
    return Math.floor(Math.random() * 5)
}

// everytime the submit button is clicked
submitButton.addEventListener('click', function() {

    var deck = getShuffledDeck()

    // increment the submitCount
    submitCount = submitCount + 1;

    var card1 = deck.shift()
    var card2 = deck.shift()
    var cCard1 = deck.shift()
    var cCard2 = deck.shift()
    var cCard3 = deck.shift()
    var cCard4 = deck.shift()
    var cCard5 = deck.shift()

    var propertyToAccess = "color"

    console.log("Card 1 suit is: " +
        card1.suit + " and value is: " + card1.value)

    console.log("Card 2 suit is: " +
        card2.suit + " and value is: " + card2.value)

    // update the card1Suit accordingly
    card1Suit.innerHTML = card1.suit

    // update the card1Value accordingly
    card1Value.innerHTML = card1.value

    // update the card1Suit accordingly
    card2Suit.innerHTML = card2.suit

    // update the card2Value accordingly
    card2Value.innerHTML = card2.value

    // update the card1Suit accordingly
    cCard1Suit.innerHTML = cCard1.suit

    // update the cCard1Value accordingly
    cCard1Value.innerHTML = cCard1.value

    // update the cCard1Suit accordingly
    cCard2Suit.innerHTML = cCard2.suit

    // update the cCard2Value accordingly
    cCard2Value.innerHTML = cCard2.value

    // update the cCard1Suit accordingly
    cCard3Suit.innerHTML = cCard3.suit

    // update the cCard3Value accordingly
    cCard3Value.innerHTML = cCard3.value

    // update the cCard1Suit accordingly
    cCard4Suit.innerHTML = cCard4.suit

    // update the cCard4Value accordingly
    cCard4Value.innerHTML = cCard4.value

    // update the cCard1Suit accordingly
    cCard5Suit.innerHTML = cCard5.suit

    // update the cCard5Value accordingly
    cCard5Value.innerHTML = cCard5.value

    if (submitCount < 7) {
        console.log("submit button clicked " + submitCount + " times");
    } else if (submitCount == 8) {
        console.warn("sup");
    } else {
        console.warn("fuck you zac");
    }

    // update the cashola accordingly
    cashola.innerHTML = "$ " + (submitCount * 10);
});
