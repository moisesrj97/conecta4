let playerVsPlayer = document.querySelector("#playerVSplayer");
let playerVsCpu = document.querySelector("#playerVScpu");

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

let cpuDecision = () => {
  console.log("Thinking...");
  let casillasVacias = casillas.filter(
    (x) =>
      !x.element.classList.contains("yellow") &&
      !x.element.classList.contains("red")
  );

  casillasRojas = casillas.filter((x) => x.element.classList.contains("red"));
  casillasAmarillas = casillas.filter((x) =>
    x.element.classList.contains("yellow")
  );

  let casillaRojaPeligrosa;

  let checkRedWin = () => {
    //Comprueba lineas verticales por separado
    for (let i = 0; i < casillasRojas.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillasRojas.length; j++) {
        if (
          casillasRojas[j].col == casillasRojas[i].col &&
          casillasRojas[i].row - casillasRojas[j].row == 1
        ) {
          consecutive++;
        } else if (
          casillasRojas[j].col == casillasRojas[i].col &&
          casillasRojas[i].row - casillasRojas[j].row == 2
        ) {
          consecutive++;
        }
      }
      if (consecutive == 2) {
        casillaRojaPeligrosa = casillasRojas[i];
        let fichaUp = document.querySelector(
          `#col${casillaRojaPeligrosa.col}row${casillaRojaPeligrosa.row + 1}`
        );
        if (!fichaUp.classList.contains("yellow")) {
          console.log("Vertical threat");
          let col = casillaRojaPeligrosa.col;
          console.log("Blocking in col", col);
        }
      }
    }

    //Comprueba lineas horizontal

    for (let i = 0; i < casillasRojas.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillasRojas.length; j++) {
        if (
          casillasRojas[i].col - casillasRojas[j].col == 1 &&
          casillasRojas[j].row == casillasRojas[i].row
        ) {
          consecutive++;
        } else if (
          casillasRojas[i].col - casillasRojas[j].col == 2 &&
          casillasRojas[j].row == casillasRojas[i].row
        ) {
          consecutive++;
        }
      }
      if (consecutive == 2) {
        casillaRojaPeligrosa = casillasRojas[i];
        let row = casillaRojaPeligrosa.row;
        let colDer = casillaRojaPeligrosa.col + 1;
        let colIzq = casillaRojaPeligrosa.col - 3;
        let fichaDer = document.querySelector(`#col${colDer}row${row}`);
        let fichaIzq = document.querySelector(`#col${colIzq}row${row}`);

        if (fichaDer && fichaIzq) {
          if (
            !fichaIzq.classList.contains("yellow") ||
            !fichaDer.classList.contains("yellow")
          ) {
            if (
              !fichaIzq.classList.contains("yellow") &&
              fichaDer.classList.contains("yellow")
            ) {
              console.log("Horizontal threat");

              console.log("Blocking in col", colIzq);
            } else if (
              !fichaDer.classList.contains("yellow") &&
              fichaIzq.classList.contains("yellow")
            ) {
              console.log("Horizontal threat");

              console.log("Blocking in col", colDer);
            } else {
              console.log("Horizontal threat");

              let random = Math.floor(Math.random() * 2);
              random == 1
                ? console.log("Blocking in col", colDer)
                : console.log("Blocking in col", colIzq);
            }
          }
        } else if (!fichaDer) {
          if (!fichaIzq.classList.contains("yellow")) {
            console.log("Blocking in col", colIzq);
          }
        } else if (!fichaIzq) {
          if (!fichaDer.classList.contains("yellow")) {
            console.log("Blocking in col", colDer);
          }
        }
      }
    }

    //Comprueba linea horizontal con cierre en mitad O O X O
    for (let i = 0; i < casillasVacias.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillasRojas.length; j++) {
        if (
          casillasVacias[i].col - casillasRojas[j].col == 1 &&
          casillasVacias[i].row == casillasRojas[j].row
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillasRojas[j].col == 2 &&
          casillasVacias[i].row == casillasRojas[j].row
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillasRojas[j].col == -1 &&
          casillasVacias[i].row == casillasRojas[j].row
        ) {
          consecutive++;
        }
      }
      if (consecutive == 3) {
        casillaRojaPeligrosa = casillasVacias[i];
        console.log("Horizontal-middle threat");
        return console.log("Blocking in col", casillaRojaPeligrosa.col);
      }
    }

    //Comprueba linea horizontal con cierre en mitad O X O O
    for (let i = 0; i < casillasVacias.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillasRojas.length; j++) {
        if (
          casillasVacias[i].col - casillasRojas[j].col == 1 &&
          casillasVacias[i].row == casillasRojas[j].row
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillasRojas[j].col == -1 &&
          casillasVacias[i].row == casillasRojas[j].row
        ) {
          consecutive++;
        } else if (
          casillasVacias[i].col - casillasRojas[j].col == -2 &&
          casillasVacias[i].row == casillasRojas[j].row
        ) {
          consecutive++;
        }
      }
      if (consecutive == 3) {
        casillaRojaPeligrosa = casillasVacias[i];
        console.log("Horizontal-middle threat");
        return console.log("Blocking in col", casillaRojaPeligrosa.col);
      }
    }

    //Comprueba diagonales ascendentes

    for (let i = 0; i < casillasRojas.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillasRojas.length; j++) {
        if (
          casillasRojas[j].col - casillasRojas[i].col == 1 &&
          casillasRojas[j].row - casillasRojas[i].row == 1
        ) {
          consecutive++;
        } else if (
          casillasRojas[j].col - casillasRojas[i].col == 2 &&
          casillasRojas[j].row - casillasRojas[i].row == 2
        ) {
          consecutive++;
        }
      }
      if (consecutive == 2) {
        casillaRojaPeligrosa = casillasRojas[i];
        return "d-a";
      }
    }

    //Comprueba diagonales descendentes

    for (let i = 0; i < casillasRojas.length; i++) {
      let consecutive = 0;
      for (let j = 0; j < casillasRojas.length; j++) {
        if (
          casillasRojas[j].col - casillasRojas[i].col == 1 &&
          casillasRojas[j].row - casillasRojas[i].row == -1
        ) {
          consecutive++;
        } else if (
          casillasRojas[j].col - casillasRojas[i].col == 2 &&
          casillasRojas[j].row - casillasRojas[i].row == -2
        ) {
          consecutive++;
        }
      }
      if (consecutive == 2) {
        casillaRojaPeligrosa = casillasRojas[i];
        return "d-d";
      }
    }
  };

  console.log("May I have a threat?", checkRedWin());
  checkRedWin();
};

document.querySelector("#cpuDecision").addEventListener("click", () => {
  cpuDecision();
});

//Jugador 1, rojas. Jugador 2, amarillas.
let turn = 1;

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
  console.log(isLine());
  if (isLine()) {
    alert("Red wins!");
  }
  turn == 1 ? (turn = 2) : (turn = 1);
  document.querySelector("#turn").textContent = "Turno P2 (Amarillas)";

  for (casilla of casillas) {
    if (isLine()) {
      casilla.element.removeEventListener("click", addRed);
      casilla.element.removeEventListener("click", addYellow);
    } else {
      casilla.element.removeEventListener("click", addRed);
      casilla.element.addEventListener("click", addYellow);
    }
  }
  cpuDecision();
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
  if (isLine()) {
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
