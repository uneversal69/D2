import "./styles.css";
const gridSize = 10;
for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  document.getElementsByClassName("container")[0].appendChild(cell);
}
document.getElementsByClassName("container")[0].style[
  "grid-template-columns"
] = `repeat(${gridSize}, 1fr)`;
document.getElementsByClassName("container")[0].style[
  "grid-template-rows"
] = `repeat(${gridSize}, 1fr)`;

const init = () => {
  let killedFrogs = 0;
  let cells = document.getElementsByClassName("cell");
  console.log(cells);

  function generateFrog() {
    const el = document.createElement("div");
    el.innerText = "🐸";
    el.onclick = (e) => {
      killedFrogs++;
      e.target.remove();
    };
    return el;
  }
  function makeFrog() {
    let needFrog = true;
    Array.from(cells)
      .slice(0, gridSize)
      .forEach((element) => {
        if (element.getElementsByTagName("div").length > 0) {
          needFrog = false;
        }
      });
    if (!needFrog) return false;
    const randomIndex = Math.floor(Math.random() * gridSize);
    const frogEl = generateFrog();
    cells[randomIndex].appendChild(frogEl);
    return randomIndex;
  }
  function moveFrogs() {
    for (let i = 0; i < gridSize * gridSize; i++) {
      const index = gridSize * gridSize - 1 - i;
      if (index >= gridSize * gridSize - gridSize) {
        cells[index].innerHTML = "";
      }
      if (cells[index].getElementsByTagName("div").length > 0) {
        cells[index].innerHTML = "";
        const frogEl = generateFrog();
        if (cells[index + gridSize]) {
          cells[index + gridSize].appendChild(frogEl);
        }
      }
    }
  }

  const timerId = setInterval(() => {
    makeFrog();
  }, 2000);
  const timerId2 = setInterval(() => {
    moveFrogs();
    document.getElementById("killedFrogs").innerText = killedFrogs;
  }, 1000);
};
init();