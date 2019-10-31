// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const table = document.getElementById('pixelCanvas');
const size = document.getElementById('sizePicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
//prevent from running before submitted
// event name is submit, and it is fired when the submit button is pressed
size.addEventListener('submit', function(event){
  event.preventDefault();
  const height = inputHeight.value;
  const width = inputWidth.value;
  makeGrid(width, height);
});


// function for drawing grid.
function makeGrid(width, height){
  table.innerHTML = "";
  for (let i = 0; i < height; i++){
    // creates a table row
    const row = document.createElement('tr');
    for (let j = 0; j < width; j++){
      const cell = document.createElement("td");
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  //adding color to cells
  const cells = document.querySelectorAll('td');
  cells.forEach((cell) => {
    cell.addEventListener('click',function(){
      const color = colorPicker.value;
      cell.style.backgroundColor = color;
    });
  })

}

// Alternative to forEach loop
/*  for(let i = 0; i < cells.length; i++)
    cells[i].addEventListener('click',function(){
      cells[i].style.backgroundColor = color;
      */
