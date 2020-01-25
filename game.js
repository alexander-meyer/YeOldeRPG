let currentRoom = "meadow";
const gameText = $('#game-text');
const userInput = $('#user-input');
// array of possible cardinal directions and adjacent room names
let roomExits = [];
let inventory = [];
const movementWords = ['go', 'move', 'walk', 'run', 'travel'];

$(document).ready(function () {
    setupRoom();

    $(document).keypress(function (key) {
        if ((key.which === 13) && userInput.is(':focus')) {
            var value = userInput.val();
            userInput.val('> ');
            parseInput(value);
        };
    })
})

// .text   <-- overwrites current text

function setupRoom() {
    Object.keys(rooms[currentRoom].directions).forEach(function (dir) {
        roomExits.push(dir, rooms[currentRoom].directions[dir])
    });

    gameText.append(rooms[currentRoom].description);
}

function changeRoom(dir) {
    const currentRoomExits = rooms[currentRoom].directions;

    // north, south, ...
    if ((currentRoomExits[dir]) !== undefined) {
        currentRoom = currentRoomExits[dir]
    }
    // else entered room name directly
    else {
        for (let key of Object.keys(currentRoomExits)) {
            if (dir === currentRoomExits[key]) {
                currentRoom = dir
            }
        }
    }

    roomExits = [];
    setupRoom();
}

function help() {
    gameText.append('Basic commands include \'look\', \'go ____\' and \'inventory\', though rooms may respond to other actions...<br/><br/>')
}

function displayExits() {
    for (i = 0; i < roomExits.length - 1; i = i + 2) {
        gameText.append(`To your ${roomExits[i]} lies a ${roomExits[i + 1]} <br/>`);
    }

    gameText.append('<br/>');
}

// takes user input and returns first matching element found in a target array
function checkForValidMove(userInput, targetArray) {
    for (const word of userInput) {
        if (targetArray.includes(word)) {
            return word;
        }
    }
    return 'none';
}

function parseInput(input) {
    gameText.append(`${input} <br/> <br/>`);

    inputArray = input.toLowerCase().split(' ').filter(element => element !== '>');

    console.log(inputArray);

    // returns first valid direction or room name from input, if any
    const directionToMove = checkForValidMove(inputArray, roomExits);

    if (directionToMove !== 'none') {
        changeRoom(directionToMove);
    }
    else if (inputArray.includes('look')) {
        displayExits();
    }
    else if (inputArray.includes('help')) {
        help();
    }
    else if (inputArray.length === 1 && movementWords.includes(inputArray[0])) {
        gameText.append('Where? <br/><br/>');
    }
    else {
        gameText.append('Not sure what you mean <br/> <br/>');
    }
}