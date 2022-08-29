const shareBtn = document.querySelector("#shareBtn");
const shareSect = document.querySelector(".share__action");
const changingSect = document.querySelector("#changingSect");
const mblShr = document.querySelector("#mblShr");
const viewChange = document.documentElement.clientWidth || window.innerWidth;

window.addEventListener("resize", () => {
  window.location.reload();
});

if (window.matchMedia("(min-width: 1260px)").matches) {
  shareBtn.addEventListener("click", () => {
    shareSect.classList.toggle("appear");
  });
} else {
  console.log(viewChange);
  shareBtn.addEventListener("click", () => {
    changingSect.innerHTML = `<div class="mobile__action">
    <p class="mobile__action--text">Share</p>
    <button class="mobile__action--fb">
      <img src="images/icon-facebook.svg" alt="" />
    </button>
    <button class="mobile__action--tw">
      <img src="images/icon-twitter.svg" alt="" />
    </button>
    <button class="mobile__action--pt">
      <img src="images/icon-pinterest.svg" alt="" />
    </button>
    <button id="mblShr" class="mobile__action--share">
      <img  class="mobile__action--share-btn" src="images/icon-share.svg" alt="" />
    </button>
    </div>`;
    changingSect.classList.toggle("card__text--user");
  });
}

/* if (viewChange < 1260) {
  console.log(viewChange);
  shareBtn.addEventListener("click", () => {
    console.log("success!");
  });
} else {
  shareBtn.addEventListener("click", () => {
    shareSect.classList.toggle("appear");
  });
} 
 */
