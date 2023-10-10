const isJson = (jsonString) => {
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
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rotatedMatrix = new Array(cols).fill(null).map(() => new Array(rows));

  if (direction === "left") {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        rotatedMatrix[cols - col - 1][row] = matrix[row][col];
      }
    }
  }

  if (direction === "right") {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        rotatedMatrix[col][rows - row - 1] = matrix[row][col];
      }
    }
  }

  return rotatedMatrix;
};
