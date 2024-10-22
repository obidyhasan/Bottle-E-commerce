// Get Data From Local Storage
const getDataFromLocalStorage = () => {
  const getData = localStorage.getItem("cart");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
};

// Add To Data To Local Storage
const addDataToLocalStorage = (id) => {
  const getData = getDataFromLocalStorage();
  getData.push(id);
  // Now Added to Local Storage
  localStorage.setItem("cart", JSON.stringify(getData));
};

export { getDataFromLocalStorage, addDataToLocalStorage };
