const masterCard = document.querySelector("#masterCard");
const visaCard = document.querySelector("#visaCard");
const select = document.querySelector("#select");
const userName = document.querySelector("#name");
const form = document.querySelector("#form");
const dates = document.querySelectorAll("#date");
const numberMaster = document.querySelector("#master-number");
const numberVisa = document.querySelector("#visa-number");
const cardName = document.querySelectorAll(".cardName");
const container = document.querySelector(".card-container");

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const date = new Date();
const month = date.getMonth();
const newMonth = ` ${month < 10 ? `0${month}` : month}`;
const year = date.getFullYear() + 3;
const newYear = year.toString().substr(2);

let mo = "1234567890987655";
let joy = mo.match(/.{1,4}/g);
console.log(joy.join(" "));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = userName.value;

  if (name && name !== " ") {
    for (const names of cardName) {
      names.innerHTML = name;
    }
    for (const exp of dates) {
      exp.innerHTML = `${newMonth}/${newYear}`;
    }
    if (select.value == "master") {
      masterCard.style.display = "flex";
      visaCard.style.display = "none";
      numberMaster.innerHTML = `5399 `;
      for (let i = 0; i < 12; i++) {
        numberMaster.innerHTML += num[getRandomNum()];
      }
    } else {
      masterCard.style.display = "none";
      visaCard.style.display = "flex";
      numberVisa.innerHTML = `4578 `;
      for (let i = 0; i < 12; i++) {
        numberVisa.innerHTML += num[getRandomNum()];
      }
    }
  } else {
    window.location.reload();
  }
});

function getRandomNum() {
  return Math.floor(Math.random() * num.length);
}
