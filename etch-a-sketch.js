const container = document.querySelector('#container');
container.setAttribute('style', ' cursor: pointer; height:600px; width: 600px; background-color: black;display: flex; flex-wrap: wrap');

createGrid(16);
mouseOver();

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () =>{
    let divs = document.querySelectorAll('.div');
    divs.forEach((div) =>{
        container.removeChild(div);
    });
    m = Number(prompt("Enter the Number of Pexels on Both Side (< 100)"));
    if(m < 100){
        createGrid(m);
        mouseOver();
    }
    else
        alert("Please Enter a Number Less Than 100");
});

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

function mouseOver(){
    let divs = document.querySelectorAll('.div');
    divs.forEach((div) => {
        div.addEventListener('mouseout', () =>{
        /*div.setAttribute('style', 'background-color: black');*/
        div.classList.add('over');
        });
    });
}

