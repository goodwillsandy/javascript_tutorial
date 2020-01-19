// runs on trigger of "DOMContentLoaded" event
document.addEventListener("DOMContentLoaded", function() {
  let text = "";
  let ele = document.getElementById("js-text");
  for (let i = 0; i < 200; i++) {
    text += String.fromCharCode(Math.floor(Math.random() * 90) + 13);
  }
  ele.innerHTML = text;
});

// this code will run asap the file is recieved
let str = "";
for (let i = 0; i < 7000; i++) {
  str += String.fromCharCode(Math.floor(Math.random() * 90) + 13);
}
console.log(str);
