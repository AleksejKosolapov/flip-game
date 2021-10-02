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
//заполняет таблицу  рубашками
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

//Счетчик открытых карточек
let counter = 0;
let clickId_1 = "";
let clickId_2 = "";
//Счетчик одновременно открытых карточек
let counterOpen = 0;
//Обновляет таблицу с картачками по клику
function onklickFunction(clickId) {
    counter +=1;
    if(counter == 1){
        clickId_1 = clickId;
        console.log(clickId_1);
    }else{
        clickId_2 = clickId;
        counter = 0;
        console.log(clickId_2);
    }
    //Обновляет таблицу с карточками 
    for(let i = 0; i < 16; i++){
        let cellId = "cell" + i;

        let deleteElement = document.getElementById(cellId);
        deleteElement.innerHTML ="";

        if((clickId_1 == cellId) || (clickId_2 == cellId)){
            let img = document.createElement('img');
            //img.src = listImages[i];
            img.src = listImagesShuffle[cellId];
            let parentElement = document.getElementById(cellId);
            parentElement.appendChild(img);
            //Проверка одновремнно открытых карточек и сравнивает их
            counterOpen += 1;
            if(counterOpen == 2){
                counterOpen = 0;
                if(listImagesShuffle[clickId_1]==listImagesShuffle[clickId_2]){
                    arrayShirt[clickId_1] = listImagesShuffle[clickId_1]
                    arrayShirt[clickId_2] = listImagesShuffle[clickId_2]
                }else{
                   

                }
            }
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


