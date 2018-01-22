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
