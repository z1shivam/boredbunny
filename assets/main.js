let displayNumFact = localStorage.getItem("displayNumFact") === "false" ? false : true;
let displayJoke = localStorage.getItem("displayJoke") === "false" ? false : true;
let displayHindiQuote = localStorage.getItem("displayHindiQuote") === "false" ? false : true;
let displayQuote = localStorage.getItem("displayQuote") === "false" ? false : true;
let displayCatPhoto = localStorage.getItem("displayCatPhoto") === "false" ? false : true;
let displayAdvice = localStorage.getItem("displayAdvice") === "false" ? false : true;
let displayDadJoke = localStorage.getItem("displayDadJoke") === "false" ? false : true;
let blurHeader = localStorage.getItem("blurHeader") === "false" ? false : true;

async function fetchAndDisplayQuote() {
  try {
    const mainElement = document.getElementById("insertHere");

    const sectionElement = document.createElement("section");
    sectionElement.classList.add("px-2", "py-2", "relative", "overflow-hidden");

    const skeleton = `
    <img src="./assets/pageImages/panda.svg" class="absolute w-36 -right-5 -bottom-3  " alt="">
    <div class="rounded-md border-2 w-5/6 border-indigo-200">
      <h2 class="font-nanum text-2xl px-2 text-indigo-800 bg-indigo-200 py-1">A quote to think</h2>
      <div class="px-2 py-3">
        <p class="text-base quoteElement pr-3 text-indigo-800"><br>Loading...<br><br></p>
        <p class="text-indigo-500 text-sm py-1.5 authorElement"></p>
      </div>
    </div>
    `;

    sectionElement.innerHTML = skeleton;

    mainElement.appendChild(sectionElement);

    const response = await fetch(
      "https://api.quotable.io/quotes/random?minLength=100&maxLength=140",
    );
    const data = await response.json();

    const quoteElement = sectionElement.querySelector(".quoteElement");
    const authorElement = sectionElement.querySelector(".authorElement");

    quoteElement.textContent = data[0].content;
    authorElement.textContent = `${data[0].author}`;
  } catch (error) {
    console.error("Error fetching and displaying quote:", error);
  }
}
async function fetchAndDisplayCatPhoto() {
  const mainElement = document.getElementById("insertHere");

  const sectionElement = document.createElement("section");
  sectionElement.classList.add(
    "relative",
    "overflow-hidden",
    "px-2",
    "py-2",
    "pr-2.5",
  );

  const skeleton = `
      <img src="./assets/pageImages/cat.svg" class="absolute w-20 -top-3 left-4" alt="" />
      <div class="rounded-md border-2 border-sky-200">
        <h2 class="font-nanum bg-sky-200 px-2 py-1 text-2xl text-sky-800 text-center">
          A random cat photo
        </h2>
        <div class="rounded-sm dogPicElement">
        <br><br>
          Loading...
          <br><br><br>
        </div>
      </div>
    `;

  sectionElement.innerHTML = skeleton;

  mainElement.appendChild(sectionElement);
  const dogPicElement = sectionElement.querySelector(".dogPicElement");
  const imgElement = document.createElement("img");
  const timestamp = new Date().getTime();
  imgElement.src = `https://source.unsplash.com/random/300x300/?kitten&${timestamp}`;
  imgElement.alt = "Random Dog";
  imgElement.classList.add("w-full", "rounded-sm");

  dogPicElement.innerHTML = "";
  dogPicElement.appendChild(imgElement);
}
async function fetchAndDisplayNumFact() {
  try {
    const mainElement = document.getElementById("insertHere");

    const sectionElement = document.createElement("section");
    sectionElement.classList.add("px-2", "py-2", "relative", "overflow-hidden");

    const skeleton = `
    <img src="./assets/pageImages/bunny.svg" class="absolute w-32 -left-5 -bottom-1  " alt="">
    <div class="rounded-md border-2 w-5/6 float-right border-pink-200">
      <h2 class="font-nanum text-2xl px-2 text-pink-800 bg-pink-200 py-1 text-right">A fact about a number</h2>
      <div class="px-2 py-1">
        <p class="text-base numFactElement pl-3 py-2 text-pink-800 text-right"><br>Loading...<br><br></p>
      </div>
    </div>
    `;

    sectionElement.innerHTML = skeleton;

    mainElement.appendChild(sectionElement);

    const response = await fetch("http://numbersapi.com/random");
    const data = await response.text();
    const quoteElement = sectionElement.querySelector(".numFactElement");

    quoteElement.textContent = data;
  } catch (error) {
    console.error("Error fetching and displaying num fact:", error);
  }
}
async function fetchAndDisplayJoke() {
  try {
    const mainElement = document.getElementById("insertHere");

    const sectionElement = document.createElement("section");
    sectionElement.classList.add("px-2", "py-2", "relative", "overflow-hidden");

    const skeleton = `
        <div class="rounded-md border-2 border-orange-200">
          <h2 class="font-nanum text-2xl px-2 text-orange-800 bg-orange-200 py-1 text-center">a joke to make your day</h2>
          <div class="px-2 py-3">
            <p class="text-base setupElement py-1 text-center text-orange-800"><br>Loading...<br><br></p>
            <p class="text-orange-600 text-base text-center py-1 punchlineElement"></p>
          </div>
        </div>
      `;

    sectionElement.innerHTML = skeleton;

    mainElement.appendChild(sectionElement);

    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky?blacklistFlags=nsfw,sexist,explicit&type=twopart",
    );
    const data = await response.json();

    const setupElement = sectionElement.querySelector(".setupElement");
    const punchlineElement = sectionElement.querySelector(".punchlineElement");

    setupElement.innerHTML = `${data.setup}`;
    punchlineElement.textContent = data.delivery;
  } catch (error) {
    console.error("Error fetching and displaying joke:", error);
  }
}
async function fetchAndDisplayAdvice() {
  try {
    const mainElement = document.getElementById("insertHere");

    const sectionElement = document.createElement("section");
    sectionElement.classList.add("px-2", "py-2", "relative", "overflow-hidden");

    const skeleton = `
      <img
      src="./assets/pageImages/grandma.svg"
      class="absolute -bottom-1 -right-5 w-28"
      alt="image of grandma"
    />
    <div class=" w-5/6 rounded-md border-2 border-green-200">
      <h2
        class="font-nanum bg-green-200 px-2 py-1 text-2xl text-green-800"
      >
        A piece of advice
      </h2>
      <div class="px-2 py-1">
        <p
          class="adviceElement py-2 pr-3 text-base text-green-800"
        >
          Loading...
        </p>
      </div>
    </div>
      `;

    sectionElement.innerHTML = skeleton;

    mainElement.appendChild(sectionElement);

    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    const adviceElement = sectionElement.querySelector(".adviceElement");
    adviceElement.innerHTML = `${data.slip.advice}`;
  } catch (error) {
    console.error("Error fetching and displaying advice:", error);
  }
}
async function fetchAndDisplayRandomDadJoke() {
  try {
    const mainElement = document.getElementById("insertHere");

    const sectionElement = document.createElement("section");
    sectionElement.classList.add("px-2", "py-2", "relative", "overflow-hidden");

    const skeleton = `
    <img
    src="./assets/pageImages/monkey.svg"
    class="absolute -bottom-1 -left-5 w-32"
    alt=""
  />
  <div class="float-right w-5/6 rounded-md border-2 border-fuchsia-200">
    <h2
      class="bg-fuchsia-200 px-2 py-1 text-right font-nanum text-2xl text-fuchsia-800"
    >
      daddy jokes returns
    </h2>
    <div class="px-1.5 pt-3 pb-4">
      <p class="dadjokeElement px-2 text-right text-base text-fuchsia-800">
        <br />Loading...<br /><br />
      </p>
    </div>
  </div>
      `;

    sectionElement.innerHTML = skeleton;

    mainElement.appendChild(sectionElement);

    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Your Library or Website (Your URL or Email)',
      },
    });

    const data = await response.json();
    const joke = data.joke;
    const adviceElement = sectionElement.querySelector(".dadjokeElement");
    adviceElement.innerHTML = `${joke}`;

  } catch (error) {
    console.error('Error fetching dad joke:', error);
  }
}
async function fetchAndDisplayHindiQuote(){
  try {
    const mainElement = document.getElementById("insertHere");

    const sectionElement = document.createElement("section");
    sectionElement.classList.add("px-2", "py-2", "relative", "overflow-hidden");

    const skeleton = `
    <img
    src="./assets/pageImages/monk.png"
    class="absolute bottom-0 -right-0 w-28"
    alt=""
  />
  <div class="w-5/6 rounded-md border-2 border-red-200 font-hindi">
    <h2
      class="bg-red-200 px-2 py-1 font-nanum text-xl font-medium text-red-800"
    >
    शुभ सुविचार 
    </h2>
    <div class="px-2 py-4">
      <p class="hindiQuoteELement pr-3 text-base text-red-800">
        <br />Loading...<br /><br />
      </p>
    </div>
  </div>
    `;

    sectionElement.innerHTML = skeleton;

    mainElement.appendChild(sectionElement);

    const response = await fetch(
      "https://hindi-quotes.vercel.app/random/success",
    );
    const data = await response.json();
    const hindiQuoteElement = sectionElement.querySelector(".hindiQuoteELement");

    hindiQuoteElement.innerHTML = data.quote;
  } catch (error) {
    console.error("Error fetching and displaying quote:", error);
  }
}

const targetElement = document.querySelector("#bottom");
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        displayQuote && fetchAndDisplayQuote();
        displayNumFact && fetchAndDisplayNumFact();
        displayJoke && fetchAndDisplayJoke();
        displayHindiQuote && fetchAndDisplayHindiQuote();
        displayCatPhoto && fetchAndDisplayCatPhoto();
        displayAdvice && fetchAndDisplayAdvice();
        displayDadJoke && fetchAndDisplayRandomDadJoke();
      } else {
      }
    });
  },
  { threshold: 0 },
);

observer.observe(targetElement);
