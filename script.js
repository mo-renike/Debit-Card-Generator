const masterCard = document.querySelector("#masterCard");
const visaCard = document.querySelector("#visaCard");
const select = document.querySelector("#select");
const userName = document.querySelector("#name");
const form = document.querySelector("#form");
const date = document.querySelector("#date");
const number = document.querySelector("#card-number");
const cardName = document.querySelector(".cardName");

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let imgs = ["img/visa.png", "img/master.png"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = userName.value;
  if (name && name !== " ") {
    cardName.innerHTML = name;
    number.innerHTML = `5399 `;
    for (let i = 0; i < 12; i++) {
      number.innerHTML += num[getRandomNum()];
    }
  } else {
    window.location.reload();
  }
  function getRandomNum() {
    return Math.floor(Math.random() * num.length);
  }

  if (select.value == "master") {
      
  } else {
  }
});

const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

cardContainer.innerHTML = `
<div class="card" id="visaCard">
          <div class="logos">
            <img src="img/visa.png" />
            <img src="img/chip.png" class="chip" />
          </div>

            <div class="details">
            <div id="cardNumber">
              <p id="card-number"></p>
              <i class="fa fa-caret-right"></i>
            </div>
            <p id="date">10/24</p>
            <p class="cardName"></p>
          </div>
        </div>`;
