function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter(); 
const btn = document.getElementById("clickBtn");
const display = document.getElementById("clickDisplay");

btn.addEventListener("click", () => {
  const newCount = counter();
  display.textContent = `Clicked ${newCount} time${newCount === 1 ? '' : 's'}`;
});
