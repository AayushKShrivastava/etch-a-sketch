const container = document.querySelector('#container');
container.setAttribute('style', ' cursor: pointer; height:600px; width: 600px; background-color: black;display: flex; flex-wrap: wrap');

n = 16;
for(i = 0; i < n*n; i++){
    child = document.createElement('div');
    child.classList.add(`div`);
    child.setAttribute('style', ` height:${600/n}px; width:${600/n}px; border: 0`);
    /*child.textContent = 'a';*/
    container.appendChild(child);
}

const divs = document.querySelectorAll('.div');
divs.forEach((div) => {
    div.addEventListener('mouseout', () =>{
        /*div.setAttribute('style', 'background-color: black');*/
        div.classList.add('over');
    });
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () =>{
    divs.forEach((div) =>{
        div.classList.remove('over');
    });

});