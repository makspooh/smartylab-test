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
  const rotatedMatrix = new Array(cols).fill(0).map(() => []);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (direction === "left") {
        rotatedMatrix[i].push(matrix[j][cols - 1 - i]);
      } else if (direction === "right") {
        rotatedMatrix[i].unshift(matrix[j][cols - 1 - i]);
      }
    }
  }

  return rotatedMatrix;
};
