let playerVsPlayer = document.querySelector("#playerVSplayer");
let playerVsCpu = document.querySelector("#playerVScpu");
let gameModeDisplay = document.querySelector("#gameMode");
let reset = document.querySelector("#reset");

//Jugador 1, rojas. Jugador 2, amarillas.
let turn = 1;

let casillas = [
  {
    col: 1,
    row: 1,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col1row1"),
  },
  {
    col: 2,
    row: 1,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col2row1"),
  },
  {
    col: 3,
    row: 1,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col3row1"),
  },
  {
    col: 4,
    row: 1,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col4row1"),
  },
  {
    col: 5,
    row: 1,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col5row1"),
  },
  {
    col: 6,
    row: 1,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col6row1"),
  },
  {
    col: 7,
    row: 1,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col7row1"),
  },

  {
    col: 1,
    row: 2,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col1row2"),
  },
  {
    col: 2,
    row: 2,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col2row2"),
  },
  {
    col: 3,
    row: 2,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col3row2"),
  },
  {
    col: 4,
    row: 2,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col4row2"),
  },
  {
    col: 5,
    row: 2,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col5row2"),
  },
  {
    col: 6,
    row: 2,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col6row2"),
  },
  {
    col: 7,
    row: 2,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col7row2"),
  },

  {
    col: 1,
    row: 3,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col1row3"),
  },
  {
    col: 2,
    row: 3,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col2row3"),
  },
  {
    col: 3,
    row: 3,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col3row3"),
  },
  {
    col: 4,
    row: 3,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col4row3"),
  },
  {
    col: 5,
    row: 3,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col5row3"),
  },
  {
    col: 6,
    row: 3,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col6row3"),
  },
  {
    col: 7,
    row: 3,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col7row3"),
  },

  {
    col: 1,
    row: 4,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col1row4"),
  },
  {
    col: 2,
    row: 4,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col2row4"),
  },
  {
    col: 3,
    row: 4,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col3row4"),
  },
  {
    col: 4,
    row: 4,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col4row4"),
  },
  {
    col: 5,
    row: 4,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col5row4"),
  },
  {
    col: 6,
    row: 4,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col6row4"),
  },
  {
    col: 7,
    row: 4,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col7row4"),
  },

  {
    col: 1,
    row: 5,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col1row5"),
  },
  {
    col: 2,
    row: 5,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col2row5"),
  },
  {
    col: 3,
    row: 5,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col3row5"),
  },
  {
    col: 4,
    row: 5,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col4row5"),
  },
  {
    col: 5,
    row: 5,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col5row5"),
  },
  {
    col: 6,
    row: 5,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col6row5"),
  },
  {
    col: 7,
    row: 5,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col7row5"),
  },

  {
    col: 1,
    row: 6,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col1row6"),
  },
  {
    col: 2,
    row: 6,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col2row6"),
  },
  {
    col: 3,
    row: 6,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col3row6"),
  },
  {
    col: 4,
    row: 6,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col4row6"),
  },
  {
    col: 5,
    row: 6,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col5row6"),
  },
  {
    col: 6,
    row: 6,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col6row6"),
  },
  {
    col: 7,
    row: 6,
    isRed: false,
    isYellow: false,
    element: document.querySelector("#col7row6"),
  },
];

const resetFunc = () => {
  for (casilla of casillas) {
    casilla.element.classList = "casilla";
    casilla.element.removeEventListener("click", addRed);
    casilla.element.removeEventListener("click", addYellow);
    casilla.element.addEventListener("click", addRed);
  }
};

reset.addEventListener("click", resetFunc);

//JcJ 1, JcCPU 2
let gameMode = 1;

playerVsPlayer.addEventListener("click", () => {
  gameMode = 1;
  resetFunc();
  gameModeDisplay.textContent = "Gamemode: Player vs Player";
});
playerVsCpu.addEventListener("click", () => {
  gameMode = 2;
  resetFunc();
  gameModeDisplay.textContent = "Gamemode: Player vs CPU";
});

