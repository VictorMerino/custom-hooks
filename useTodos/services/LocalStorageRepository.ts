export const getItems = () => {
  return JSON.parse(localStorage.getItem("todos"));
};
export const setItem = (items) => {
  localStorage.setItem("todos", JSON.stringify(items));
};
