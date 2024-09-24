function openmenumobile() {
  var x = document.getElementById("mainmenu");
  if (x.style.display !== "inline-grid") {
    x.style.display = "inline-grid";
  } else {
    x.style.display = "none";
  }
}

//Select Experience Custom - Mobile

const radio1 = document.querySelector(".exp-input-1");
const radio2 = document.querySelector(".exp-input-2");
const radio3 = document.querySelector(".exp-input-3");
const radio4 = document.querySelector(".exp-input-4");

const labelBg1 = document.querySelector(".calm");
const labelBg2 = document.querySelector(".focus");
const labelBg3 = document.querySelector(".cleaning");
const labelBg4 = document.querySelector(".analgesic");

checkStatus();

function checkStatus(event) {
  if (radio1.checked === true) {
    labelBg1.style.backgroundColor = "#c8dcc4";
    labelBg1.style.fontWeight = "bold";
  } else {
    labelBg1.style.backgroundColor = "#fffef8";
    labelBg1.style.fontWeight = "normal";
  }
  if (radio2.checked === true) {
    labelBg2.style.backgroundColor = "#c8dcc4";
    labelBg2.style.fontWeight = "bold";
  } else {
    labelBg2.style.backgroundColor = "#fffef8";
    labelBg2.style.fontWeight = "normal";
  }
  if (radio3.checked === true) {
    labelBg3.style.backgroundColor = "#c8dcc4";
    labelBg3.style.fontWeight = "bold";
  } else {
    labelBg3.style.backgroundColor = "#fffef8";
    labelBg3.style.fontWeight = "normal";
  }
  if (radio4.checked === true) {
    labelBg4.style.backgroundColor = "#c8dcc4";
    labelBg4.style.fontWeight = "bold";
  } else {
    labelBg4.style.backgroundColor = "#fffef8";
    labelBg4.style.fontWeight = "normal";
  }

  console.log(event.target.parentNode);
  console.log(event.target.value);
}

// function checkStatus(event) {

//   console.log(event.target.parentNode);
//   console.log(event.target);

//   const inputChild = event.target;
//   const labelSelected = event.target.parentNode;
//   const labels = [labelBg1, labelBg2, labelBg3, labelBg4];

//   if (inputChild.checked === true) {
//     labelSelected.style.backgroundColor = "#000";
//   } else {
//     labels[0].style.backgroundColor = "#CCC";
//     labels[1].style.backgroundColor = "#CCC";
//     labels[2].style.backgroundColor = "#CCC";
//     labels[3].style.backgroundColor = "#CCC";
//   }
// }
