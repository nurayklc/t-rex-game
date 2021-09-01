const trex = document.querySelector("#trex");
const cactus = document.querySelector("#cactus");

function jump() {
  if (trex.classList != "trex-animate") {
    trex.classList.add("trex-animate");
    setTimeout(function () {
      trex.classList.remove("trex-animate");
    }, 500);
  }

  if (cactus.classList != "cactus-animate") {
    cactus.classList.add("cactus-animate");
  }
}

var impactControl = setInterval(() => {
  var trexBottom = parseInt(
    window.getComputedStyle(trex).getPropertyValue("bottom")
  );

  var cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft > 0 && cactusLeft < 40 && trexBottom < 40) {
    cactus.classList.remove("cactus-animate");
    alert("Game over");
  }
}, 10);