let cpuDecision = () => {
  console.log("----------------------------------------------");
  console.log("Thinking...");
  let casillasVacias = casillas.filter(
    (x) =>
      !x.element.classList.contains("yellow") &&
      !x.element.classList.contains("red")
  );
  casillasRojas = casillas.filter((x) => x.element.classList.contains("red"));
  //prettier-ignore
  casillasAmarillas = casillas.filter((x) => x.element.classList.contains("yellow"));
  let cpuYellow = (colNum) => {
    console.log("Playing a chip");
    let col = casillas.filter((x) => x.col == colNum);
    for (box of col) {
      if (
        !box.element.classList.contains("yellow") &&
        !box.element.classList.contains("red")
      ) {
        box.element.classList.toggle("yellow");
        break;
      }
    }
    for (casilla of casillas) {
      casilla.element.removeEventListener("click", addYellow);
      casilla.element.addEventListener("click", addRed);
    }
    turn == 1 ? (turn = 2) : (turn = 1);
  };
  let checkWinningPlay = (color) => {
    console.log("Check win of", color);
    let casillaPeligrosa;
    let casillas;
    let colorPeligroso = "";
    let posibleWin = false;
    if (color == "red") {
      casillas = casillasRojas;
      colorPeligroso = "yellow";
    } else {
      casillas = casillasAmarillas;
      colorPeligroso = "red";
    }
    //Comprueba lineas verticales por separado
    for (let i = 0; i < casillas.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillas.length; j++) {
        if (
          casillas[j].col == casillas[i].col &&
          casillas[i].row - casillas[j].row == 1
        ) {
          consecutive++;
        } else if (
          casillas[j].col == casillas[i].col &&
          casillas[i].row - casillas[j].row == 2
        ) {
          consecutive++;
        }
      }
      if (consecutive == 2) {
        casillaPeligrosa = casillas[i];
        let fichaUp = document.querySelector(
          `#col${casillaPeligrosa.col}row${casillaPeligrosa.row + 1}`
        );
        if (!fichaUp.classList.contains(colorPeligroso)) {
          let col = casillaPeligrosa.col;
          console.log(`Oportunity for ${color} in`, col);
          cpuYellow(col);
          posibleWin = true;
        }
      }
    }
    //Comprueba lineas horizontal
    for (let i = 0; i < casillas.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillas.length; j++) {
        if (
          casillas[i].col - casillas[j].col == 1 &&
          casillas[j].row == casillas[i].row
        ) {
          consecutive++;
        } else if (
          casillas[i].col - casillas[j].col == 2 &&
          casillas[j].row == casillas[i].row
        ) {
          consecutive++;
        }
      }
      if (consecutive == 2) {
        casillaPeligrosa = casillas[i];
        let row = casillaPeligrosa.row;
        let colDer = casillaPeligrosa.col + 1;
        let colIzq = casillaPeligrosa.col - 3;
        let fichaDer = document.querySelector(`#col${colDer}row${row}`);
        let fichaIzq = document.querySelector(`#col${colIzq}row${row}`);
        if (fichaDer && fichaIzq) {
          if (
            !fichaIzq.classList.contains(colorPeligroso) ||
            !fichaDer.classList.contains(colorPeligroso)
          ) {
            if (
              !fichaIzq.classList.contains(colorPeligroso) &&
              fichaDer.classList.contains(colorPeligroso)
            ) {
              console.log(`Oportunity for ${color} in`, colIzq);
              cpuYellow(colIzq);
              posibleWin = true;
            } else if (
              !fichaDer.classList.contains(colorPeligroso) &&
              fichaIzq.classList.contains(colorPeligroso)
            ) {
              console.log(`Oportunity for ${color} in`, colDer);
              cpuYellow(colDer);
              posibleWin = true;
            } else {
              let random = Math.floor(Math.random() * 2);
              if (random == 1) {
                console.log(`Oportunity for ${color} in`, colDer);
                cpuYellow(colDer);
                posibleWin = true;
              } else {
                console.log(`Oportunity for ${color} in`, colIzq);
                cpuYellow(colIzq);
                posibleWin = true;
              }
            }
          }
        } else if (!fichaDer) {
          if (!fichaIzq.classList.contains(colorPeligroso)) {
            console.log(`Oportunity for ${color} in`, colIzq);
            cpuYellow(colIzq);
            posibleWin = true;
          }
        } else if (!fichaIzq) {
          if (!fichaDer.classList.contains(colorPeligroso)) {
            console.log(`Oportunity for ${color} in`, colDer);
            cpuYellow(colDer);
            posibleWin = true;
          }
        }
      }
    }
    //Comprueba linea horizontal con cierre en mitad O O X O
    for (let i = 0; i < casillasVacias.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillas.length; j++) {
        if (
          casillasVacias[i].col - casillas[j].col == 1 &&
          casillasVacias[i].row == casillas[j].row
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillas[j].col == 2 &&
          casillasVacias[i].row == casillas[j].row
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillas[j].col == -1 &&
          casillasVacias[i].row == casillas[j].row
        ) {
          consecutive++;
        }
      }
      if (consecutive == 3) {
        casillaPeligrosa = casillasVacias[i];
        console.log(`Oportunity for ${color} in`, casillaPeligrosa.col);
        cpuYellow(casillaPeligrosa.col);
        posibleWin = true;
      }
    }
    //Comprueba linea horizontal con cierre en mitad O X O O
    for (let i = 0; i < casillasVacias.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillas.length; j++) {
        if (
          casillasVacias[i].col - casillas[j].col == 1 &&
          casillasVacias[i].row == casillas[j].row
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillas[j].col == -1 &&
          casillasVacias[i].row == casillas[j].row
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillas[j].col == -2 &&
          casillasVacias[i].row == casillas[j].row
        ) {
          consecutive++;
        }
      }
      if (consecutive == 3) {
        casillaPeligrosa = casillasVacias[i];
        console.log(`Oportunity for ${color} in`, casillaPeligrosa.col);
        cpuYellow(casillaPeligrosa.col);
        posibleWin = true;
      }
    }
    //Comprueba diagonales ascendentes
    for (let i = 0; i < casillas.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillas.length; j++) {
        if (
          casillas[j].col - casillas[i].col == -1 &&
          casillas[j].row - casillas[i].row == -1
        ) {
          consecutive++;
        } else if (
          casillas[j].col - casillas[i].col == -2 &&
          casillas[j].row - casillas[i].row == -2
        ) {
          consecutive++;
        }
      }
      if (consecutive == 2) {
        casillaPeligrosa = casillas[i];
        let colDer = casillaPeligrosa.col + 1;
        let colIzq = casillaPeligrosa.col - 3;
        fichaDer = document.querySelector(
          `#col${colDer}row${casillaPeligrosa.row + 1}`
        );
        fichaIzq = document.querySelector(
          `#col${colIzq}row${casillaPeligrosa.row - 3}`
        );
        if (fichaDer && fichaIzq) {
          if (
            !fichaIzq.classList.contains(colorPeligroso) ||
            !fichaDer.classList.contains(colorPeligroso)
          ) {
            if (
              !fichaIzq.classList.contains(colorPeligroso) &&
              fichaDer.classList.contains(colorPeligroso)
            ) {
              console.log(`Oportunity for ${color} in`, colIzq);
              cpuYellow(colIzq);
              posibleWin = true;
            } else if (
              !fichaDer.classList.contains(colorPeligroso) &&
              fichaIzq.classList.contains(colorPeligroso)
            ) {
              console.log(`Oportunity for ${color} in`, colDer);
              cpuYellow(colDer);
              posibleWin = true;
            } else {
              let random = Math.floor(Math.random() * 2);
              if (random == 1) {
                console.log(`Oportunity for ${color} in`, colDer);
                cpuYellow(colDer);
                posibleWin = true;
              } else {
                console.log(`Oportunity for ${color} in`, colIzq);
                cpuYellow(colIzq);
                posibleWin = true;
              }
            }
          }
        } else if (!fichaDer) {
          if (!fichaIzq.classList.contains(colorPeligroso)) {
            console.log(`Oportunity for ${color} in`, colIzq);
            cpuYellow(colIzq);
            posibleWin = true;
          }
        } else if (!fichaIzq) {
          if (!fichaDer.classList.contains(colorPeligroso)) {
            console.log(`Oportunity for ${color} in`, colDer);
            cpuYellow(colDer);
            posibleWin = true;
          }
        }
      }
    }
    //Comprueba diagonales ascendentes con cierre en mitad X X O X
    for (let i = 0; i < casillasVacias.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillas.length; j++) {
        if (
          casillasVacias[i].col - casillas[j].col == -1 &&
          casillasVacias[i].row - casillas[j].row == -1
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillas[j].col == 1 &&
          casillasVacias[i].row - casillas[j].row == 1
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillas[j].col == 2 &&
          casillasVacias[i].row - casillas[j].row == 2
        ) {
          consecutive++;
        }
      }
      if (consecutive == 3) {
        casillaPeligrosa = casillasVacias[i];
        console.log(`Oportunity for ${color} in`, casillaPeligrosa.col);
        cpuYellow(casillaPeligrosa.col);
        posibleWin = true;
      }
    }
    //Comprueba diagonales descendentes con cierre en mitad X O X X
    for (let i = 0; i < casillasVacias.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillas.length; j++) {
        if (
          casillasVacias[i].col - casillas[j].col == 1 &&
          casillasVacias[i].row - casillas[j].row == 1
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillas[j].col == -1 &&
          casillasVacias[i].row - casillas[j].row == -1
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillas[j].col == -2 &&
          casillasVacias[i].row - casillas[j].row == -2
        ) {
          consecutive++;
        }
      }
      if (consecutive == 3) {
        casillaPeligrosa = casillasVacias[i];
        console.log(`Oportunity for ${color} in`, casillaPeligrosa.col);
        cpuYellow(casillaPeligrosa.col);
        posibleWin = true;
      }
    }
    //Comprueba diagonales descendentes
    for (let i = 0; i < casillas.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillas.length; j++) {
        if (
          casillas[j].col - casillas[i].col == 1 &&
          casillas[j].row - casillas[i].row == -1
        ) {
          consecutive++;
        } else if (
          casillas[j].col - casillas[i].col == 2 &&
          casillas[j].row - casillas[i].row == -2
        ) {
          consecutive++;
        }
      }
      if (consecutive == 2) {
        casillaPeligrosa = casillas[i];
        let colDer = casillaPeligrosa.col + 3;
        let colIzq = casillaPeligrosa.col - 1;
        fichaDer = document.querySelector(
          `#col${colDer}row${casillaPeligrosa.row - 3}`
        );
        fichaIzq = document.querySelector(
          `#col${colIzq}row${casillaPeligrosa.row + 1}`
        );
        if (fichaDer && fichaIzq) {
          if (
            !fichaIzq.classList.contains(colorPeligroso) ||
            !fichaDer.classList.contains(colorPeligroso)
          ) {
            if (
              !fichaIzq.classList.contains(colorPeligroso) &&
              fichaDer.classList.contains(colorPeligroso)
            ) {
              console.log(`Oportunity for ${color} in`, colIzq);
              cpuYellow(colIzq);
              posibleWin = true;
            } else if (
              !fichaDer.classList.contains(colorPeligroso) &&
              fichaIzq.classList.contains(colorPeligroso)
            ) {
              console.log(`Oportunity for ${color} in`, colDer);
              cpuYellow(colDer);
              posibleWin = true;
            } else {
              let random = Math.floor(Math.random() * 2);
              if (random == 1) {
                console.log(`Oportunity for ${color} in`, colDer);
                cpuYellow(colDer);
                posibleWin = true;
              } else {
                console.log(`Oportunity for ${color} in`, colIzq);
                cpuYellow(colIzq);
                posibleWin = true;
              }
            }
          }
        } else if (!fichaDer && fichaIzq) {
          if (!fichaIzq.classList.contains(colorPeligroso)) {
            console.log(`Oportunity for ${color} in`, colIzq);
            cpuYellow(colIzq);
            posibleWin = true;
          }
        } else if (!fichaIzq && fichaDer) {
          if (!fichaDer.classList.contains(colorPeligroso)) {
            console.log(`Oportunity for ${color} in`, colDer);
            cpuYellow(colDer);
            posibleWin = true;
          }
        }
      }
    }
    //Comprueba diagonales ascendentes con cierre en mitad X X O X
    for (let i = 0; i < casillasVacias.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillas.length; j++) {
        if (
          casillasVacias[i].col - casillas[j].col == -1 &&
          casillasVacias[i].row - casillas[j].row == 1
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillas[j].col == 1 &&
          casillasVacias[i].row - casillas[j].row == -1
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillas[j].col == 2 &&
          casillasVacias[i].row - casillas[j].row == -2
        ) {
          consecutive++;
        }
      }
      if (consecutive == 3) {
        casillaPeligrosa = casillasVacias[i];
        console.log(`Oportunity for ${color} in`, casillaPeligrosa.col);
        cpuYellow(casillaPeligrosa.col);
        posibleWin = true;
      }
    }
    //Comprueba diagonales ascendentes con cierre en mitad X O X X
    for (let i = 0; i < casillasVacias.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillas.length; j++) {
        if (
          casillasVacias[i].col - casillas[j].col == 1 &&
          casillasVacias[i].row - casillas[j].row == -1
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillas[j].col == -1 &&
          casillasVacias[i].row - casillas[j].row == 1
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillas[j].col == -2 &&
          casillasVacias[i].row - casillas[j].row == 2
        ) {
          consecutive++;
        }
      }
      if (consecutive == 3) {
        casillaPeligrosa = casillasVacias[i];
        console.log(`Oportunity for ${color} in`, casillaPeligrosa.col);
        cpuYellow(casillaPeligrosa.col);
        posibleWin = true;
      }
    }
    return posibleWin;
  };
  let nextMove = () => {
    if (casillasAmarillas.length == 0) {
      let ranCol = Math.floor(Math.random() * 7 + 1);
      console.log(`Let´s start with...`, ranCol);
      return cpuYellow(ranCol);
    } else {
      
        for (let i = 0; i < casillasAmarillas.length; i++) {
          let fichaDer1;
          let fichaDer2;
          let fichaIzq1;
          let fichaIzq2;
          let fichaUp1;
          let fichaUp2;
          for (let j = 0; j < casillasAmarillas.length; j++) {
            //Dos vertical
            if (
              casillasAmarillas[i].row - casillasAmarillas[j].row == 1 &&
              casillasAmarillas[i].col == casillasAmarillas[j].col
            ) {
              fichaUp1 = document.querySelector(
                `#col${casillasAmarillas[i].col}row${
                  casillasAmarillas[i].row + 1
                }`
              );
              fichaUp2 = document.querySelector(
                `#col${casillasAmarillas[i].col}row${
                  casillasAmarillas[i].row + 2
                }`
              );
              if (
                fichaUp1 &&
                fichaUp2 &&
                !fichaUp1.classList.contains("red") &&
                !fichaUp1.classList.contains("yellow") &&
                !fichaUp2.classList.contains("red") &&
                !fichaUp2.classList.contains("yellow")
              ) {
                console.log("I´d put a chip in", casillasAmarillas[i].col);
                return cpuYellow(casillasAmarillas[i].col);
              }
            }
            //Dos horizontal
            else if (
              casillasAmarillas[i].col - casillasAmarillas[j].col == 1 &&
              casillasAmarillas[i].row == casillasAmarillas[j].row
            ) {
              fichaDer1 = document.querySelector(
                `#col${casillasAmarillas[i].col + 1}row${
                  casillasAmarillas[i].row
                }`
              );
              fichaDer2 = document.querySelector(
                `#col${casillasAmarillas[i].col + 2}row${
                  casillasAmarillas[i].row
                }`
              );
              fichaIzq1 = document.querySelector(
                `#col${casillasAmarillas[i].col - 2}row${
                  casillasAmarillas[i].row
                }`
              );
              fichaIzq2 = document.querySelector(
                `#col${casillasAmarillas[i].col - 3}row${
                  casillasAmarillas[i].row
                }`
              );
              //Supuesto de que existen 2 huecos a cada lado
              if (fichaDer1 && fichaDer2 && fichaIzq1 && fichaIzq2) {
                if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaDer2.classList.contains("red") &&
                  !fichaDer2.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col + 1
                  );
                  return cpuYellow(casillasAmarillas[i].col + 1);
                } else if (
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow") &&
                  !fichaIzq2.classList.contains("red") &&
                  !fichaIzq2.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col - 2
                  );
                  return cpuYellow(casillasAmarillas[i].col - 2);
                } else if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow")
                ) {
                  if (Math.floor(Math.random() * 2 + 1) == 1) {
                    console.log(
                      "I´d put a chip in",
                      casillasAmarillas[i].col + 1
                    );
                    return cpuYellow(casillasAmarillas[i].col + 1);
                  } else {
                    console.log(
                      "I´d put a chip in",
                      casillasAmarillas[i].col - 2
                    );
                    return cpuYellow(casillasAmarillas[i].col - 2);
                  }
                }
                //Supuesto de que las 2 fichas están pegadas al borde izquierdo
              } else if (fichaDer1 && fichaDer2) {
                if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaDer2.classList.contains("red") &&
                  !fichaDer2.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col + 1
                  );
                  return cpuYellow(casillasAmarillas[i].col + 1);
                }
                //Supuesto de que las 2 fichas están pegadas al borde derecho del tablero
              } else if (fichaIzq1 && fichaIzq2) {
                if (
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow") &&
                  !fichaIzq2.classList.contains("red") &&
                  !fichaIzq2.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col - 2
                  );
                  return cpuYellow(casillasAmarillas[i].col - 2);
                }
                //Supuesto de que las 2 fichas están a un espacio del borde izquierdo del tablero
              } else if (fichaIzq1 && fichaDer1 && fichaDer2) {
                if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaDer2.classList.contains("red") &&
                  !fichaDer2.classList.contains("yellow") &&
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col - 2
                  );
                  return cpuYellow(casillasAmarillas[i].col - 2);
                }
                //Supuesto de que las 2 fichas están a un espacio del borde derecho del tablero
              } else if (fichaIzq1 && fichaIzq2 && fichaDer1) {
                if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaIzq2.classList.contains("red") &&
                  !fichaIzq2.classList.contains("yellow") &&
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col + 1
                  );
                  return cpuYellow(casillasAmarillas[i].col + 1);
                }
              }
            }
            //Dos diagonal ascendente
            else if (
              casillasAmarillas[i].row - casillasAmarillas[j].row == 1 &&
              casillasAmarillas[i].col - casillasAmarillas[j].col == 1
            ) {
              fichaDer1 = document.querySelector(
                `#col${casillasAmarillas[i].col + 1}row${
                  casillasAmarillas[i].row + 1
                }`
              );
              fichaDer2 = document.querySelector(
                `#col${casillasAmarillas[i].col + 2}row${
                  casillasAmarillas[i].row + 2
                }`
              );
              fichaIzq1 = document.querySelector(
                `#col${casillasAmarillas[i].col - 2}row${
                  casillasAmarillas[i].row - 2
                }`
              );
              fichaIzq2 = document.querySelector(
                `#col${casillasAmarillas[i].col - 3}row${
                  casillasAmarillas[i].row - 3
                }`
              );
              //Supuesto de que existen 2 huecos a cada lado
              if (fichaDer1 && fichaDer2 && fichaIzq1 && fichaIzq2) {
                if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaDer2.classList.contains("red") &&
                  !fichaDer2.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col + 1
                  );
                  return cpuYellow(casillasAmarillas[i].col + 1);
                } else if (
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow") &&
                  !fichaIzq2.classList.contains("red") &&
                  !fichaIzq2.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col - 2
                  );
                  return cpuYellow(casillasAmarillas[i].col - 2);
                } else if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow")
                ) {
                  if (Math.floor(Math.random() * 2 + 1) == 1) {
                    console.log(
                      "I´d put a chip in",
                      casillasAmarillas[i].col + 1
                    );
                    return cpuYellow(casillasAmarillas[i].col + 1);
                  } else {
                    console.log(
                      "I´d put a chip in",
                      casillasAmarillas[i].col - 2
                    );
                    return cpuYellow(casillasAmarillas[i].col - 2);
                  }
                }
                //Supuesto de que las 2 fichas están pegadas al borde izquierdo
              } else if (fichaDer1 && fichaDer2) {
                if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaDer2.classList.contains("red") &&
                  !fichaDer2.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col + 1
                  );
                  return cpuYellow(casillasAmarillas[i].col + 1);
                }
                //Supuesto de que las 2 fichas están pegadas al borde derecho del tablero
              } else if (fichaIzq1 && fichaIzq2) {
                if (
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow") &&
                  !fichaIzq2.classList.contains("red") &&
                  !fichaIzq2.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col - 2
                  );
                  return cpuYellow(casillasAmarillas[i].col - 2);
                }
                //Supuesto de que las 2 fichas están a un espacio del borde izquierdo del tablero
              } else if (fichaIzq1 && fichaDer1 && fichaDer2) {
                if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaDer2.classList.contains("red") &&
                  !fichaDer2.classList.contains("yellow") &&
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col - 2
                  );
                  return cpuYellow(casillasAmarillas[i].col - 2);
                }
                //Supuesto de que las 2 fichas están a un espacio del borde derecho del tablero
              } else if (fichaIzq1 && fichaIzq2 && fichaDer1) {
                if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaIzq2.classList.contains("red") &&
                  !fichaIzq2.classList.contains("yellow") &&
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col + 1
                  );
                  return cpuYellow(casillasAmarillas[i].col + 1);
                }
              }
            }
            //Dos diagonal descendente
            else if (
              casillasAmarillas[i].row - casillasAmarillas[j].row == -1 &&
              casillasAmarillas[i].col - casillasAmarillas[j].col == 1
            ) {
              fichaDer1 = document.querySelector(
                `#col${casillasAmarillas[i].col + 1}row${
                  casillasAmarillas[i].row + -1
                }`
              );
              fichaDer2 = document.querySelector(
                `#col${casillasAmarillas[i].col + 2}row${
                  casillasAmarillas[i].row - 2
                }`
              );
              fichaIzq1 = document.querySelector(
                `#col${casillasAmarillas[i].col - 3}row${
                  casillasAmarillas[i].row + 3
                }`
              );
              fichaIzq2 = document.querySelector(
                `#col${casillasAmarillas[i].col - 4}row${
                  casillasAmarillas[i].row + 4
                }`
              );
              //Supuesto de que existen 2 huecos a cada lado
              if (fichaDer1 && fichaDer2 && fichaIzq1 && fichaIzq2) {
                if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaDer2.classList.contains("red") &&
                  !fichaDer2.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col + 1
                  );
                  return cpuYellow(casillasAmarillas[i].col + 1);
                } else if (
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow") &&
                  !fichaIzq2.classList.contains("red") &&
                  !fichaIzq2.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col - 2
                  );
                  return cpuYellow(casillasAmarillas[i].col - 2);
                } else if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow")
                ) {
                  if (Math.floor(Math.random() * 2 + 1) == 1) {
                    console.log(
                      "I´d put a chip in",
                      casillasAmarillas[i].col + 1
                    );
                    return cpuYellow(casillasAmarillas[i].col + 1);
                  } else {
                    console.log(
                      "I´d put a chip in",
                      casillasAmarillas[i].col - 2
                    );
                    return cpuYellow(casillasAmarillas[i].col - 2);
                  }
                }
                //Supuesto de que las 2 fichas están pegadas al borde izquierdo
              } else if (fichaDer1 && fichaDer2) {
                if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaDer2.classList.contains("red") &&
                  !fichaDer2.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col + 1
                  );
                  return cpuYellow(casillasAmarillas[i].col + 1);
                }
                //Supuesto de que las 2 fichas están pegadas al borde derecho del tablero
              } else if (fichaIzq1 && fichaIzq2) {
                if (
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow") &&
                  !fichaIzq2.classList.contains("red") &&
                  !fichaIzq2.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col - 2
                  );
                  return cpuYellow(casillasAmarillas[i].col - 2);
                }
                //Supuesto de que las 2 fichas están a un espacio del borde izquierdo del tablero
              } else if (fichaIzq1 && fichaDer1 && fichaDer2) {
                if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaDer2.classList.contains("red") &&
                  !fichaDer2.classList.contains("yellow") &&
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col - 2
                  );
                  return cpuYellow(casillasAmarillas[i].col - 2);
                }
                //Supuesto de que las 2 fichas están a un espacio del borde derecho del tablero
              } else if (fichaIzq1 && fichaIzq2 && fichaDer1) {
                if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer1.classList.contains("yellow") &&
                  !fichaIzq2.classList.contains("red") &&
                  !fichaIzq2.classList.contains("yellow") &&
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("yellow")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col + 1
                  );
                  return cpuYellow(casillasAmarillas[i].col + 1);
                }
              }
            }
            //Una casillas aislada
            else {
              //Definir casillas de juego
              // prettier-ignore
              let fichaUp1 = document.querySelector(`#col${casillasAmarillas[i].col}row${casillasAmarillas[i].row + 1}`);
              let fichaUp2 = document.querySelector(`#col${casillasAmarillas[i].col}row${casillasAmarillas[i].row + 2}`);
              let fichaUp3 = document.querySelector(`#col${casillasAmarillas[i].col}row${casillasAmarillas[i].row + 3}`);
              let fichaDer1 = document.querySelector(`#col${casillasAmarillas[i].col + 1}row${casillasAmarillas[i].row}`);
              let fichaDer2 = document.querySelector(`#col${casillasAmarillas[i].col + 2}row${casillasAmarillas[i].row}`);
              let fichaDer3 = document.querySelector(`#col${casillasAmarillas[i].col + 3}row${casillasAmarillas[i].row}`);
              let fichaIzq1 = document.querySelector(`#col${casillasAmarillas[i].col - 1}row${casillasAmarillas[i].row}`);
              let fichaIzq2 = document.querySelector(`#col${casillasAmarillas[i].col - 2}row${casillasAmarillas[i].row}`);
              let fichaIzq3 = document.querySelector(`#col${casillasAmarillas[i].col - 3}row${casillasAmarillas[i].row}`);
              let fichaDaDer1 = document.querySelector(`#col${casillasAmarillas[i].col + 1}row${casillasAmarillas[i].row + 1}`);
              let fichaDaDer2 = document.querySelector(`#col${casillasAmarillas[i].col + 2}row${casillasAmarillas[i].row + 2}`);
              let fichaDaDer3 = document.querySelector(`#col${casillasAmarillas[i].col + 3}row${casillasAmarillas[i].row + 3}`);
              let fichaDaIzq1 = document.querySelector(`#col${casillasAmarillas[i].col - 1}row${casillasAmarillas[i].row - 1}`);
              let fichaDaIzq2 = document.querySelector(`#col${casillasAmarillas[i].col - 2}row${casillasAmarillas[i].row - 2}`);
              let fichaDaIzq3 = document.querySelector(`#col${casillasAmarillas[i].col - 3}row${casillasAmarillas[i].row - 3}`);
              let fichaDdDer1 = document.querySelector(`#col${casillasAmarillas[i].col + 1}row${casillasAmarillas[i].row - 1}`);
              let fichaDdDer2 = document.querySelector(`#col${casillasAmarillas[i].col + 2}row${casillasAmarillas[i].row - 2}`);
              let fichaDdDer3 = document.querySelector(`#col${casillasAmarillas[i].col + 3}row${casillasAmarillas[i].row - 3}`);
              let fichaDdIzq1 = document.querySelector(`#col${casillasAmarillas[i].col - 1}row${casillasAmarillas[i].row + 1}`);
              let fichaDdIzq2 = document.querySelector(`#col${casillasAmarillas[i].col - 2}row${casillasAmarillas[i].row + 2}`);
              let fichaDdIzq3 = document.querySelector(`#col${casillasAmarillas[i].col - 3}row${casillasAmarillas[i].row + 3}`);
              
              //Comprobar la horizontal
              if (
                fichaDer1 &&
                fichaDer2 &&
                fichaDer3 &&
                fichaIzq1 &&
                fichaIzq2 &&
                fichaIzq3
              ) {
                if (
                  (!fichaDer1.classList.contains("red") &&
                    !fichaDer2.classList.contains("red") &&
                    !fichaDer3.classList.contains("red")) ||
                  (!fichaDer1.classList.contains("red") &&
                    !fichaDer2.classList.contains("red") &&
                    !fichaIzq1.classList.contains("red"))
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col + 1
                  );
                  return cpuYellow(casillasAmarillas[i].col + 1);
                } else if (
                  (!fichaIzq1.classList.contains("red") &&
                    !fichaIzq2.classList.contains("red") &&
                    !fichaIzq3.classList.contains("red")) ||
                  (!fichaDer1.classList.contains("red") &&
                    !fichaIzq1.classList.contains("red") &&
                    !fichaIzq2.classList.contains("red"))
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col - 1
                  );
                  return cpuYellow(casillasAmarillas[i].col - 1);
                }
              } else if (!fichaIzq3 && fichaIzq2) {
                if (
                  (!fichaDer1.classList.contains("red") &&
                    !fichaDer2.classList.contains("red") &&
                    !fichaDer3.classList.contains("red")) ||
                  (!fichaDer1.classList.contains("red") &&
                    !fichaDer2.classList.contains("red") &&
                    !fichaIzq1.classList.contains("red"))
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col + 1
                  );
                  return cpuYellow(casillasAmarillas[i].col + 1);
                } else if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq2.classList.contains("red")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col - 1
                  );
                  return cpuYellow(casillasAmarillas[i].col - 1);
                }
              } else if (!fichaDer3 && fichaDer2) {
                if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer2.classList.contains("red") &&
                  !fichaIzq1.classList.contains("red")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col + 1
                  );
                  return cpuYellow(casillasAmarillas[i].col + 1);
                } else if (
                  (!fichaIzq1.classList.contains("red") &&
                    !fichaIzq2.classList.contains("red") &&
                    !fichaIzq3.classList.contains("red")) ||
                  (!fichaDer1.classList.contains("red") &&
                    !fichaIzq1.classList.contains("red") &&
                    !fichaIzq2.classList.contains("red"))
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col - 1
                  );
                  return cpuYellow(casillasAmarillas[i].col - 1);
                }
              } else if (!fichaIzq2 && fichaIzq1) {
                if (
                  (!fichaDer1.classList.contains("red") &&
                    !fichaDer2.classList.contains("red") &&
                    !fichaDer3.classList.contains("red")) ||
                  (!fichaDer1.classList.contains("red") &&
                    !fichaDer2.classList.contains("red") &&
                    !fichaIzq1.classList.contains("red"))
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col + 1
                  );
                  return cpuYellow(casillasAmarillas[i].col + 1);
                }
              } else if (!fichaDer2 && fichaDer1) {
                if (
                  (!fichaIzq1.classList.contains("red") &&
                    !fichaIzq2.classList.contains("red") &&
                    !fichaIzq3.classList.contains("red")) ||
                  (!fichaDer1.classList.contains("red") &&
                    !fichaIzq1.classList.contains("red") &&
                    !fichaIzq2.classList.contains("red"))
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col - 1
                  );
                  return cpuYellow(casillasAmarillas[i].col - 1);
                }
              } else if (!fichaDer1) {
                if (
                  !fichaIzq1.classList.contains("red") &&
                  !fichaIzq2.classList.contains("red") &&
                  !fichaIzq3.classList.contains("red")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col - 1
                  );
                  return cpuYellow(casillasAmarillas[i].col - 1);
                }
              } else if (!fichaIzq1) {
                if (
                  !fichaDer1.classList.contains("red") &&
                  !fichaDer2.classList.contains("red") &&
                  !fichaDer3.classList.contains("red")
                ) {
                  console.log(
                    "I´d put a chip in",
                    casillasAmarillas[i].col + 1
                  );
                  return cpuYellow(casillasAmarillas[i].col + 1);
                }
              }
              //Comprobar posible vertical
              if (fichaUp1 && fichaIzq2 && fichaUp3) {
                if (
                  !fichaUp3.classList.contains("red") &&
                  !fichaUp2.classList.contains("red") &&
                  !fichaUp1.classList.contains("red")
                ) {
                  console.log("I´d put a chip in", casillasAmarillas[i].col);
                  return cpuYellow(casillasAmarillas[i].col);
                }
              }
            }
          }
        }
      
        let ranCol = Math.floor(Math.random() * 7 + 1);
        return cpuYellow(ranCol);
      }
    }
    console.log("Could I win?");
  let winY = checkWinningPlay("yellow");
  console.log("winY", winY);
  if (winY == false) {
    console.log("May I have a threat?");
    let winR = checkWinningPlay("red");
    console.log("winR", winR);
    if (winR == false) {
      console.log("What should I do next...");
      nextMove();
    }
  }
  turn = 2;
  let isWin = isLine();
  if (isWin) {
    for (casilla of casillas) {
      casilla.element.removeEventListener("click", addRed);
      casilla.element.removeEventListener("click", addYellow);
    }
    return alert("Yellow wins!");
  }
};

