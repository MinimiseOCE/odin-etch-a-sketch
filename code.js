function makeGrid (cSize) {
    document.querySelectorAll('td').forEach(e => e.remove());
    document.querySelectorAll('tr').forEach(e => e.remove());
    let tbl = document.getElementById('canvasGrid')

    for(let i=0; i < cSize; i++) {
        let myRow = document.createElement('tr');
        myRow.id = "row" + i;

        tbl.appendChild(myRow);
        let rowW = document.getElementById('row' + i)
        for(let j=0; j < cSize; j++) {
            let myCell = document.createElement('td');
            rowW.appendChild(myCell);
        }
    }
}

let r = 0
let g = 0
let b = 0
let a = 1

const gridButton = document.querySelector('#gridder');
gridButton.addEventListener('click', function (e) { 
    let gridSize = (prompt('Grid Size:'))
    if (!isNaN(gridSize) && gridSize < 65) {

        makeGrid(gridSize)
        const cells = document.querySelectorAll('td');

        for (const box of cells) {
            box.addEventListener('click', function handleClick() {
                box.style.backgroundColor = 'rgba(' + r + ',' + g + ','  + b + ', ' + a + ')';
                r = Math.floor(Math.random() * 256);
                g = Math.floor(Math.random() * 256);
                b = Math.floor(Math.random() * 256);
        });
        }
    }
    else {
        alert('Please Select a Number up to 64')
    }
} );

const cells = document.querySelectorAll('td');
