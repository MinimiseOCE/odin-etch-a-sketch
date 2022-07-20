function makeGrid (cSize) {
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


makeGrid(16)

const cells = document.querySelectorAll('td');

for (const box of cells) {
    box.addEventListener('mouseover', function handleClick() {
        box.classList.add(color);
  });
}

const yellow = document.querySelector('#yellow');
yellow.addEventListener('click', function (e) { 
    color = 'yellow'
} );

const green = document.querySelector('#green');
green.addEventListener('click', function (e) { 
    color = 'green'
} );

const blue = document.querySelector('#blue');
blue.addEventListener('click', function (e) { 
    color = 'blue'
} );

const purple = document.querySelector('#purple');
purple.addEventListener('click', function (e) { 
    color = 'purple'
} );

const red = document.querySelector('#red');
red.addEventListener('click', function (e) { 
    color = 'red'
} );

const orange = document.querySelector('#orange');
orange.addEventListener('click', function (e) { 
    color = 'orange'
} );