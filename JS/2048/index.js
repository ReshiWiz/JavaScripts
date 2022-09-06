document.addEventListener("DOMContentLoaded", () => {
  const gridDisplay = document.querySelector(".grid");
  const scoreDisplay = document.getElementById("score");
  const resultDisplay = document.getElementById("result");
  const width = 4;
  let squares = [];
  //   let box = null;

  // function createBoard() {
  //   for (let i = 0; i < width * width; i++) {
  //     // console.log(i);
  //       square = document.createElement('div');
  //       square.innerHTML = 0;
  //       gridDisplay.appendChild(square);
  //       squares.push(square);
  //       console.log(square);
  //   }
  //   generate()
  // }
  // createBoard();

  // // generate a number ;

  // function generate() {
  //   let randomNumber = Math.floor(Math.round() * squares.length);
  //       //  console.log(randomNumber);
  //   if(squares[randomNumber].innerHTML == 0) {
  //       squares[randomNumber].innerHTML = 2
  //   }else generate()
  // }

  // function to create board

  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      let square = document.createElement("div");
      square.innerHTML = 0;
      gridDisplay.appendChild(square);
      squares.push(square);
    }
    generateNum();
    generateNum();
  }

  createBoard();

  // generate  a number

  function generateNum() {
    // let randomNum = Math.floor(Math.random() * squares.length);
    // if (squares[randomNum].innerHTML == 0) {
    //   squares[randomNum].innerHTML = 2;
    // }
    // else {
    //   generateNum();
    // }
    let randomNumber = Math.floor(Math.random() * squares.length);
    if (squares[randomNumber].innerHTML == 0) {
      squares[randomNumber].innerHTML = 2;
    } else generateNum();
  }
  function moveRight() {
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i + 1].innerHTML;
        let totalThree = squares[i + 2].innerHTML;
        let totalFour = squares[i + 3].innerHTML;
        let row = [
          parseInt(totalOne),
          parseInt(totalTwo),
          parseInt(totalThree),
          parseInt(totalFour),
        ];
        // console.log(row);
        let filterRow = row.filter((num) => num);
        // console.log(filterRow);
        let missing = 4 - filterRow.length;
        let zeros = Array(missing).fill(0);
        // console.log(zeros);
        let newRow = zeros.concat(filterRow);
        // console.log(newRow);
        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
      }
    }
  }
  // moveRight();

  // move left
  function moveLeft() {
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i + 1].innerHTML;
        let totalThree = squares[i + 2].innerHTML;
        let totalFour = squares[i + 3].innerHTML;
        let row = [
          parseInt(totalOne),
          parseInt(totalTwo),
          parseInt(totalThree),
          parseInt(totalFour),
        ];
        // console.log(row);
        let filterRow = row.filter((num) => num);
        // console.log(filterRow);
        let missing = 4 - filterRow.length;
        let zeros = Array(missing).fill(0);
        // console.log(zeros);
        let newRow = filterRow.concat(zeros);
        // console.log(newRow);
        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
      }
    }
  }

  //swipedown down

  function moveDown() {
    for (let i = 0; i < 4; i++) {
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i + width].innerHTML;
      let totalThree = squares[i + width * 2].innerHTML;
      let totalFour = squares[i + width * 3].innerHTML;
      let colum = [
        parseInt(totalOne),
        parseInt(totalTwo),
        parseInt(totalThree),
        parseInt(totalFour),
      ];
      let filteredColum = colum.filter((num) => num);
      let missing = 4 - filteredColum.length;
      let zeros = Array(missing).fill(0);
      let newColum = zeros.concat(filteredColum);
      squares[i].innerHTML = newColum[0];
      squares[i + width].innerHTML = newColum[1];
      squares[i + width * 2].innerHTML = newColum[2];
      squares[i + width * 3].innerHTML = newColum[3];
    }
  }

  //swipeUp down

  function moveUp() {
    for (let i = 0; i < 4; i++) {
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i + width].innerHTML;
      let totalThree = squares[i + width * 2].innerHTML;
      let totalFour = squares[i + width * 3].innerHTML;

      let colum = [
        parseInt(totalOne),
        parseInt(totalTwo),
        parseInt(totalThree),
        parseInt(totalFour),
      ];
      let filteredColum = colum.filter((num) => num);
      let missing = 4 - filteredColum.length;
      let zeros = Array(missing).fill(0);
      let newColum = filteredColum.concat(zeros);

      squares[i].innerHTML = newColum[0];
      squares[i + width].innerHTML = newColum[1];
      squares[i + width * 2].innerHTML = newColum[2];
      squares[i + width * 3].innerHTML = newColum[3];
    }
  }

  // function combineRow
  function combineRow() {
    for (let i = 0; i < 15; i++) {
      if (squares[i].innerHTML === squares[i + 1].innerHTML) {
        let combineTotal =
          parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
        squares[i].innerHTML = combineTotal;
        squares[i + 1].innerHTML = 0;
      }
    }
  }

  // function combineColum
  function combineColum() {
    for (let i = 0; i < 12; i++) {
      if (squares[i].innerHTML === squares[i + width].innerHTML) {
        let combineTotal =
          parseInt(squares[i].innerHTML) +
          parseInt(squares[i + width].innerHTML);
        squares[i].innerHTML = combineTotal;
        squares[i + width].innerHTML = 0;
      }
    }
    checkForWin();
  }

  // keys
  function control(e) {
    if (e.keyCode === 39) {
      // moveRight()
      keyRight();
    } else if (e.keyCode === 37) {
      keyLeft();
    } else if (e.keyCode === 38) {
      keyUp();
    } else if (e.keyCode === 40) {
      keyDown();
    }
  }
  document.addEventListener("keyup", control);

  function keyRight() {
    moveRight();

    combineRow();
    moveRight();
    generateNum();
  }
  // control()

  function keyLeft() {
    moveLeft();
    combineRow();
    moveLeft();
    generateNum();
  }

  function keyDown() {
    moveDown();
    combineColum();
    moveDown();
    generateNum();
  }

  function keyUp() {
    moveUp();
    combineColum();
    moveUp();
    generateNum();
  }

  function checkForWin() {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].innerHTML > 4) {
        resultDisplay.innerHTML = "You Won this game";
        document.removeEventListener("keyup", control);
      }
    }
  }
});

// swipe left
