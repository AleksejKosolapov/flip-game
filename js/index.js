const gameSize = 4;
//Массив картинок
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
//Перемешаный объект картинок
const listImagesShuffle = {
    cell0:"",
    cell1:"",
    cell2:"",
    cell3:"",
    cell4:"",
    cell5:"",
    cell6:"",
    cell7:"",
    cell8:"",
    cell9:"",
    cell10:"",
    cell11:"",
    cell12:"",
    cell13:"",
    cell14:"",
    cell15:"",
};

//Объект с рубашками
const arrayShirt = {
    cell0:"images/shirt.png",
    cell1:"images/shirt.png",
    cell2:"images/shirt.png",
    cell3:"images/shirt.png",
    cell4:"images/shirt.png",
    cell5:"images/shirt.png",
    cell6:"images/shirt.png",
    cell7:"images/shirt.png",
    cell8:"images/shirt.png",
    cell9:"images/shirt.png",
    cell10:"images/shirt.png",
    cell11:"images/shirt.png",
    cell12:"images/shirt.png",
    cell13:"images/shirt.png",
    cell14:"images/shirt.png",
    cell15:"images/shirt.png",
};

function shufImg() {
    shuffle(listImages);
    for(let i = 0; i < 16; i++){
        let a = "cell"+i;
       listImagesShuffle [a] = listImages [i];
    }
    return listImagesShuffle;
}
//заполняет таблицу картинками или рубашками
function initGame() {
    //shuffle(listImages);
    for(let i = 0; i < 16; i++){
        let cellId = "cell" + i;
        let img = document.createElement('img');
        //img.src = listImages[i];
        img.src = arrayShirt[cellId];
        let parentElement = document.getElementById(cellId);
        parentElement.appendChild(img);
    }
}
//Перемешивает массив
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

function onklickFunction(clickId) {
    for(let i = 0; i < 16; i++){
        let cellId = "cell" + i;
        for(let j = 0; j < 16; j++){
            let deleteElement = document.getElementById(cellId);
            deleteElement.innerHTML ="";
        }
        if(clickId == cellId){
            let img = document.createElement('img');
            //img.src = listImages[i];
            img.src = listImagesShuffle[cellId];
            let parentElement = document.getElementById(cellId);
            parentElement.appendChild(img);
        }else{
            let img = document.createElement('img');
            //img.src = listImages[i];
            img.src = arrayShirt[cellId];
            let parentElement = document.getElementById(cellId);
            parentElement.appendChild(img);
        }
    }
}
initGame();
console.log(shufImg());