let addYellow;
let addRed;

let isLine = () => {
  let casillasJugando = [];
  if (turn == 1) {
    casillasJugando = casillas.filter((x) =>
      x.element.classList.contains("red")
    );
  } else {
    casillasJugando = casillas.filter((x) =>
      x.element.classList.contains("yellow")
    );
  }

  //Comprueba lineas verticales por separado

  for (let i = 0; i < casillasJugando.length; i++) {
    let consecutive = 0;
    for (let j = 0; j < casillasJugando.length; j++) {
      if (
        casillasJugando[j].col == casillasJugando[i].col &&
        casillasJugando[j].row - casillasJugando[i].row == 1
      ) {
        consecutive++;
      } else if (
        casillasJugando[j].col == casillasJugando[i].col &&
        casillasJugando[j].row - casillasJugando[i].row == 2
      ) {
        consecutive++;
      } else if (
        casillasJugando[j].col == casillasJugando[i].col &&
        casillasJugando[j].row - casillasJugando[i].row == 3
      ) {
        consecutive++;
      }
    }
    if (consecutive == 3) {
      return true;
    }
  }

  //Comprueba lineas horizontales por separado

  for (let i = 0; i < casillasJugando.length; i++) {
    let consecutive = 0;
    for (let j = 0; j < casillasJugando.length; j++) {
      if (
        casillasJugando[j].col - casillasJugando[i].col == 1 &&
        casillasJugando[j].row == casillasJugando[i].row
      ) {
        consecutive++;
      } else if (
        casillasJugando[j].col - casillasJugando[i].col == 2 &&
        casillasJugando[j].row == casillasJugando[i].row
      ) {
        consecutive++;
      } else if (
        casillasJugando[j].col - casillasJugando[i].col == 3 &&
        casillasJugando[j].row == casillasJugando[i].row
      ) {
        consecutive++;
      }
    }
    if (consecutive == 3) {
      console.log("Horizontal line!");
      return true;
    }
  }

  //Comprueba diagonales ascendentes

  for (let i = 0; i < casillasJugando.length; i++) {
    let consecutive = 0;
    for (let j = 0; j < casillasJugando.length; j++) {
      if (
        casillasJugando[j].col - casillasJugando[i].col == 1 &&
        casillasJugando[j].row - casillasJugando[i].row == 1
      ) {
        consecutive++;
      } else if (
        casillasJugando[j].col - casillasJugando[i].col == 2 &&
        casillasJugando[j].row - casillasJugando[i].row == 2
      ) {
        consecutive++;
      } else if (
        casillasJugando[j].col - casillasJugando[i].col == 3 &&
        casillasJugando[j].row - casillasJugando[i].row == 3
      ) {
        consecutive++;
      }
    }
    if (consecutive == 3) {
      console.log("Diagonal asceding line!");

      return true;
    }
  }

  //Comprueba diagonales descendentes

  for (let i = 0; i < casillasJugando.length; i++) {
    let consecutive = 0;
    for (let j = 0; j < casillasJugando.length; j++) {
      if (
        casillasJugando[j].col - casillasJugando[i].col == 1 &&
        casillasJugando[j].row - casillasJugando[i].row == -1
      ) {
        consecutive++;
      } else if (
        casillasJugando[j].col - casillasJugando[i].col == 2 &&
        casillasJugando[j].row - casillasJugando[i].row == -2
      ) {
        consecutive++;
      } else if (
        casillasJugando[j].col - casillasJugando[i].col == 3 &&
        casillasJugando[j].row - casillasJugando[i].row == -3
      ) {
        consecutive++;
      }
    }
    if (consecutive == 3) {
      console.log("Diagonal descending line!");
      return true;
    }
  }

  return false;
};

