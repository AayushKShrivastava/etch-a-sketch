const container = document.querySelector('#container');
container.setAttribute('style', ' cursor: pointer; height:600px; width: 600px; background-color: black;display: flex; flex-wrap: wrap');

//createGrid(16);
//mouseOverDraw();

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () =>{
    let divs = document.querySelectorAll('.div');
    divs.forEach((div) =>{
        container.removeChild(div);
    });
});

const draw = document.querySelector('.draw');
const pexelInput = document.querySelector('input');
pexelInput.value = 16;
draw.addEventListener('click', () => {
    //m = Number(prompt("Enter the Number of Pexels on Both Side (< 100)", "16"));
    
    if(pexelInput.value == 0){
        createGrid(16);
    }
    else if(pexelInput.value < 100){
        createGrid(pexelInput.value);
    }
    else{
        alert("Please Enter a Number Less Than 100");
        pexelInput.value = 16;
        createGrid(16);
    }
    mouseOverDraw();
});

const erase = document.querySelector('.erase');
erase.addEventListener('click', () => {
    mouseOverErase();
})

//functions

function createGrid(n){
    for(i = 0; i < n*n; i++){
        child = document.createElement('div');
        child.classList.add(`div`);
        child.setAttribute('style', ` height:${600/n}px; width:${600/n}px; border: 0`);
        /*child.textContent = 'a';*/
        container.appendChild(child);
    }
}

function mouseOverDraw(){
    let divs = document.querySelectorAll('.div');
    divs.forEach((div) => {
        div.addEventListener('mouseout', () =>{
        /*div.setAttribute('style', 'background-color: black');*/
        if(div.classList.contains('overErase'))
            div.classList.remove('overErase');
        div.classList.add('overDraw');
        });
    });
}

function mouseOverErase(){
    let divs = document.querySelectorAll('.div');
    divs.forEach((div) => {
        div.addEventListener('mouseout', () =>{
        /*div.setAttribute('style', 'background-color: black');*/
        if(div.classList.contains('overDraw'))
            div.classList.remove('overDraw');
        div.classList.add('overErase');
        });
    });
}

