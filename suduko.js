/*:: Create a Function where it filters out empyty Spaces ::*/

const isEmpty = (array) => {
  /* :: Filter out Empty Spaces of the array :: */
  const digits = array.filter((character) => character !== ".");
  return digits.length === [...new Set(digits)].length;
};

const isValidSudoku = (board) => {
  const validated = [];
  const grids = [];

  let validCounter = 0;

  board.forEach((row, index) => {
    row.map((d) => {
      /* :: check if value is a letter ::*/
      var reg = /^-?\d*\.?\d*$/;
      if (!d.match(reg)) {
        validCounter += 1;
      }
    });
  });

  if (validCounter === 0) {
    board.forEach((row, rowIndex) => {
      /* :: push if row is validated ::*/

      validated.push(isEmpty(row));

      /* check validation for column then push to its own array */
      const column = [];
      for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
        column.push(board[columnIndex][rowIndex]);
      }
      validated.push(isEmpty(column));

      //grids
      grids.push([]);
    });

    //grids
    board.forEach((row, rowIndex) => {
      row.forEach((character, charIndex) => {
        let gridRow = 0;
        /*:: increase grid row until 2 ::*/

        if (rowIndex >= 3 && rowIndex <= 5) {
          gridRow = 1;
        } else if (rowIndex >= 6 && rowIndex <= 8) {
          gridRow = 2;
        }

        /* :: between 3 and 5 and gridrow must increment to 3 :: */
        if (charIndex >= 3 && charIndex <= 5) {
          gridRow += 3;
        } else if (charIndex >= 6 && charIndex <= 8) {
          gridRow += 6;
        }

        grids[gridRow].push(character);
      });
    });

    /* :: to check if the grid has the correct inputs ::*/
    // test purposes

    //   console.table(grids);

    grids.forEach((grid) => {
      validated.push(isEmpty(grid));
    });

    return validated.every((value) => value === true);
  } else {
    return false;
  }
};

module.exports = isValidSudoku;