addRed = (e) => {
  let casilla = casillas.find((x) => x.element.id == e.path[0].id);
  let columna = casillas.filter((x) => x.col == casilla.col);
  for (casilla of columna) {
    if (
      !casilla.element.classList.contains("red") &&
      !casilla.element.classList.contains("yellow")
    ) {
      casilla.element.classList.toggle("red");
      break;
    }
  }
  turn = 1;
  let win = isLine();
  if (win) {
    for (casilla of casillas) {
      casilla.element.removeEventListener("click", addRed);
      casilla.element.removeEventListener("click", addYellow);
    }
    return alert("Red wins!");
  }
  turn == 1 ? (turn = 2) : (turn = 1);
  document.querySelector("#turn").textContent = "Turno P2 (Amarillas)";

  for (casilla of casillas) {
    casilla.element.removeEventListener("click", addRed);
    casilla.element.addEventListener("click", addYellow);
  }
  if (gameMode == 2) {
    cpuDecision();
  }
};

addYellow = (e) => {
  let casilla = casillas.find((x) => x.element.id == e.path[0].id);
  let columna = casillas.filter((x) => x.col == casilla.col);
  for (casilla of columna) {
    if (
      !casilla.element.classList.contains("yellow") &&
      !casilla.element.classList.contains("red")
    ) {
      casilla.element.classList.toggle("yellow");
      break;
    }
  }
  turn = 2;
  let win = isLine();

  if (win) {
    for (casilla of casillas) {
      casilla.element.removeEventListener("click", addRed);
      casilla.element.removeEventListener("click", addYellow);
    }
    alert("Yellow wins!");
  }
  turn == 1 ? (turn = 2) : (turn = 1);
  document.querySelector("#turn").textContent = "Turno P1 (Rojas)";

  for (casilla of casillas) {
    if (isLine()) {
      casilla.element.removeEventListener("click", addYellow);
      casilla.element.removeEventListener("click", addRed);
    } else {
      casilla.element.removeEventListener("click", addYellow);
      casilla.element.addEventListener("click", addRed);
    }
  }
};

for (casilla of casillas) {
  casilla.element.addEventListener("click", addRed);
}
