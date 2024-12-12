// Create an array to store shopping list items
let shoppingList = [];

// Get the input field, list container, and buttons from the HTML
const inputField = document.getElementById("input-field");
const listContainer = document.getElementById("shopping-list");
const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");

// Function to add a new item to the list
function addItemToList(itemText) {
  // Create a new list item
  const listItem = document.createElement("li");
  listItem.textContent = itemText;

  // Create a "Mark Purchased" button
  const markPurchasedButton = document.createElement("button");
  markPurchasedButton.textContent = "Mark Purchased";
  markPurchasedButton.addEventListener("click", function () {
    markItemAsPurchased(listItem);
  });

  // Add the "Mark Purchased" button to the list item
  listItem.appendChild(markPurchasedButton);

  // Add the list item to the list container
  listContainer.appendChild(listItem);

  // Add the item to the shopping list array
  shoppingList.push(itemText);
}

// Function to mark an item as purchased
function markItemAsPurchased(listItem) {
  // Update the list item to indicate it's purchased
  listItem.style.textDecoration = "line-through";
  listItem.style.backgroundColor = "lightgreen";
}

// Function to clear the list
function clearList() {
  // Clear the list container
  listContainer.innerHTML = "";

  // Clear the shopping list array
  shoppingList = [];
}

// Add event listener to the "Add" button
addButton.addEventListener("click", function () {
  // Get the text from the input field
  const itemText = inputField.value.trim();

  // Check if the input field is not empty
  if (itemText !== "") {
    // Add the item to the list
    addItemToList(itemText);

    // Clear the input field
    inputField.value = "";
  } else {
    alert("Please enter an item to add to the list.");
  }
});

// Add event listener to the "Clear List" button
clearButton.addEventListener("click", function () {
  // Clear the list
  clearList();
});