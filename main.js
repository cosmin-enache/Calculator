window.onload = function () {
    let x;
    let y;
    let op;
    const sum = (x, y) => {return x + y};
    const dif = (x, y) => {return x - y};
    const mul = (x, y) => {return x * y};
    const div = (x, y) => {return x / y};
    if(op === '+') {sum(x, y)}
    else if (op === '-') {dif(x, y)}
    else if (op === '*') {mul(x, y)}
    else if (op === '/') {div(x, y)}

    addButtonListeners();

}

function addButtonListeners() {
  let buttonNodes = document.querySelectorAll("button");
  for (let i = 0; i < buttonNodes.length; i++) {
    let buttonNode = buttonNodes[i];
    buttonNode.addEventListener("click", buttonCallback);
  }
}

function buttonCallback() {
  alert("clicked!");
}
