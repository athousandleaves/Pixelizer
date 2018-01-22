const colorPicker = document.getElementById("colorPicker"),
      sizePicker  = document.getElementById("sizePicker"),
      colorDiv    = document.getElementById("colorDiv"),
      canvas      = document.getElementById("pixel_canvas"),
      reset       = document.createElement("button");

const makeGrid = () => {
  // display color picker
  colorDiv.style.display = "grid";
  // set up grid
  let height = document.getElementById("input_height").value;
  let width = document.getElementById("input_width").value;
  // create rows
  for (let x = 0; x < height; x++) {
    let tr = document.createElement("tr");
    canvas.appendChild(tr);
    // create columns
    for (let y = 0; y < width; y++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
  }
  // place reset button below grid
  reset.className = "reset";
  reset.textContent = "Reset";
  document.body.appendChild(reset);
};

// listen for clicks on the submit button
sizePicker.addEventListener('submit', (e) => {
  e.preventDefault();
  makeGrid();
});

// paint the canvas
canvas.addEventListener('mousedown', (e) => {
  if(e.which == 3 || e.ctrlKey) {
    e.preventDefault();
    // clear cell on right click / ctrl+click
   return e.target.style.backgroundColor = 'inherit';
  }
  let color = colorPicker.value;
  e.target.style.backgroundColor = color;
});
