
var container = document.getElementById("container");
var array = [];

/* Generate a random array of numbers
function generateArray() {
  var newArray = [];
  for (var i = 0; i < 5; i++) {
    newArray.push(Math.floor(Math.random() * 100) + 1);
  }
  return newArray;
}

// Render the array as bars in the container
function renderArray() {
  container.innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    var bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] + "px";
    container.appendChild(bar);
  }
}*/

// Generate a random array of numbers
function generateArray() {
  var newArray = [];
  for (var i = 0; i < 15; i++) {
    newArray.push(Math.floor(Math.random() * 100) + 1);
  }
  return newArray;
}

// Render the array as bars in the container, including height labels
function renderArray() {
  container.innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    var bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] + "px";

    // Create a label to display the height value
    var label = document.createElement("span");
    label.classList.add("bar-label");
    label.textContent = array[i]; // Set the text content to the height value
    
    bar.appendChild(label); // Append label to the bar

    container.appendChild(bar);
  }
}

// ... (rest of your existing code remains unchanged)


// Bubble Sort algorithm implementation
async function bubbleSort() {
  var len = array.length;
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < len - 1; i++) {
      // Mark the comparing elements with red color
      var bars = document.getElementsByClassName("bar");
      bars[i].classList.add("bar-comparing");
      bars[i + 1].classList.add("bar-comparing");

      // Pause for visualization
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (array[i] > array[i + 1]) {
        // Swap the elements
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
        renderArray(); // Render the array after each swap

        // Mark the swapping elements with green color
        bars[i].classList.remove("bar-comparing");
        bars[i].classList.add("bar-swapping");
        bars[i + 1].classList.remove("bar-comparing");
        bars[i + 1].classList.add("bar-swapping");

        // Pause for visualization
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Revert the color back to default
        bars[i].classList.remove("bar-swapping");
        bars[i + 1].classList.remove("bar-swapping");
      } else {
        // Revert the color back to default
        bars[i].classList.remove("bar-comparing");
        bars[i + 1].classList.remove("bar-comparing");
      }
    }
  } while (swapped);
}

// Start the sorting process
function startSorting() {
  bubbleSort();
}

// Reset the array with new random values
function resetArray() {
  array = generateArray();
  renderArray();
}

// Initialize the array and render it
array = generateArray();
renderArray();
