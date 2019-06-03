
function makegridtable(height, width) {
    const pixeltable = document.getElementById("pixelCanvas");
    let gridtable = '';

    // for loop for each row
    for (let i = 0; i < height; i++) {
        gridtable += '<tr class="row-' + i + '">';
        //for loop for each cell
        for (let j = 0; j < width; j++) {
            gridtable += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        gridtable += '</tr>';
    }
    // add gridtable into pixeltable element
    pixeltable.innerHTML = gridtable;

    // Add click event to gridtable cells once the pixeltable gridtable has been created
    addClickEventToCells();
}

// gets values for height and width  from form and use them to call makegridtable()
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makegridtable(height, width);
}

// add click events to all cells
function addClickEventToCells() {
    // on selecting  color  return color:
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}

// on submit of form #sizePicker:
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};

// Build a 10x10 gridtable.
makegridtable(10, 10);
