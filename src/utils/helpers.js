export const isJson = (jsonString) => {
  try {
    JSON.parse(jsonString);

    return true;
  } catch (error) {
    console.error(`isJsonValid error: ${error}`);

    return false;
  }
};

export const formatJson = (json) => {
  const isValid = isJson(json);

  if (!isValid) {
    return { isValid, formatted: json };
  }

  const parsed = JSON.parse(json);
  const formatted = JSON.stringify(parsed, null, 2);

  return { isValid, formatted };
};

export const isMatrix = (matrix) => {
  const numRows = matrix.length;
  const numCols = matrix[0]?.length;

  if (!Array.isArray(matrix) || !numRows) {
    return false;
  }

  for (let i = 1; i < numRows; i++) {
    if (!Array.isArray(matrix[i]) || matrix[i].length !== numCols) {
      return false;
    }
  }

  return true;
};

export const rotateMatrix = (matrix, direction) => {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  let rotatedMatrix;

  if (direction === "right") {
    rotatedMatrix = new Array(numCols).fill(null).map(() => []);
  } else {
    rotatedMatrix = new Array(numCols)
      .fill(null)
      .map(() => new Array(numRows).fill(null));
  }

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (direction === "right") {
        rotatedMatrix[col][numRows - 1 - row] = matrix[row][col];
      } else if (direction === "left") {
        rotatedMatrix[numCols - 1 - col][row] = matrix[row][col];
      }
    }
  }

  return rotatedMatrix;
};
