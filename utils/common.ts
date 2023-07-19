export const isValidArray = (array: any[]): Boolean => {
  return Array.isArray(array) && array.length > 0;
};
