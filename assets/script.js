let displayNumFact =
  localStorage.getItem("displayNumFact") === "false" ? false : false;
let displayJoke =
  localStorage.getItem("displayJoke") === "false" ? false : true;
let displayHindiQuote =
  localStorage.getItem("displayHindiQuote") === "false" ? false : true;
let displayQuote =
  localStorage.getItem("displayQuote") === "false" ? false : true;
let displayCatPhoto =
  localStorage.getItem("displayCatPhoto") === "false" ? false : true;
let displayAdvice =
  localStorage.getItem("displayAdvice") === "false" ? false : true;
let displayDadJoke =
  localStorage.getItem("displayDadJoke") === "false" ? false : true;
let blurEffectSetting =
  localStorage.getItem("blurHeader") === "false" ? false : true;

const quotesEnglish = document.getElementById("quotesEnglish");
const hindiSuvichar = document.getElementById("hindiSuvichar");
const randomCatPhoto = document.getElementById("randomCatPhoto");
const jokes = document.getElementById("jokes");
const dadJokes = document.getElementById("dadJokes");
const goodAdvices = document.getElementById("goodAdvices");
const numberFacts = document.getElementById("numberFacts");
const blurEffects = document.getElementById("blurEffects");

quotesEnglish.checked = displayQuote;
hindiSuvichar.checked = displayHindiQuote;
randomCatPhoto.checked = displayCatPhoto;
jokes.checked = displayJoke;
dadJokes.checked = displayDadJoke;
goodAdvices.checked = displayAdvice;
numberFacts.checked = displayNumFact;
blurEffects.checked = blurEffectSetting;

quotesEnglish.addEventListener("change", () => {
  displayQuote = quotesEnglish.checked;
  localStorage.setItem("displayQuote", displayQuote);
});

hindiSuvichar.addEventListener("change", () => {
  displayHindiQuote = hindiSuvichar.checked;
  localStorage.setItem("displayHindiQuote", displayHindiQuote);
});

randomCatPhoto.addEventListener("change", () => {
  displayCatPhoto = randomCatPhoto.checked;
  localStorage.setItem("displayCatPhoto", displayCatPhoto);
});

jokes.addEventListener("change", () => {
  displayJoke = jokes.checked;
  localStorage.setItem("displayJoke", displayJoke);
});

dadJokes.addEventListener("change", () => {
  displayDadJoke = dadJokes.checked;
  localStorage.setItem("displayDadJoke", displayDadJoke);
});

goodAdvices.addEventListener("change", () => {
  displayAdvice = goodAdvices.checked;
  localStorage.setItem("displayAdvice", displayAdvice);
});

numberFacts.addEventListener("change", () => {
  displayNumFact = numberFacts.checked;
  localStorage.setItem("displayNumFact", displayNumFact);
});

blurEffects.addEventListener("change", () => {
  blurEffectSetting = blurEffects.checked;
  localStorage.setItem("blurHeader", blurEffectSetting);
});
