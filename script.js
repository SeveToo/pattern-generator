const gridOfLabirynt = document.querySelector(
  ".gridOfLabirynt"
);

const patternButton = document.querySelector(
  ".patternButton"
);

let numberOfColumns = 20;
let numberOfRows = 10;

function setStyleOfLabirynt() {
  gridOfLabirynt.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;
  gridOfLabirynt.style.gridTemplateRows = `repeat(${numberOfRows}, 1fr)`;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function chooseColor(newBox, row, column) {
  if ((row + column / 1.5) % 1 == 0) {
    newBox.classList.add("c1");
  }
  if ((row * column) % 21 == 0) {
    newBox.classList.add("c2");
  }
  if (((row * row) / 2) % 3 == 0) {
    newBox.classList.add("c3");
  }
  if (((row + column) * (row - column)) % 10 == 0) {
    newBox.classList.add("c4");
  }
}

function roundedCorners(newBox) {
  if (rand(1, 2) === 2) {
    if (rand(1, 4) === rand(2, 6)) {
      newBox.style.borderRadius = `${rand(20, 30)}px 0 0 0`;
    }
    if (rand(1, 4) === rand(2, 6)) {
      newBox.style.borderRadius = `0 ${rand(
        20,
        30
      )}px  0 0`;
    }
    if (rand(1, 4) === rand(2, 6)) {
      newBox.style.borderRadius = `0 0 ${rand(
        20,
        30
      )}px   0`;
    }
    if (rand(1, 4) === rand(2, 6)) {
      newBox.style.borderRadius = `0 0 0 ${rand(
        20,
        30
      )}px   `;
    }
  }
}

function createBoxOfLabirynt(row, column) {
  let newBox = document.createElement("div");
  newBox.classList.add("boxOfLabirynt");
  newBox.setAttribute("data-row", row);
  newBox.setAttribute("data-column", column);

  chooseColor(newBox, row, column);
  roundedCorners(newBox);
  // newBox.textContent = `${row} ${column}`;
  gridOfLabirynt.append(newBox);
}

function generateDefaultBoxes() {
  for (let i = 1; i <= numberOfColumns; i++) {
    for (let j = 1; j <= numberOfRows; j++) {
      createBoxOfLabirynt(i, j);
    }
  }
}

function newPattern() {
  // if (numberOfColumns < 20) numberOfColumns++;
  // else numberOfColumns = 10;
  // if (numberOfRows < 20) numberOfRows++;
  // else numberOfRows = 10;
  numberOfColumns = rand(3, 50);
  numberOfRows = rand(3, 50);
  setStyleOfLabirynt();
  generateDefaultBoxes();
}

window.onload = () => {
  setStyleOfLabirynt();
  generateDefaultBoxes();
};

patternButton.addEventListener("click", () => {
  newPattern();
});
