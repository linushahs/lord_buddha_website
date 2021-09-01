const nextbtn = document.querySelector("#nextbtn");
const prevbtn = document.querySelector("#prevbtn");
const image = document.querySelector(".images");

const elem = document.querySelectorAll("li");
const circleEl = document.querySelectorAll(".c");

elem.forEach((el) => {
  el.onclick = () => {
    elem.forEach((el) => {
      el.classList.remove("active");
    });
    el.classList.add("active");
  };
});

//slider functionality
let count = 1;

setInterval(() => {
  nextSlide();
}, 2000);

function nextSlide() {
  //Increment count
  count += 1;

  //check whether count exceed 5 . if it exceed: init count to 1
  if (count > 4) {
    count = 1;
  }

  //Update the User Interface
  image.src = `./assets/slider/bg${count}.jpg`;
  circleEl.forEach((el) => el.classList.remove("active"));
  document.querySelector(`.c-${count}`).classList.add("active");
}

function prevSlide() {
  count -= 1;
  if (count < 1) {
    count = 4;
  }
  image.src = `./assets/slider/bg${count}.jpg`;
}

//Hamburger responsive functionality
const bar = document.getElementById("bar");
const cross = document.getElementById("cross");
const sidebar = document.getElementById("sidebar");

bar.onclick = () => {
  bar.classList.add("hide");
  cross.classList.remove("hide");
  sidebar.classList.remove("hide");
};

cross.onclick = () => {
  cross.classList.add("hide");
  bar.classList.remove("hide");
  sidebar.classList.add("hide");
};
