const container = document.querySelector('#container');
container.setAttribute('style', ' height:700px; width: 700px; background-color: aqua;display: flex; flex-wrap: wrap');
n = 100;
for(i = 0; i < n*n; i++){
    child = document.createElement('div');
    child.classList.add(`div`);
    child.setAttribute('style', `color: red; border: 1px solid black; flex-grow: 1; height:${700/n}px; width:${700/n}px; border: 0`);
    /*child.textContent = 'a';*/
    container.appendChild(child);
}

const divs = document.querySelectorAll('.div');
divs.forEach((div) => {
    div.addEventListener('mouseover', () =>{
        /*div.setAttribute('style', 'background-color: black');*/
        div.classList.add('over');
    });
});