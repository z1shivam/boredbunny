const goToTopBtn = document.getElementById("goToTopBtn");

(function applyBlurEffectSetting() {
  if (localStorage.getItem("blurHeader") === "false" ? false : true) {
    document
      .querySelector("header")
      .classList.add("bg-opacity-30", "backdrop-blur-md");
  }
})()

window.onscroll = function () {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
};