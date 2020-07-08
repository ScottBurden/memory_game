const gameContainer = document.getElementById('game');
const colors = [
    'red',
    'blue',
    'green',
    'orange',
    'purple',
    'red',
    'blue',
    'green',
    'orange',
    'purple',
];
let arr = [];
function match(firstCard, nextCard){
    firstCard.classList = "found";
    nextCard.classList = "found";
    arr=[];
};
function noMatch(firstCard, nextCard){
    setTimeout(function(){
        
        console.log('Try again')
        firstCard.style.backgroundColor = '';
        nextCard.style.backgroundColor = '';
        arr = [];
    }, 1250)
};


function handleCardClick(event){
    console.log('you just clicked', event.target )
    if (arr.length < 2){
    event.target!== arr[0] ? arr.push(event.target) : null;
    event.target.style.backgroundColor = event.target.classList;
        if (arr[0].className === arr[1].className){
            match (arr[0], arr[1]);
        }   else noMatch(arr[0], arr[1]);
}   
}
function shuffle(array){
    let counter = array.length;
    while (counter > 0){
        let index = Math.floor(Math.random()*counter);
        counter--;
        let temp = array[counter];
        array[counter]= array[index];
        array[index] = temp;
    } 
return array;
}
let shuffleColors = shuffle(colors);
function createDivsForColors(colorArray){
    for (let color of colorArray){
        const newDiv = document.createElement('div');
        newDiv.classList.add(color);
        newDiv.addEventListener('click', handleCardClick);
        gameContainer.append(newDiv);
    }
}
window.addEventListener('DOMcontentLoaded', createDivsForColors(colors));