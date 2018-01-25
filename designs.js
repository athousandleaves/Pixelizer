const colorPicker  = document.getElementById("colorPicker"),
      sizePicker   = document.getElementById("sizePicker"),
      colorDiv     = document.getElementById("colorDiv"),
      colorChoices = document.getElementById("colorChoiceDiv"),
      canvas       = document.getElementById("pixel_canvas"),
      reset        = document.createElement("button"),
      radios       = document.getElementsByClassName("radio");

const makeGrid = () => {
  // display color picker and color recommendations
  colorChoices.style.display = "block";
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
  // place reset button below grid and hide sizePicker
  reset.className = "reset";
  reset.textContent = "Reset";
  document.body.appendChild(reset);
  sizePicker.style.display = 'none';
};

const paintGrid = e => {
  if (setCheck) {
    if (e.type == 'mousedown' || e.type == 'mousemove' && e.which === 1) {
      let color = setCheck.value;
      e.target.style.backgroundColor = color;
    };
    // clear cell on right click / ctrl+click
    if (e.which == 3 || e.ctrlKey) {
      e.preventDefault();
      return (e.target.style.backgroundColor = "rgb(245, 226, 234)");
    }
  }
}

// listen for clicks on the submit button
sizePicker.addEventListener("submit", e => {
  e.preventDefault();
  makeGrid();
});

// toggle radio buttons for color choices
let setCheck;
for (i = 0; i < radios.length; i++) {
  radios[i].onclick = function(e) {
    if (setCheck != this) {
      setCheck = this;
    } else {
      this.checked = false;
      setCheck = null;
    }
    canvas.addEventListener("mousedown", paintGrid);
    canvas.addEventListener("mousemove", paintGrid);
    // remove right click menu
    canvas.addEventListener('contextmenu', e => { 
      e.preventDefault();
    }, false);
  };
}

// reset grid
reset.addEventListener("click", () => {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
  colorDiv.style.display = "none";
  colorChoices.style.display = "none";
  sizePicker.style.display = 'inherit';
  document.body.removeChild(reset);
});