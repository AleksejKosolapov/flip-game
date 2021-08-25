const gameSize = 4;

const listImages = [
    "images/ball.png",
    "images/bike.png",
    "images/car.png",
    "images/crab.png",
    "images/dog.png",
    "images/dolphin.png",
    "images/plane.png",
    "images/sun.png",
    "images/ball.png",
    "images/bike.png",
    "images/car.png",
    "images/crab.png",
    "images/dog.png",
    "images/dolphin.png",
    "images/plane.png",
    "images/sun.png"
];

function initGame() {
    shuffle(listImages);
    for(let i = 0; i < 16; i++){
        let cellId = "cell" + (i+1) ;
        let img = document.createElement('img');
        img.src = listImages[i];
        let parentElement = document.getElementById(cellId);
        parentElement.appendChild(img);
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    
    while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
    }
    return array;
}

initGame();

