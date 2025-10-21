let count = 0;
let savedData = "";

function increment() {
  count++;
  document.getElementById("count").textContent = count;
}

function save() {
  savedData += count + " - ";
  document.getElementById("saved-counts").textContent = "Previous Saves: " + savedData;
  count = 0;
  document.getElementById("count").textContent = count;
}
