export const isJSONValid = (jsonString) => {
  try {
    JSON.parse(jsonString);

    return true;
  } catch (error) {
    console.error(`isJsonValid error: ${error}`);

    return false;
  }
};
