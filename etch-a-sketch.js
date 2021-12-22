const container = document.getElementById('container');
container.setAttribute('style', ' cursor: pointer; height:600px; width: 600px; background-color: black;display: flex; flex-wrap: wrap');

const mode = document.querySelector('.mode');

createGrid(16);

const pexelInput = document.querySelector('input');
pexelInput.value = 16;
pexelInput.addEventListener('change', () =>{
    let divs = document.querySelectorAll('.div');
    divs.forEach((div) =>{
        container.removeChild(div);
    })
    createGrid(pexelInput.value);
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () =>{
    mode.textContent = 'Cleared';
    let divs = document.querySelectorAll('.div');
    divs.forEach((div) =>{
        container.removeChild(div);
    });
    createGrid(pexelInput.value);
    pexelInput.disabled = false;
});

const draw = document.querySelector('.draw');
draw.addEventListener('click', () => {
    mode.textContent = 'Draw Mode';
    pexelInput.disabled = true;
    mouseOverDraw();
});

const erase = document.querySelector('.erase');
erase.addEventListener('click', () => {
    mode.textContent = 'Erase Mode';
    mouseOverErase();
})

//functions

function createGrid(n){
    for(i = 0; i < n*n; i++){
        child = document.createElement('div');
        child.classList.add(`div`);
        child.setAttribute('style', ` height:${600/n}px; width:${600/n}px; border: 0`);
        container.appendChild(child);
    }
}

function mouseOverDraw(){
    let divs = document.querySelectorAll('.div');
    divs.forEach((div) => {
        div.addEventListener('mouseout', () =>{
        if(div.classList.contains('overErase'))
            div.classList.remove('overErase');
        pexelInput.disabled = true;
        div.classList.add('overDraw');
        });
    });
}

function mouseOverErase(){
    let divs = document.querySelectorAll('.div');
    divs.forEach((div) => {
        div.addEventListener('mouseout', () =>{
        if(div.classList.contains('overDraw'))
            div.classList.remove('overDraw');
        if(document.querySelectorAll('.overDraw').length == 0)
            pexelInput.disabled = false;
        });
    });
}

